let currentIndicatorCode = null;
let currentSortKey = null;
let currentSortDirection = "asc";

function getCurrentIndicator() {
  return indicators[currentIndicatorCode];
}

function normalizeString(str) {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getFlagsInfo(row) {
  const raw = row["Flags"];
  if (raw === null || raw === undefined) {
    return { hasFlags: false, flagsArray: [], display: "" };
  }
  let text = String(raw).trim();
  if (!text || /^(nan|null|undefined)$/i.test(text)) {
    return { hasFlags: false, flagsArray: [], display: "" };
  }
  const parts = text.split(",").map(s => s.trim()).filter(Boolean);
  return {
    hasFlags: parts.length > 0,
    flagsArray: parts,
    display: parts.join(",")
  };
}

function classToCss(classe) {
  if (!classe) return "";
  const normalized = normalizeString(classe);
  if (normalized.startsWith("baixa")) return "class-baixa";
  if (normalized.startsWith("observacao")) return "class-observacao";
  if (normalized.startsWith("média") || normalized.startsWith("media")) return "class-media";
  if (normalized.startsWith("alta")) return "class-alta";
  return "";
}

function getSelectedAlerts() {
  return Array.from(document.querySelectorAll(".alert-filter"))
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

function getSelectedClasses() {
  return Array.from(document.querySelectorAll(".class-filter"))
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

function compareRows(a, b) {
  const key = currentSortKey;
  const direction = currentSortDirection === "asc" ? 1 : -1;

  let valA = a[key];
  let valB = b[key];

  if (valA == null && valB == null) return 0;
  if (valA == null) return 1 * direction;
  if (valB == null) return -1 * direction;

  const numericLike =
    key !== "Segmento" && key !== "Flags" && key !== "Classe";

  if (numericLike) {
    const numA = Number(valA);
    const numB = Number(valB);
    if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
      return (numA - numB) * direction;
    }
  }

  const strA = normalizeString(valA);
  const strB = normalizeString(valB);

  if (strA < strB) return -1 * direction;
  if (strA > strB) return 1 * direction;
  return 0;
}

function applyFilters({ resetSortOnAll = false } = {}) {
  const indicator = getCurrentIndicator();
  if (!indicator) return;

  const alertMode = document.querySelector('input[name="alertMode"]:checked').value;
  const headers = document.querySelectorAll("#indicator-table th.sortable");

  if (alertMode === "all" && resetSortOnAll) {
    currentSortKey = null;
    currentSortDirection = "asc";
    headers.forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));
  }

  let rows = indicator.rows.slice();

  if (alertMode === "filtered") {
    const selectedAlertsArr = getSelectedAlerts();
    const selectedAlerts = new Set(selectedAlertsArr);
    const selectedClasses = new Set(getSelectedClasses());

    if (selectedClasses.size > 0) {
      rows = rows.filter(row => selectedClasses.has(row["Classe"]));
    }

    const allCodes = Object.keys(indicator.alerts || {});
    allCodes.push("NONE");
    const activeAlerts =
      selectedAlerts.size > 0 ? selectedAlerts : new Set(allCodes);

    rows = rows.filter(row => {
      const info = getFlagsInfo(row);
      const hasFlags = info.hasFlags;
      const rowAlerts = info.flagsArray;
      let match = false;
      if (hasFlags && rowAlerts.some(a => activeAlerts.has(a))) {
        match = true;
      }
      if (!hasFlags && activeAlerts.has("NONE")) {
        match = true;
      }
      return match;
    });
  }

  if (currentSortKey) {
    rows.sort(compareRows);
  } else {
    // order of Excel
    rows.sort((a, b) => {
      const ia = a.__idx ?? 0;
      const ib = b.__idx ?? 0;
      return ia - ib;
    });
  }

  renderTableRows(rows);
}

function renderTableRows(rows) {
  const indicator = getCurrentIndicator();
  const tbody = document.querySelector("#indicator-table tbody");
  tbody.innerHTML = "";

  rows.forEach((row, idx) => {
    const tr = document.createElement("tr");
    const css = classToCss(row["Classe"]);
    if (css) tr.classList.add(css);

    const flagsInfo = getFlagsInfo(row);

    indicator.columns.forEach(col => {
      const key = col.key;
      let value = row[key];

      if (
        value != null &&
        key !== "Segmento" &&
        key !== "Flags" &&
        key !== "Classe" &&
        typeof value === "number"
      ) {
        value = value.toFixed(2);
      }

      if (key === "Flags") {
        value = flagsInfo.display;
      }

      const td = document.createElement("td");
      td.textContent = value == null ? "" : value;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  const summary = document.getElementById("summary");
  summary.textContent = `${rows.length} de ${getCurrentIndicator().rows.length} segmentos exibidos.`;
}

function setupSorting() {
  const headerRow = document.getElementById("table-header-row");
  const headers = headerRow.querySelectorAll("th.sortable");
  headers.forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.key;
      if (!key) return;

      if (currentSortKey === key) {
        currentSortDirection = currentSortDirection === "asc" ? "desc" : "asc";
      } else {
        currentSortKey = key;
        currentSortDirection = "asc";
      }

      headers.forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));
      th.classList.add(
        currentSortDirection === "asc" ? "sorted-asc" : "sorted-desc"
      );

      applyFilters({ resetSortOnAll: false });
    });
  });
}

function buildTableHeader() {
  const indicator = getCurrentIndicator();
  const headerRow = document.getElementById("table-header-row");
  headerRow.innerHTML = "";

  indicator.columns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col.label;
    th.dataset.key = col.key;
    th.classList.add("sortable");
    headerRow.appendChild(th);
  });

  setupSorting();
}

function buildAlertFilters() {
  const indicator = getCurrentIndicator();
  const container = document.getElementById("alert-checkboxes");
  container.innerHTML = "";

  const alerts = indicator.alerts || {};
  const codes = Object.keys(alerts).sort();

  codes.forEach(code => {
    const full = alerts[code];
    let rest = full;
    if (full.startsWith(code)) {
      rest = full.slice(code.length).replace(/^[-–:\s]+/, "");
    }
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "alert-filter";
    input.value = code;
    input.checked = true;

    const strong = document.createElement("strong");
    strong.textContent = code;

    const span = document.createElement("span");
    span.className = "alert-desc";
    span.textContent = rest ? " – " + rest : "";

    label.appendChild(input);
    label.appendChild(strong);
    label.appendChild(span);

    container.appendChild(label);
  });

  // Sem Alertas
  const labelNone = document.createElement("label");
  const inputNone = document.createElement("input");
  inputNone.type = "checkbox";
  inputNone.className = "alert-filter";
  inputNone.value = "NONE";
  inputNone.checked = true;

  const strongNone = document.createElement("strong");
  strongNone.textContent = "Sem Alertas";

  const spanNone = document.createElement("span");
  spanNone.className = "alert-desc";
  spanNone.textContent = " (nenhuma flag acionada / valor nulo)";

  labelNone.appendChild(inputNone);
  labelNone.appendChild(strongNone);
  labelNone.appendChild(spanNone);
  container.appendChild(labelNone);

  // eventos de mudança
  Array.from(document.querySelectorAll(".alert-filter")).forEach(cb => {
    cb.addEventListener("change", () =>
      applyFilters({ resetSortOnAll: false })
    );
  });
}

function buildMenu() {
  const menu = document.getElementById("indicator-menu");
  menu.innerHTML = "";
  const codes = Object.keys(indicators).sort();

  codes.forEach(code => {
    const btn = document.createElement("button");
    btn.textContent = code;
    btn.className = "indicator-tab";
    btn.dataset.code = code;
    if (code === currentIndicatorCode) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      if (currentIndicatorCode === code) {
        // reset sort and filters order
        applyFilters({ resetSortOnAll: true });
        return;
      }
      currentIndicatorCode = code;
      currentSortKey = null;
      currentSortDirection = "asc";
      document
        .querySelectorAll(".indicator-tab")
        .forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      renderIndicator();
    });
    menu.appendChild(btn);
  });
}

function renderIndicator() {
  const indicator = getCurrentIndicator();
  if (!indicator) return;

  document.getElementById("indicator-title").textContent = indicator.title;
  document.getElementById("page-subtitle").textContent = indicator.subtitle;

  // ensure __idx exists for stable original order
  indicator.rows.forEach((row, idx) => {
    if (row.__idx == null) row.__idx = idx;
  });

  // rebuild alerts + header
  buildAlertFilters();
  buildTableHeader();

  // reset alert mode to "all"
  const allRadio = document.querySelector('input[name="alertMode"][value="all"]');
  if (allRadio) allRadio.checked = true;

  // listeners para modo de alerta e classes
  document
    .querySelectorAll('input[name="alertMode"]')
    .forEach(radio => {
      radio.onchange = () => {
        const isAll = radio.value === "all" && radio.checked;
        applyFilters({ resetSortOnAll: isAll });
      };
    });

  const allRadioClick = document.querySelector('input[name="alertMode"][value="all"]');
  if (allRadioClick) {
    allRadioClick.onclick = () => {
      if (allRadioClick.checked) {
        applyFilters({ resetSortOnAll: true });
      }
    };
  }

  Array.from(document.querySelectorAll(".class-filter")).forEach(cb => {
    cb.onchange = () => applyFilters({ resetSortOnAll: false });
  });

  applyFilters({ resetSortOnAll: true });
}

function init() {
  // define indicador padrão (A5 se existir, senão o primeiro)
  const codes = Object.keys(indicators);
  if (codes.includes("A5")) {
    currentIndicatorCode = "A5";
  } else {
    currentIndicatorCode = codes[0];
  }
  buildMenu();
  renderIndicator();
}

document.addEventListener("DOMContentLoaded", init);
