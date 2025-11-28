let allData = [];
let uniqueAlerts = new Set();

async function carregarDados() {
  const resp = await fetch("a5.json");
  allData = await resp.json();

  // Descobrir todos os tipos de alerta existentes
  allData.forEach(row => {
    (row.flags || []).forEach(flag => {
      uniqueAlerts.add(flag);
    });
  });

  criarFiltrosDeAlertas();
  renderTable(); // primeira renderização (mostrar todos)
}

function criarFiltrosDeAlertas() {
  const container = document.getElementById("alert-filters");
  container.innerHTML = "<strong>Filtrar por alertas:</strong>";

  Array.from(uniqueAlerts).sort().forEach(alert => {
    const id = `alert-${alert}`;
    const label = document.createElement("label");
    label.style.display = "inline-flex";
    label.style.alignItems = "center";
    label.style.gap = "0.25rem";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = alert;
    input.id = id;
    input.checked = false; // por padrão, nenhum filtro marcado

    input.addEventListener("change", () => {
      const showAll = document.getElementById("check-show-all");
      if (showAll.checked) {
        // se alguém marcar filtro, desmarca “mostrar todos”
        showAll.checked = false;
      }
      renderTable();
    });

    const span = document.createElement("span");
    span.textContent = alert;

    label.appendChild(input);
    label.appendChild(span);

    container.appendChild(label);
  });

  // Listener do checkbox "Mostrar todos"
  const showAll = document.getElementById("check-show-all");
  showAll.addEventListener("change", () => {
    if (showAll.checked) {
      // se marcar "mostrar todos", limpa todos os filtros
      document
        .querySelectorAll("#alert-filters input[type=checkbox]")
        .forEach(cb => (cb.checked = false));
    }
    renderTable();
  });
}

function renderTable() {
  const tbody = document.getElementById("table-body");
  const summary = document.getElementById("summary");
  tbody.innerHTML = "";

  const showAll = document.getElementById("check-show-all").checked;

  // quais alertas foram selecionados?
  const selectedAlerts = Array.from(
    document.querySelectorAll("#alert-filters input[type=checkbox]:checked")
  ).map(cb => cb.value);

  let visibleData = [];

  if (showAll || selectedAlerts.length === 0) {
    // modo “mostrar tudo” (ou nenhum filtro marcado)
    visibleData = allData.slice();
  } else {
    // mantém linhas que tenham pelo menos um alerta selecionado
    visibleData = allData.filter(row => {
      const flags = row.flags || [];
      return flags.some(f => selectedAlerts.includes(f));
    });
  }

  visibleData.forEach(row => {
    const tr = document.createElement("tr");

    const tdSegmento = document.createElement("td");
    tdSegmento.textContent = row.segmento;
    tdSegmento.className = "segmento";
    tr.appendChild(tdSegmento);

    const tdCabo = document.createElement("td");
    tdCabo.textContent = row.pctCaboFibra.toFixed(2);
    tr.appendChild(tdCabo);

    const tdRadio = document.createElement("td");
    tdRadio.textContent = row.pctRadioSatDslDisc.toFixed(2);
    tr.appendChild(tdRadio);

    const tdModem = document.createElement("td");
    tdModem.textContent = row.pctModemChipMovel.toFixed(2);
    tr.appendChild(tdModem);

    const tdNsNr = document.createElement("td");
    tdNsNr.textContent = row.pctNaoSabeNaoRespondeu.toFixed(2);
    tr.appendChild(tdNsNr);

    const tdFlags = document.createElement("td");
    (row.flags || []).forEach(flag => {
      const span = document.createElement("span");
      span.className = `badge badge-${flag}`;
      span.textContent = flag;
      tdFlags.appendChild(span);
    });
    if (!row.flags || row.flags.length === 0) {
      tdFlags.textContent = "—";
    }
    tr.appendChild(tdFlags);

    const tdClasse = document.createElement("td");
    const classe = (row.classe || "").trim();
    const classeKey = classe.replace(" ", "-");
    tdClasse.textContent = classe || "—";
    tdClasse.className = `classe-${classeKey}`;
    tr.appendChild(tdClasse);

    tbody.appendChild(tr);
  });

  const total = allData.length;
  const visiveis = visibleData.length;

  if (showAll || selectedAlerts.length === 0) {
    summary.textContent = `Mostrando ${visiveis} de ${total} segmentos (sem filtro de alerta).`;
  } else {
    summary.textContent = `Mostrando ${visiveis} de ${total} segmentos com pelo menos um dos alertas: ${selectedAlerts.join(", ")}.`;
  }
}

// iniciar
carregarDados();
