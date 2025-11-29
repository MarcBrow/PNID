// Estado de ordenação
let currentSortKey = "Segmento";
let currentSortDirection = "asc"; // 'asc' ou 'desc'

const alertCheckboxes = () => Array.from(document.querySelectorAll(".alert-filter"));
const classCheckboxes = () => Array.from(document.querySelectorAll(".class-filter"));

function getSelectedAlerts() {
  return alertCheckboxes()
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

function getSelectedClasses() {
  return classCheckboxes()
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

function normalizeString(str) {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Normaliza o campo Flags para uso em filtros e exibição
function getFlagsInfo(row) {
  let raw = row.Flags;
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

function compareRows(a, b) {
  const key = currentSortKey;
  const direction = currentSortDirection === "asc" ? 1 : -1;

  let valA = a[key];
  let valB = b[key];

  if (valA == null && valB == null) return 0;
  if (valA == null) return 1 * direction;
  if (valB == null) return -1 * direction;

  const numericKeys = [
    "pct_CaboFibra",
    "pct_RadioSatDSLDisc",
    "pct_ModemChipMovel",
    "pct_NSabe_NResp"
  ];

  if (numericKeys.includes(key)) {
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

function applyFilters() {
  const alertMode = document.querySelector('input[name="alertMode"]:checked').value;
  const selectedAlertsArr = getSelectedAlerts();
  const selectedAlerts = new Set(selectedAlertsArr);
  const selectedClasses = new Set(getSelectedClasses());

  let filtered = data.slice();

  // Filtro por classe
  if (selectedClasses.size > 0) {
    filtered = filtered.filter(row => selectedClasses.has(row.Classe));
  }

  // Filtro por alertas
  if (alertMode === "filtered") {
    const allAlertCodes = ["A1", "A2", "A3", "A4", "NONE"];
    const activeAlerts =
      selectedAlerts.size > 0 ? selectedAlerts : new Set(allAlertCodes);

    filtered = filtered.filter(row => {
      const info = getFlagsInfo(row);
      const hasFlags = info.hasFlags;
      const rowAlerts = info.flagsArray;

      let match = false;

      // Linhas com flags
      if (hasFlags && rowAlerts.some(a => activeAlerts.has(a))) {
        match = true;
      }

      // Linhas sem flags (Sem Alertas)
      if (!hasFlags && activeAlerts.has("NONE")) {
        match = true;
      }

      return match;
    });
  }

  filtered.sort(compareRows);
  renderTable(filtered);
}

function classToCss(classe) {
  if (!classe) return "";
  const normalized = normalizeString(classe);
  if (normalized.startsWith("baixa")) return "class-baixa";
  if (normalized.startsWith("observacao")) return "class-observacao";
  if (normalized.startsWith("media")) return "class-media";
  if (normalized.startsWith("alta")) return "class-alta";
  return "";
}

function renderTable(rows) {
  const tbody = document.querySelector("#a5-table tbody");
  tbody.innerHTML = "";

  rows.forEach(row => {
    const tr = document.createElement("tr");
    const className = classToCss(row.Classe);
    if (className) {
      tr.classList.add(className);
    }

    const flagsInfo = getFlagsInfo(row);

    const cells = [
      row.Segmento,
      row.pct_CaboFibra != null && row.pct_CaboFibra.toFixed
        ? row.pct_CaboFibra.toFixed(2)
        : row.pct_CaboFibra,
      row.pct_RadioSatDSLDisc != null && row.pct_RadioSatDSLDisc.toFixed
        ? row.pct_RadioSatDSLDisc.toFixed(2)
        : row.pct_RadioSatDSLDisc,
      row.pct_ModemChipMovel != null && row.pct_ModemChipMovel.toFixed
        ? row.pct_ModemChipMovel.toFixed(2)
        : row.pct_ModemChipMovel,
      row.pct_NSabe_NResp != null && row.pct_NSabe_NResp.toFixed
        ? row.pct_NSabe_NResp.toFixed(2)
        : row.pct_NSabe_NResp,
      flagsInfo.display,
      row.Classe || ""
    ];

    cells.forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  const summary = document.getElementById("summary");
  summary.textContent = `${rows.length} de ${data.length} segmentos exibidos.`;
}

function setupSorting() {
  const headers = document.querySelectorAll("#a5-table th.sortable");
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

      applyFilters();
    });
  });
}

function init() {
  setupSorting();

  document.querySelectorAll('input[name="alertMode"]').forEach(radio => {
    radio.addEventListener("change", applyFilters);
  });

  alertCheckboxes().forEach(cb => cb.addEventListener("change", applyFilters));
  classCheckboxes().forEach(cb => cb.addEventListener("change", applyFilters));

  applyFilters();
}

document.addEventListener("DOMContentLoaded", init);
