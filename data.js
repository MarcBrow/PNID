const indicators = {
  "A10A": {
    "code": "A10A",
    "sheet": "RankA10A",
    "title": "A10A - DOMICÍLIOS SEM ACESSO À INTERNET, POR PRINCIPAL MOTIVO PARA A FALTA DE INTERNET",
    "subtitle": "Total de domicílios sem acesso à Internet",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_AcessoOutroLugar",
        "label": "Acesso em outro lugar (%)"
      },
      {
        "key": "pct_MuitoCaro",
        "label": "Muito caro (%)"
      },
      {
        "key": "pct_FaltaDisponibilidade",
        "label": "Falta de disponibilidade (%)"
      },
      {
        "key": "pct_NSabeNResp",
        "label": "Não sabe/Não respondeu (%)"
      },
      {
        "key": "Flags",
        "label": "Flags"
      },
      {
        "key": "Classe",
        "label": "Classe"
      }
    ],
    "alerts": {
      "M1": "M1 – Acesso em outro lugar > 10%",
      "M2": "M2 – Muito caro > 5%",
      "M3": "M3 – Falta de disponibilidade > 5%",
      "M4": "M4 – Subnotificação: Não sabe + Não respondeu > 20%",
      "3": "3 ou 4 flags (≥3) → Alta"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_AcessoOutroLugar": 8.66,
        "pct_MuitoCaro": 22.15,
        "pct_FaltaDisponibilidade": 4.11,
        "pct_NSabeNResp": 2.2,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Urbana",
        "pct_AcessoOutroLugar": 7.84,
        "pct_MuitoCaro": 21.2,
        "pct_FaltaDisponibilidade": 3,
        "pct_NSabeNResp": 2.24,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Rural",
        "pct_AcessoOutroLugar": 12.26,
        "pct_MuitoCaro": 26.3,
        "pct_FaltaDisponibilidade": 8.96,
        "pct_NSabeNResp": 2,
        "Flags": "M1,M2,M3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_AcessoOutroLugar": 4.11,
        "pct_MuitoCaro": 19.05,
        "pct_FaltaDisponibilidade": 4.1,
        "pct_NSabeNResp": 1.08,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Nordeste",
        "pct_AcessoOutroLugar": 14.35,
        "pct_MuitoCaro": 24.78,
        "pct_FaltaDisponibilidade": 1.81,
        "pct_NSabeNResp": 2.88,
        "Flags": "M1,M2",
        "Classe": "Média"
      },
      {
        "Segmento": "Sul",
        "pct_AcessoOutroLugar": 6.25,
        "pct_MuitoCaro": 31.68,
        "pct_FaltaDisponibilidade": 7.46,
        "pct_NSabeNResp": 2.27,
        "Flags": "M2,M3",
        "Classe": "Média"
      },
      {
        "Segmento": "Norte",
        "pct_AcessoOutroLugar": 6.09,
        "pct_MuitoCaro": 19.13,
        "pct_FaltaDisponibilidade": 5.33,
        "pct_NSabeNResp": 2.25,
        "Flags": "M2,M3",
        "Classe": "Média"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_AcessoOutroLugar": 9.18,
        "pct_MuitoCaro": 21.78,
        "pct_FaltaDisponibilidade": 1.94,
        "pct_NSabeNResp": 0.22,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_AcessoOutroLugar": 7.99,
        "pct_MuitoCaro": 24.27,
        "pct_FaltaDisponibilidade": 3.31,
        "pct_NSabeNResp": 2.7,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_AcessoOutroLugar": 8.35,
        "pct_MuitoCaro": 15.11,
        "pct_FaltaDisponibilidade": 3.26,
        "pct_NSabeNResp": 2.12,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_AcessoOutroLugar": 16.17,
        "pct_MuitoCaro": 30.85,
        "pct_FaltaDisponibilidade": 3.1,
        "pct_NSabeNResp": 0.22,
        "Flags": "M1,M2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_AcessoOutroLugar": 8.33,
        "pct_MuitoCaro": 37.39,
        "pct_FaltaDisponibilidade": 23.66,
        "pct_NSabeNResp": 0,
        "Flags": "M2,M3",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_AcessoOutroLugar": 3.56,
        "pct_MuitoCaro": 4.16,
        "pct_FaltaDisponibilidade": 12.64,
        "pct_NSabeNResp": 0,
        "Flags": "M3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_AcessoOutroLugar": 6.42,
        "pct_MuitoCaro": 4.42,
        "pct_FaltaDisponibilidade": 36.98,
        "pct_NSabeNResp": 0,
        "Flags": "M3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não tem renda",
        "pct_AcessoOutroLugar": 5.69,
        "pct_MuitoCaro": 31.33,
        "pct_FaltaDisponibilidade": 14.25,
        "pct_NSabeNResp": 0.46,
        "Flags": "M2,M3",
        "Classe": "Média"
      },
      {
        "Segmento": "Não sabe",
        "pct_AcessoOutroLugar": 6.53,
        "pct_MuitoCaro": 19.86,
        "pct_FaltaDisponibilidade": 2.1,
        "pct_NSabeNResp": 2.63,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não respondeu",
        "pct_AcessoOutroLugar": 13.1,
        "pct_MuitoCaro": 15.52,
        "pct_FaltaDisponibilidade": 0.45,
        "pct_NSabeNResp": 1.73,
        "Flags": "M1,M2",
        "Classe": "Média"
      },
      {
        "Segmento": "A",
        "pct_AcessoOutroLugar": 0,
        "pct_MuitoCaro": 0,
        "pct_FaltaDisponibilidade": 0,
        "pct_NSabeNResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "B",
        "pct_AcessoOutroLugar": 24.66,
        "pct_MuitoCaro": 2.29,
        "pct_FaltaDisponibilidade": 0.28,
        "pct_NSabeNResp": 0,
        "Flags": "M1",
        "Classe": "Observação"
      },
      {
        "Segmento": "C",
        "pct_AcessoOutroLugar": 7.82,
        "pct_MuitoCaro": 18.7,
        "pct_FaltaDisponibilidade": 4.79,
        "pct_NSabeNResp": 2.14,
        "Flags": "M2",
        "Classe": "Observação"
      },
      {
        "Segmento": "DE",
        "pct_AcessoOutroLugar": 8.84,
        "pct_MuitoCaro": 23.75,
        "pct_FaltaDisponibilidade": 3.86,
        "pct_NSabeNResp": 2.24,
        "Flags": "M2",
        "Classe": "Observação"
      }
    ]
  },
  "A11": {
    "code": "A11",
    "sheet": "RankA11",
    "title": "A11 - DOMICÍLIOS COM ACESSO À INTERNET, POR VALOR PAGO PELA PRINCIPAL CONEXÃO",
    "subtitle": "Total de domicílios com acesso à Internet",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_abaixo40",
        "label": "Abaixo de R$ 40 (%)"
      },
      {
        "key": "pct_40a80",
        "label": "De R$ 40 a R$ 80 (%)"
      },
      {
        "key": "pct_acima80",
        "label": "Acima de R$ 80 (%)"
      },
      {
        "key": "pct_NSNR",
        "label": "NS/NR (%)"
      },
      {
        "key": "Flags",
        "label": "Flags"
      },
      {
        "key": "Classe",
        "label": "Classe"
      }
    ],
    "alerts": {
      "P1": "P1 – PoucoPrecoBaixo: pct_abaixo40 <= 20",
      "P2": "P2 – MuitoPrecoMedio: pct_40a80 >= 40",
      "P3": "P3 – MuitoPrecoAlto: pct_acima80 >= 40",
      "P4": "P4 – SubnotificacaoPreco: pct_NSNR >= 20",
      "3": "3 ou 4 flags (>=3) → Alta"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_abaixo40": 5.18,
        "pct_40a80": 32.550000000000004,
        "pct_acima80": 55.97,
        "pct_NSNR": 6.3,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Urbana",
        "pct_abaixo40": 4.8,
        "pct_40a80": 29.990000000000002,
        "pct_acima80": 58.629999999999995,
        "pct_NSNR": 6.579999999999999,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Rural",
        "pct_abaixo40": 8.45,
        "pct_40a80": 54.31,
        "pct_acima80": 33.31,
        "pct_NSNR": 3.9299999999999997,
        "Flags": "P1,P2",
        "Classe": "Média"
      },
      {
        "Segmento": "Sudeste",
        "pct_abaixo40": 3.15,
        "pct_40a80": 16.25,
        "pct_acima80": 71.12,
        "pct_NSNR": 9.47,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Nordeste",
        "pct_abaixo40": 8.18,
        "pct_40a80": 64.78,
        "pct_acima80": 23.15,
        "pct_NSNR": 3.8899999999999997,
        "Flags": "P1,P2",
        "Classe": "Média"
      },
      {
        "Segmento": "Sul",
        "pct_abaixo40": 9.26,
        "pct_40a80": 10.16,
        "pct_acima80": 76.62,
        "pct_NSNR": 3.96,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Norte",
        "pct_abaixo40": 3.58,
        "pct_40a80": 25.86,
        "pct_acima80": 63.73,
        "pct_NSNR": 6.85,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_abaixo40": 4.43,
        "pct_40a80": 18.71,
        "pct_acima80": 69.97,
        "pct_NSNR": 6.8999999999999995,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: até 1 SM",
        "pct_abaixo40": 9.07,
        "pct_40a80": 45,
        "pct_acima80": 40.72,
        "pct_NSNR": 5.2,
        "Flags": "P1,P2,P3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: 1–2 SM",
        "pct_abaixo40": 5.15,
        "pct_40a80": 38.760000000000005,
        "pct_acima80": 50.63999999999999,
        "pct_NSNR": 5.4399999999999995,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: 2–3 SM",
        "pct_abaixo40": 2.99,
        "pct_40a80": 24.42,
        "pct_acima80": 67.26,
        "pct_NSNR": 5.319999999999999,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: 3–5 SM",
        "pct_abaixo40": 1.79,
        "pct_40a80": 18.060000000000002,
        "pct_acima80": 76.28,
        "pct_NSNR": 3.8699999999999997,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: 5–10 SM",
        "pct_abaixo40": 0.12,
        "pct_40a80": 10.510000000000002,
        "pct_acima80": 84.52,
        "pct_NSNR": 4.85,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: >10 SM",
        "pct_abaixo40": 1.32,
        "pct_40a80": 9.01,
        "pct_acima80": 85.83000000000001,
        "pct_NSNR": 3.83,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: não tem",
        "pct_abaixo40": 12.68,
        "pct_40a80": 30.68,
        "pct_acima80": 46.910000000000004,
        "pct_NSNR": 9.73,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: não sabe",
        "pct_abaixo40": 3.86,
        "pct_40a80": 22.32,
        "pct_acima80": 43.550000000000004,
        "pct_NSNR": 30.27,
        "Flags": "P1,P3,P4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não respondeu",
        "pct_abaixo40": 3.12,
        "pct_40a80": 20.06,
        "pct_acima80": 65.47,
        "pct_NSNR": 11.35,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe A",
        "pct_abaixo40": 0.81,
        "pct_40a80": 1.75,
        "pct_acima80": 79.80999999999999,
        "pct_NSNR": 17.63,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe B",
        "pct_abaixo40": 1.04,
        "pct_40a80": 14.42,
        "pct_acima80": 75.52,
        "pct_NSNR": 9.03,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe C",
        "pct_abaixo40": 3.6900000000000004,
        "pct_40a80": 30.12,
        "pct_acima80": 60.650000000000006,
        "pct_NSNR": 5.55,
        "Flags": "P1,P3",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe DE",
        "pct_abaixo40": 10.129999999999999,
        "pct_40a80": 46.89,
        "pct_acima80": 36.94,
        "pct_NSNR": 6.04,
        "Flags": "P1,P2",
        "Classe": "Média"
      }
    ]
  },
  "A13": {
    "code": "A13",
    "sheet": "Rank_A13",
    "title": "A13 - DOMICÍLIOS COM ACESSO À INTERNET, POR COMPARTILHAMENTO COM DOMICÍLIO VIZINHO",
    "subtitle": "Total de domicílios com acesso à Internet",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_Sim",
        "label": "Sim (%)"
      },
      {
        "key": "pct_Nao",
        "label": "Não (%)"
      },
      {
        "key": "pct_NSabe_NResp",
        "label": "Não sabe/Não respondeu (%)"
      },
      {
        "key": "Flags",
        "label": "Flags"
      },
      {
        "key": "Classe",
        "label": "Classe"
      }
    ],
    "alerts": {
      "A1": "A1: pct_Sim > 5",
      "A2": "A2: pct_Sim > 10",
      "A3": "A3: pct_Sim > 20",
      "A4": "A4: pct_NaoRespondeu (NS+NR) > 20",
      "3": "3 ou 4 flags (ou seja, >=3) → Alta"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_Sim": 16.71,
        "pct_Nao": 82.79,
        "pct_NSabe_NResp": 0.5,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Urbana",
        "pct_Sim": 15.6,
        "pct_Nao": 83.91,
        "pct_NSabe_NResp": 0.49,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Rural",
        "pct_Sim": 26.21,
        "pct_Nao": 73.17,
        "pct_NSabe_NResp": 0.62,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_Sim": 13.74,
        "pct_Nao": 86.09,
        "pct_NSabe_NResp": 0.18,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Nordeste",
        "pct_Sim": 20.87,
        "pct_Nao": 78.09,
        "pct_NSabe_NResp": 1.04,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_Sim": 22.29,
        "pct_Nao": 77.4,
        "pct_NSabe_NResp": 0.31,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Norte",
        "pct_Sim": 15.46,
        "pct_Nao": 84.28,
        "pct_NSabe_NResp": 0.26,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_Sim": 10.9,
        "pct_Nao": 88.19,
        "pct_NSabe_NResp": 0.92,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_Sim": 21.38,
        "pct_Nao": 77.89,
        "pct_NSabe_NResp": 0.73,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_Sim": 19.54,
        "pct_Nao": 80.11,
        "pct_NSabe_NResp": 0.35,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_Sim": 13.36,
        "pct_Nao": 86.23,
        "pct_NSabe_NResp": 0.41,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_Sim": 11.61,
        "pct_Nao": 88.15,
        "pct_NSabe_NResp": 0.24,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_Sim": 8.15,
        "pct_Nao": 91.72,
        "pct_NSabe_NResp": 0.13,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_Sim": 7.39,
        "pct_Nao": 91.61,
        "pct_NSabe_NResp": 0.99,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não tem renda",
        "pct_Sim": 26.22,
        "pct_Nao": 73.35,
        "pct_NSabe_NResp": 0.42,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não sabe",
        "pct_Sim": 10.62,
        "pct_Nao": 88.15,
        "pct_NSabe_NResp": 1.22,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Não respondeu",
        "pct_Sim": 8.47,
        "pct_Nao": 90.95,
        "pct_NSabe_NResp": 0.58,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "A",
        "pct_Sim": 10.74,
        "pct_Nao": 89.26,
        "pct_NSabe_NResp": 0,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "B",
        "pct_Sim": 8.64,
        "pct_Nao": 8.64,
        "pct_NSabe_NResp": 0.49,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "C",
        "pct_Sim": 14.61,
        "pct_Nao": 85.06,
        "pct_NSabe_NResp": 0.33,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "DE",
        "pct_Sim": 24.8,
        "pct_Nao": 74.36,
        "pct_NSabe_NResp": 0.84,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      }
    ]
  },
  "A4": {
    "code": "A4",
    "sheet": "RankA4",
    "title": "A4 - DOMICÍLIOS COM ACESSO À INTERNET",
    "subtitle": "Total de domicílios",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_Sim",
        "label": "Sim (%)"
      },
      {
        "key": "pct_Nao",
        "label": "Não (%)"
      },
      {
        "key": "pct_NS_NResp",
        "label": "Não sabe/Não respondeu (%)"
      },
      {
        "key": "Flags",
        "label": "Flags"
      },
      {
        "key": "Classe",
        "label": "Classe"
      }
    ],
    "alerts": {
      "A1": "A1 se pct_Nao > 5",
      "A2": "A2 se pct_Nao > 10",
      "A3": "A3 se pct_Nao > 15",
      "A4": "A4 se pct_Nao > 20",
      "3": "3 ou 4 flags (ou seja, >=3) → Alta"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_Sim": 83.44,
        "pct_Nao": 16.5,
        "pct_NS_NResp": 0.06,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Urbana",
        "pct_Sim": 84.7,
        "pct_Nao": 15.24,
        "pct_NS_NResp": 0.06,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Rural",
        "pct_Sim": 73.98,
        "pct_Nao": 25.9,
        "pct_NS_NResp": 0.12,
        "Flags": "A1,A2,A3,A4,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_Sim": 82.85,
        "pct_Nao": 17.14,
        "pct_NS_NResp": 0.01,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Nordeste",
        "pct_Sim": 80.98,
        "pct_Nao": 18.92,
        "pct_NS_NResp": 0.1,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_Sim": 90.28,
        "pct_Nao": 9.65,
        "pct_NS_NResp": 0.07,
        "Flags": "A1,",
        "Classe": "Observação"
      },
      {
        "Segmento": "Norte",
        "pct_Sim": 80.68,
        "pct_Nao": 19.21,
        "pct_NS_NResp": 0.11,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_Sim": 84.73,
        "pct_Nao": 15.08,
        "pct_NS_NResp": 0.19,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: até 1 SM",
        "pct_Sim": 73.23,
        "pct_Nao": 26.68,
        "pct_NS_NResp": 0.09,
        "Flags": "A1,A2,A3,A4,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: 1–2 SM",
        "pct_Sim": 83.66,
        "pct_Nao": 16.28,
        "pct_NS_NResp": 0.06,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: 2–3 SM",
        "pct_Sim": 92.75,
        "pct_Nao": 7.21,
        "pct_NS_NResp": 0.04,
        "Flags": "A1,",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: 3–5 SM",
        "pct_Sim": 95.16,
        "pct_Nao": 4.84,
        "pct_NS_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Renda: 5–10 SM",
        "pct_Sim": 97.18,
        "pct_Nao": 2.82,
        "pct_NS_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Renda: >10 SM",
        "pct_Sim": 97.79,
        "pct_Nao": 2.21,
        "pct_NS_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Renda: não tem",
        "pct_Sim": 70.36,
        "pct_Nao": 29.64,
        "pct_NS_NResp": 0,
        "Flags": "A1,A2,A3,A4,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não sabe",
        "pct_Sim": 83.08,
        "pct_Nao": 16.73,
        "pct_NS_NResp": 0.19,
        "Flags": "A1,A2,A3,",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não respondeu",
        "pct_Sim": 85.25,
        "pct_Nao": 14.62,
        "pct_NS_NResp": 0.13,
        "Flags": "A1,A2,",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe A",
        "pct_Sim": 100,
        "pct_Nao": 0,
        "pct_NS_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Classe B",
        "pct_Sim": 99.08,
        "pct_Nao": 0.91,
        "pct_NS_NResp": 0.01,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Classe C",
        "pct_Sim": 90.54,
        "pct_Nao": 9.43,
        "pct_NS_NResp": 0.03,
        "Flags": "A1,",
        "Classe": "Observação"
      },
      {
        "Segmento": "Classe DE",
        "pct_Sim": 67.93,
        "pct_Nao": 31.94,
        "pct_NS_NResp": 0.13,
        "Flags": "A1,A2,A3,A4,",
        "Classe": "Alta"
      }
    ]
  },
  "A5": {
    "code": "A5",
    "sheet": "RankA5",
    "title": "A5 - DOMICÍLIOS COM ACESSO À INTERNET, POR TIPO DE CONEXÃO",
    "subtitle": "Total de domicílios com acesso à Internet",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_CaboFibra",
        "label": "Cabo/Fibra (%)"
      },
      {
        "key": "pct_RadioSatDSLDisc",
        "label": "Rádio/Sat/DSL/Disc (%)"
      },
      {
        "key": "pct_ModemChipMovel",
        "label": "Modem/Chip móvel (%)"
      },
      {
        "key": "pct_NSabe_NResp",
        "label": "Não sabe/Não respondeu (%)"
      },
      {
        "key": "Flags",
        "label": "Flags"
      },
      {
        "key": "Classe",
        "label": "Classe"
      }
    ],
    "alerts": {
      "A1": "A1 – BaixaFibraCabo: pct_CaboFibra < 55",
      "A2": "A2 – MuitoRadioSatDSLDisc: pct_RadioSatDSLDisc >= 10",
      "A3": "A3 – MuitoModemChipMovel: pct_ModemChipMovel > 5",
      "A4": "A4 – SubnotificacaoTipoConexao: pct_NSabe_NResp >= 18",
      "3": "3 ou 4 flags (ou seja, >=3) → Alta"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_CaboFibra": 64.83,
        "pct_RadioSatDSLDisc": 6.97,
        "pct_ModemChipMovel": 13.53,
        "pct_NSabe_NResp": 14.67,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Urbana",
        "pct_CaboFibra": 67.08,
        "pct_RadioSatDSLDisc": 5.44,
        "pct_ModemChipMovel": 13.81,
        "pct_NSabe_NResp": 13.67,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Rural",
        "pct_CaboFibra": 45.56,
        "pct_RadioSatDSLDisc": 20.06,
        "pct_ModemChipMovel": 11.12,
        "pct_NSabe_NResp": 23.26,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_CaboFibra": 72.53,
        "pct_RadioSatDSLDisc": 6.76,
        "pct_ModemChipMovel": 9.19,
        "pct_NSabe_NResp": 11.53,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Nordeste",
        "pct_CaboFibra": 60.24,
        "pct_RadioSatDSLDisc": 7.94,
        "pct_ModemChipMovel": 11.76,
        "pct_NSabe_NResp": 20.06,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Sul",
        "pct_CaboFibra": 60.18,
        "pct_RadioSatDSLDisc": 7.68,
        "pct_ModemChipMovel": 19.03,
        "pct_NSabe_NResp": 13.12,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Norte",
        "pct_CaboFibra": 65.88,
        "pct_RadioSatDSLDisc": 6.02,
        "pct_ModemChipMovel": 15.34,
        "pct_NSabe_NResp": 12.75,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_CaboFibra": 62.84,
        "pct_RadioSatDSLDisc": 8.72,
        "pct_ModemChipMovel": 13,
        "pct_NSabe_NResp": 15.44,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: até 1 SM",
        "pct_CaboFibra": 54.49,
        "pct_RadioSatDSLDisc": 7.24,
        "pct_ModemChipMovel": 17.34,
        "pct_NSabe_NResp": 20.94,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: 1–2 SM",
        "pct_CaboFibra": 60.76,
        "pct_RadioSatDSLDisc": 7.23,
        "pct_ModemChipMovel": 14.87,
        "pct_NSabe_NResp": 17.14,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: 2–3 SM",
        "pct_CaboFibra": 75.9,
        "pct_RadioSatDSLDisc": 6.71,
        "pct_ModemChipMovel": 10.16,
        "pct_NSabe_NResp": 7.24,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: 3–5 SM",
        "pct_CaboFibra": 78.13,
        "pct_RadioSatDSLDisc": 6.39,
        "pct_ModemChipMovel": 9.11,
        "pct_NSabe_NResp": 6.37,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: 5–10 SM",
        "pct_CaboFibra": 79.4,
        "pct_RadioSatDSLDisc": 7.54,
        "pct_ModemChipMovel": 8.34,
        "pct_NSabe_NResp": 4.72,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: >10 SM",
        "pct_CaboFibra": 87.61,
        "pct_RadioSatDSLDisc": 5.5,
        "pct_ModemChipMovel": 5.56,
        "pct_NSabe_NResp": 1.34,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Renda: não tem",
        "pct_CaboFibra": 48.62,
        "pct_RadioSatDSLDisc": 3.77,
        "pct_ModemChipMovel": 37.65,
        "pct_NSabe_NResp": 9.96,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: não sabe",
        "pct_CaboFibra": 51.34,
        "pct_RadioSatDSLDisc": 6.7,
        "pct_ModemChipMovel": 11.42,
        "pct_NSabe_NResp": 30.54,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não respondeu",
        "pct_CaboFibra": 73.35,
        "pct_RadioSatDSLDisc": 7.04,
        "pct_ModemChipMovel": 8.58,
        "pct_NSabe_NResp": 11.03,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Classe A",
        "pct_CaboFibra": 91.26,
        "pct_RadioSatDSLDisc": 3.91,
        "pct_ModemChipMovel": 1.1,
        "pct_NSabe_NResp": 3.72,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Classe B",
        "pct_CaboFibra": 83.74,
        "pct_RadioSatDSLDisc": 5.04,
        "pct_ModemChipMovel": 7.2,
        "pct_NSabe_NResp": 4.02,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Classe C",
        "pct_CaboFibra": 67.93,
        "pct_RadioSatDSLDisc": 5.89,
        "pct_ModemChipMovel": 13.7,
        "pct_NSabe_NResp": 12.48,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Classe DE",
        "pct_CaboFibra": 48.95,
        "pct_RadioSatDSLDisc": 10.01,
        "pct_ModemChipMovel": 16.7,
        "pct_NSabe_NResp": 24.34,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      }
    ]
  },
  "A6": {
    "code": "A6",
    "sheet": "RankA6",
    "title": "A6 - DOMICÍLIOS COM ACESSO À INTERNET, POR VELOCIDADE DA CONEXÃO",
    "subtitle": "Total de domicílios com acesso à Internet",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_ate10Mbps",
        "label": "Até 10 Mbps (%)"
      },
      {
        "key": "pct_ate20Mbps",
        "label": "Até 20 Mbps (%)"
      },
      {
        "key": "pct_21_50Mbps",
        "label": "21–50 Mbps (%)"
      },
      {
        "key": "pct_51Mais",
        "label": "51 Mbps ou mais (%)"
      },
      {
        "key": "pct_NSNR",
        "label": "NS/NR (%)"
      },
      {
        "key": "pct_semBLFixa",
        "label": "Sem banda larga fixa (%)"
      },
      {
        "key": "Flags",
        "label": "Flags"
      },
      {
        "key": "Classe",
        "label": "Classe"
      }
    ],
    "alerts": {
      "V1": "V1 – BaixaVelocidade: pct_ate20Mbps > 20",
      "V2": "V2 – PoucaAltaVelocidade: pct_51Mais < 25",
      "V3": "V3 – Subnotificacao: pct_NSNR >= 10",
      "V4": "V4 – SemBandaLargaFixa: pct_semBLFixa >= 30",
      "3": "3 ou 4 flags (ou seja, >=3) → Alta"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_ate10Mbps": 15.9,
        "pct_ate20Mbps": 17.59,
        "pct_21_50Mbps": 4.19,
        "pct_51Mais": 30.31,
        "pct_NSNR": 19.71,
        "pct_semBLFixa": 28.2,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Urbana",
        "pct_ate10Mbps": 15.08,
        "pct_ate20Mbps": 16.78,
        "pct_21_50Mbps": 4.26,
        "pct_51Mais": 32.11,
        "pct_NSNR": 19.38,
        "pct_semBLFixa": 27.48,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Rural",
        "pct_ate10Mbps": 22.97,
        "pct_ate20Mbps": 24.53,
        "pct_21_50Mbps": 3.65,
        "pct_51Mais": 14.91,
        "pct_NSNR": 22.54,
        "pct_semBLFixa": 34.38,
        "Flags": "V1,V2,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_ate10Mbps": 12.7,
        "pct_ate20Mbps": 14.26,
        "pct_21_50Mbps": 4.16,
        "pct_51Mais": 39.66,
        "pct_NSNR": 21.2,
        "pct_semBLFixa": 20.72,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Nordeste",
        "pct_ate10Mbps": 19.9,
        "pct_ate20Mbps": 21.57,
        "pct_21_50Mbps": 6.26,
        "pct_51Mais": 20.47,
        "pct_NSNR": 19.88,
        "pct_semBLFixa": 31.82,
        "Flags": "V1,V2,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_ate10Mbps": 18.4,
        "pct_ate20Mbps": 19.92,
        "pct_21_50Mbps": 3.08,
        "pct_51Mais": 25.29,
        "pct_NSNR": 19.56,
        "pct_semBLFixa": 32.14,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Norte",
        "pct_ate10Mbps": 14.44,
        "pct_ate20Mbps": 16.23,
        "pct_21_50Mbps": 3.5,
        "pct_51Mais": 33.22,
        "pct_NSNR": 18.95,
        "pct_semBLFixa": 28.09,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_ate10Mbps": 15.06,
        "pct_ate20Mbps": 16.67,
        "pct_21_50Mbps": 2.42,
        "pct_51Mais": 32.1,
        "pct_NSNR": 20.37,
        "pct_semBLFixa": 28.44,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: até 1 SM",
        "pct_ate10Mbps": 15.78,
        "pct_ate20Mbps": 17.62,
        "pct_21_50Mbps": 4.81,
        "pct_51Mais": 19.64,
        "pct_NSNR": 19.66,
        "pct_semBLFixa": 38.27,
        "Flags": "V2,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: 1–2 SM",
        "pct_ate10Mbps": 17.52,
        "pct_ate20Mbps": 19.46,
        "pct_21_50Mbps": 4.02,
        "pct_51Mais": 24.67,
        "pct_NSNR": 19.84,
        "pct_semBLFixa": 32.01,
        "Flags": "V2,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: 2–3 SM",
        "pct_ate10Mbps": 15.85,
        "pct_ate20Mbps": 16.94,
        "pct_21_50Mbps": 4.37,
        "pct_51Mais": 41.95,
        "pct_NSNR": 19.35,
        "pct_semBLFixa": 17.39,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: 3–5 SM",
        "pct_ate10Mbps": 15.81,
        "pct_ate20Mbps": 17.62,
        "pct_21_50Mbps": 5.37,
        "pct_51Mais": 45.07,
        "pct_NSNR": 16.45,
        "pct_semBLFixa": 15.48,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: 5–10 SM",
        "pct_ate10Mbps": 13.13,
        "pct_ate20Mbps": 14.73,
        "pct_21_50Mbps": 1.28,
        "pct_51Mais": 52.11,
        "pct_NSNR": 18.82,
        "pct_semBLFixa": 13.06,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Renda: >10 SM",
        "pct_ate10Mbps": 19.63,
        "pct_ate20Mbps": 23.7,
        "pct_21_50Mbps": 2.69,
        "pct_51Mais": 55.55,
        "pct_NSNR": 11.17,
        "pct_semBLFixa": 6.9,
        "Flags": "V1,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não tem",
        "pct_ate10Mbps": 13.61,
        "pct_ate20Mbps": 15.8,
        "pct_21_50Mbps": 1.13,
        "pct_51Mais": 20.5,
        "pct_NSNR": 14.96,
        "pct_semBLFixa": 47.61,
        "Flags": "V2,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não sabe",
        "pct_ate10Mbps": 11.66,
        "pct_ate20Mbps": 12.13,
        "pct_21_50Mbps": 1.64,
        "pct_51Mais": 14.5,
        "pct_NSNR": 29.77,
        "pct_semBLFixa": 41.96,
        "Flags": "V2,V3,V4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Renda: não respondeu",
        "pct_ate10Mbps": 11.17,
        "pct_ate20Mbps": 12.26,
        "pct_21_50Mbps": 4.52,
        "pct_51Mais": 35.17,
        "pct_NSNR": 28.44,
        "pct_semBLFixa": 19.61,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe A",
        "pct_ate10Mbps": 8.06,
        "pct_ate20Mbps": 11.15,
        "pct_21_50Mbps": 5.79,
        "pct_51Mais": 55.62,
        "pct_NSNR": 22.62,
        "pct_semBLFixa": 4.82,
        "Flags": "V3",
        "Classe": "Observação"
      },
      {
        "Segmento": "Classe B",
        "pct_ate10Mbps": 13.93,
        "pct_ate20Mbps": 14.7,
        "pct_21_50Mbps": 3.99,
        "pct_51Mais": 49.51,
        "pct_NSNR": 20.59,
        "pct_semBLFixa": 11.21,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe C",
        "pct_ate10Mbps": 16.02,
        "pct_ate20Mbps": 18.24,
        "pct_21_50Mbps": 4.53,
        "pct_51Mais": 32.09,
        "pct_NSNR": 18.96,
        "pct_semBLFixa": 26.18,
        "Flags": "V3,V4",
        "Classe": "Média"
      },
      {
        "Segmento": "Classe DE",
        "pct_ate10Mbps": 16.87,
        "pct_ate20Mbps": 18.02,
        "pct_21_50Mbps": 3.64,
        "pct_51Mais": 16.72,
        "pct_NSNR": 20.58,
        "pct_semBLFixa": 41.04,
        "Flags": "V2,V3,V4",
        "Classe": "Alta"
      }
    ]
  }
};
