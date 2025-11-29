const indicators = {
  "A10A": {
    "code": "A10A",
    "sheet": "RankA10A",
    "title": "A10A - DOMICÍLIOS SEM ACESSO À INTERNET, POR PRINCIPAL MOTIVO PARA A FALTA DE INTERNET",
    "subtitle": "Total de domicílios sem acesso à Internet",
    "group": "Domicílios",
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
      "M4": "M4 – Subnotificação: Não sabe + Não respondeu > 20%"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (≥3) → Alta"
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
    "group": "Domicílios",
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
      "P4": "P4 – SubnotificacaoPreco: pct_NSNR >= 20"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (>=3) → Alta"
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
    "group": "Domicílios",
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
      "A4": "A4: pct_NaoRespondeu (NS+NR) > 20"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
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
    "group": "Domicílios",
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
      "A4": "A4 se pct_Nao > 20"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
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
    "group": "Domicílios",
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
      "A4": "A4 – SubnotificacaoTipoConexao: pct_NSabe_NResp >= 18"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
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
    "group": "Domicílios",
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
      "V4": "V4 – SemBandaLargaFixa: pct_semBLFixa >= 30"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
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
  },
  "C1": {
    "code": "C1",
    "sheet": "RankC1",
    "title": "C1 - INDIVÍDUOS QUE JÁ ACESSARAM A INTERNET¹",
    "subtitle": "Total da população",
    "group": "Indivíduos",
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
      "A1": "A1: % nunca acessou (pct_Nao) > 5",
      "A2": "A2: % nunca acessou > 10",
      "A3": "A3: % nunca acessou > 20",
      "A4": "A4: % não sabe + não respondeu (pct_NSabe_NResp) > 20"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_Sim": 90.2,
        "pct_Nao": 9.73,
        "pct_NSabe_NResp": 0.08,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Urbana",
        "pct_Sim": 91.08,
        "pct_Nao": 8.84,
        "pct_NSabe_NResp": 0.08,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Rural",
        "pct_Sim": 83.88,
        "pct_Nao": 16.06,
        "pct_NSabe_NResp": 0.07,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Sudeste",
        "pct_Sim": 92.57,
        "pct_Nao": 7.41,
        "pct_NSabe_NResp": 0.02,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Nordeste",
        "pct_Sim": 88.18,
        "pct_Nao": 11.66,
        "pct_NSabe_NResp": 0.16,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Sul",
        "pct_Sim": 89.13,
        "pct_Nao": 10.8,
        "pct_NSabe_NResp": 0.07,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Norte",
        "pct_Sim": 91.15,
        "pct_Nao": 8.8,
        "pct_NSabe_NResp": 0.05,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_Sim": 88.72,
        "pct_Nao": 11.27,
        "pct_NSabe_NResp": 0.01,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Masculino",
        "pct_Sim": 90.05,
        "pct_Nao": 9.95,
        "pct_NSabe_NResp": 0.01,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Feminino",
        "pct_Sim": 90.34,
        "pct_Nao": 9.52,
        "pct_NSabe_NResp": 0.14,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Branca",
        "pct_Sim": 89.66,
        "pct_Nao": 10.33,
        "pct_NSabe_NResp": 0.01,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Preta",
        "pct_Sim": 91.17,
        "pct_Nao": 8.82,
        "pct_NSabe_NResp": 0.02,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Parda",
        "pct_Sim": 87.48,
        "pct_Nao": 10.83,
        "pct_NSabe_NResp": 1.69,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Amarela",
        "pct_Sim": 92.09,
        "pct_Nao": 7.85,
        "pct_NSabe_NResp": 0.06,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Indígena",
        "pct_Sim": 77.39,
        "pct_Nao": 22.58,
        "pct_NSabe_NResp": 0.03,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (cor/raça)",
        "pct_Sim": 64.36,
        "pct_Nao": 35.1,
        "pct_NSabe_NResp": 0.54,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_Sim": 42.52,
        "pct_Nao": 57.2,
        "pct_NSabe_NResp": 0.28,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fundamental",
        "pct_Sim": 82.38,
        "pct_Nao": 17.57,
        "pct_NSabe_NResp": 0.05,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Médio",
        "pct_Sim": 97.07,
        "pct_Nao": 2.87,
        "pct_NSabe_NResp": 0.06,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Superior",
        "pct_Sim": 98.55,
        "pct_Nao": 1.35,
        "pct_NSabe_NResp": 0.11,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_Sim": 97.38,
        "pct_Nao": 2.6,
        "pct_NSabe_NResp": 0.02,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_Sim": 99.05,
        "pct_Nao": 0.94,
        "pct_NSabe_NResp": 0.02,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_Sim": 97.59,
        "pct_Nao": 2.39,
        "pct_NSabe_NResp": 0.02,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_Sim": 97.13,
        "pct_Nao": 2.87,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_Sim": 90.98,
        "pct_Nao": 8.95,
        "pct_NSabe_NResp": 0.06,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_Sim": 64.52,
        "pct_Nao": 35.19,
        "pct_NSabe_NResp": 0.3,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_Sim": 85.56,
        "pct_Nao": 14.34,
        "pct_NSabe_NResp": 0.09,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_Sim": 87.54,
        "pct_Nao": 12.3,
        "pct_NSabe_NResp": 0.16,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_Sim": 92.55,
        "pct_Nao": 7.42,
        "pct_NSabe_NResp": 0.03,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_Sim": 96.98,
        "pct_Nao": 3.02,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_Sim": 99.13,
        "pct_Nao": 0.87,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_Sim": 98.98,
        "pct_Nao": 1.02,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Não tem renda",
        "pct_Sim": 89.44,
        "pct_Nao": 10.56,
        "pct_NSabe_NResp": 0,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Não sabe (renda)",
        "pct_Sim": 84.52,
        "pct_Nao": 15.46,
        "pct_NSabe_NResp": 0.02,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Não respondeu (renda)",
        "pct_Sim": 92.55,
        "pct_Nao": 7.35,
        "pct_NSabe_NResp": 0.1,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "A",
        "pct_Sim": 98.04,
        "pct_Nao": 1.96,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "B",
        "pct_Sim": 97.92,
        "pct_Nao": 2.08,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "C",
        "pct_Sim": 92.79,
        "pct_Nao": 7.14,
        "pct_NSabe_NResp": 0.07,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "DE",
        "pct_Sim": 81.04,
        "pct_Nao": 18.83,
        "pct_NSabe_NResp": 0.14,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_Sim": 94.43,
        "pct_Nao": 5.52,
        "pct_NSabe_NResp": 0.06,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_Sim": 84,
        "pct_Nao": 15.9,
        "pct_NSabe_NResp": 0.1,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Formal",
        "pct_Sim": 97.7,
        "pct_Nao": 2.29,
        "pct_NSabe_NResp": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Informal",
        "pct_Sim": 90.54,
        "pct_Nao": 9.33,
        "pct_NSabe_NResp": 0.13,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não se aplica",
        "pct_Sim": 85.18,
        "pct_Nao": 14.73,
        "pct_NSabe_NResp": 0.09,
        "Flags": "A1,A2",
        "Classe": "Média"
      }
    ]
  },
  "C15A": {
    "code": "C15A",
    "sheet": "RankC15A",
    "title": "C15A - INDIVÍDUOS QUE NUNCA UTILIZARAM INTERNET, POR PRINCIPAL MOTIVO DECLARADO PARA NUNCA TER UTILIZADO A INTERNET",
    "subtitle": "Total de pessoas que nunca acessaram a Internet",
    "group": "Indivíduos",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_NaoTerOnde",
        "label": "Não tem onde acessar (%)"
      },
      {
        "key": "pct_MuitoCaro",
        "label": "Muito caro (%)"
      },
      {
        "key": "pct_NS_NR",
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
      "A1": "A1: pct_NaoTerOnde > 5",
      "A2": "A2: pct_MuitoCaro > 5",
      "A3": "A3: pct_MuitoCaro > 10 (acumula com A2)",
      "A4": "A4: pct_NS_NR > 5 (já é Não sabe + Não respondeu)"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_NaoTerOnde": 3.26,
        "pct_MuitoCaro": 10.71,
        "pct_NS_NR": 0.83,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Urbana",
        "pct_NaoTerOnde": 3.21,
        "pct_MuitoCaro": 10.42,
        "pct_NS_NR": 0.84,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Rural",
        "pct_NaoTerOnde": 3.49,
        "pct_MuitoCaro": 11.85,
        "pct_NS_NR": 0.76,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Sudeste",
        "pct_NaoTerOnde": 1.49,
        "pct_MuitoCaro": 8.62,
        "pct_NS_NR": 0.44,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Nordeste",
        "pct_NaoTerOnde": 1.94,
        "pct_MuitoCaro": 10.86,
        "pct_NS_NR": 1.91,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Sul",
        "pct_NaoTerOnde": 4.54,
        "pct_MuitoCaro": 27.48,
        "pct_NS_NR": 0.59,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Norte",
        "pct_NaoTerOnde": 5.08,
        "pct_MuitoCaro": 7.05,
        "pct_NS_NR": 0.23,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_NaoTerOnde": 1,
        "pct_MuitoCaro": 10.58,
        "pct_NS_NR": 0.27,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Branca",
        "pct_NaoTerOnde": 4.48,
        "pct_MuitoCaro": 8.7,
        "pct_NS_NR": 0.76,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Preta",
        "pct_NaoTerOnde": 3.03,
        "pct_MuitoCaro": 8.89,
        "pct_NS_NR": 0.66,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Parda",
        "pct_NaoTerOnde": 10.93,
        "pct_MuitoCaro": 21.55,
        "pct_NS_NR": 0.07,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Amarela",
        "pct_NaoTerOnde": 2.41,
        "pct_MuitoCaro": 13.06,
        "pct_NS_NR": 0.77,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Indígena",
        "pct_NaoTerOnde": 2.91,
        "pct_MuitoCaro": 9.71,
        "pct_NS_NR": 0.44,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não respondeu",
        "pct_NaoTerOnde": 0.77,
        "pct_MuitoCaro": 9.63,
        "pct_NS_NR": 1.92,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_NaoTerOnde": 2.15,
        "pct_MuitoCaro": 8.09,
        "pct_NS_NR": 1.02,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Fundamental",
        "pct_NaoTerOnde": 3.79,
        "pct_MuitoCaro": 10.96,
        "pct_NS_NR": 0.82,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Médio",
        "pct_NaoTerOnde": 3.08,
        "pct_MuitoCaro": 14.56,
        "pct_NS_NR": 0.75,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Superior",
        "pct_NaoTerOnde": 0.3,
        "pct_MuitoCaro": 8,
        "pct_NS_NR": 0,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_NaoTerOnde": 12,
        "pct_MuitoCaro": 20.91,
        "pct_NS_NR": 0,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_NaoTerOnde": 1.51,
        "pct_MuitoCaro": 21.83,
        "pct_NS_NR": 0,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_NaoTerOnde": 5.55,
        "pct_MuitoCaro": 27.64,
        "pct_NS_NR": 0.9,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_NaoTerOnde": 2.35,
        "pct_MuitoCaro": 17.12,
        "pct_NS_NR": 0,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_NaoTerOnde": 7.65,
        "pct_MuitoCaro": 14.64,
        "pct_NS_NR": 1.43,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_NaoTerOnde": 1.6,
        "pct_MuitoCaro": 7.29,
        "pct_NS_NR": 0.76,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_NaoTerOnde": 3.96,
        "pct_MuitoCaro": 16.09,
        "pct_NS_NR": 1.34,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_NaoTerOnde": 4.67,
        "pct_MuitoCaro": 6.42,
        "pct_NS_NR": 0.65,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_NaoTerOnde": 0.56,
        "pct_MuitoCaro": 8.18,
        "pct_NS_NR": 0.25,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_NaoTerOnde": 1.45,
        "pct_MuitoCaro": 14.08,
        "pct_NS_NR": 0,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_NaoTerOnde": 0.76,
        "pct_MuitoCaro": 0,
        "pct_NS_NR": 1.42,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_NaoTerOnde": 0,
        "pct_MuitoCaro": 0,
        "pct_NS_NR": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Não tem renda",
        "pct_NaoTerOnde": 1.8,
        "pct_MuitoCaro": 43.53,
        "pct_NS_NR": 1.18,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Não sabe",
        "pct_NaoTerOnde": 1.49,
        "pct_MuitoCaro": 5.57,
        "pct_NS_NR": 0.46,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não respondeu",
        "pct_NaoTerOnde": 0.73,
        "pct_MuitoCaro": 4.61,
        "pct_NS_NR": 0.86,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "A",
        "pct_NaoTerOnde": 0,
        "pct_MuitoCaro": 0,
        "pct_NS_NR": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "B",
        "pct_NaoTerOnde": 0.34,
        "pct_MuitoCaro": 0,
        "pct_NS_NR": 0.2,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "C",
        "pct_NaoTerOnde": 3.78,
        "pct_MuitoCaro": 6.94,
        "pct_NS_NR": 0.25,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "DE",
        "pct_NaoTerOnde": 3.16,
        "pct_MuitoCaro": 13.76,
        "pct_NS_NR": 1.22,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_NaoTerOnde": 5.04,
        "pct_MuitoCaro": 14.18,
        "pct_NS_NR": 0.43,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_NaoTerOnde": 2.36,
        "pct_MuitoCaro": 8.94,
        "pct_NS_NR": 1.03,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Formal",
        "pct_NaoTerOnde": 1.54,
        "pct_MuitoCaro": 12.86,
        "pct_NS_NR": 0.13,
        "Flags": "A2,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Informal",
        "pct_NaoTerOnde": 5.92,
        "pct_MuitoCaro": 14.84,
        "pct_NS_NR": 0.49,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não se aplica",
        "pct_NaoTerOnde": 2.43,
        "pct_MuitoCaro": 8.92,
        "pct_NS_NR": 1.03,
        "Flags": "A2",
        "Classe": "Observação"
      }
    ]
  },
  "C16A": {
    "code": "C16A",
    "sheet": "RankC16A",
    "title": "C16A - USUÁRIOS DE INTERNET, POR ACESSO EXCLUSIVO OU SIMULTÂNEO POR TELEFONE CELULAR E COMPUTADOR",
    "subtitle": "Total de usuários de Internet",
    "group": "Indivíduos",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_ApenasComputador",
        "label": "Apenascomputador (%)"
      },
      {
        "key": "pct_ApenasCelular",
        "label": "Apenascelular (%)"
      },
      {
        "key": "pct_Ambos",
        "label": "Ambos (%)"
      },
      {
        "key": "pct_Nenhum",
        "label": "Nenhum (%)"
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
      "A1": "A1: pct_ApenasCelular > 20",
      "A2": "A2: pct_ApenasCelular > 70 (acumula com A1)",
      "A3": "A3: pct_Ambos < 70",
      "A4": "A4: pct_Ambos < 50 (acumula com A3)"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_ApenasComputador": 0.28,
        "pct_ApenasCelular": 59.88,
        "pct_Ambos": 39.63,
        "pct_Nenhum": 0.21,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Urbana",
        "pct_ApenasComputador": 0.31,
        "pct_ApenasCelular": 57.18,
        "pct_Ambos": 42.31,
        "pct_Nenhum": 0.2,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Rural",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 81.73,
        "pct_Ambos": 17.97,
        "pct_Nenhum": 0.3,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_ApenasComputador": 0.44,
        "pct_ApenasCelular": 50.3,
        "pct_Ambos": 49.05,
        "pct_Nenhum": 0.2,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Nordeste",
        "pct_ApenasComputador": 0.37,
        "pct_ApenasCelular": 74.66,
        "pct_Ambos": 24.61,
        "pct_Nenhum": 0.36,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_ApenasComputador": 0.06,
        "pct_ApenasCelular": 71.89,
        "pct_Ambos": 27.82,
        "pct_Nenhum": 0.24,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Norte",
        "pct_ApenasComputador": 0.21,
        "pct_ApenasCelular": 50.93,
        "pct_Ambos": 48.75,
        "pct_Nenhum": 0.11,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_ApenasComputador": 0.26,
        "pct_ApenasCelular": 65.48,
        "pct_Ambos": 34.01,
        "pct_Nenhum": 0.24,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Masculino",
        "pct_ApenasComputador": 0.25,
        "pct_ApenasCelular": 53.97,
        "pct_Ambos": 45.45,
        "pct_Nenhum": 0.33,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Feminino",
        "pct_ApenasComputador": 0.3,
        "pct_ApenasCelular": 65.54,
        "pct_Ambos": 34.06,
        "pct_Nenhum": 0.1,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Branca",
        "pct_ApenasComputador": 0.38,
        "pct_ApenasCelular": 51.2,
        "pct_Ambos": 48.15,
        "pct_Nenhum": 0.27,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Preta",
        "pct_ApenasComputador": 0.42,
        "pct_ApenasCelular": 56.43,
        "pct_Ambos": 43.08,
        "pct_Nenhum": 0.08,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Parda",
        "pct_ApenasComputador": 0.74,
        "pct_ApenasCelular": 76.84,
        "pct_Ambos": 22.19,
        "pct_Nenhum": 0.23,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Amarela",
        "pct_ApenasComputador": 0.16,
        "pct_ApenasCelular": 66.32,
        "pct_Ambos": 33.41,
        "pct_Nenhum": 0.11,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Indígena",
        "pct_ApenasComputador": 0.03,
        "pct_ApenasCelular": 69.83,
        "pct_Ambos": 30.02,
        "pct_Nenhum": 0.13,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (cor/raça)",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 59.85,
        "pct_Ambos": 37.06,
        "pct_Nenhum": 3.09,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 98.23,
        "pct_Ambos": 0.92,
        "pct_Nenhum": 0.86,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fundamental",
        "pct_ApenasComputador": 0.81,
        "pct_ApenasCelular": 81.36,
        "pct_Ambos": 17.28,
        "pct_Nenhum": 0.55,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Médio",
        "pct_ApenasComputador": 0.02,
        "pct_ApenasCelular": 62.88,
        "pct_Ambos": 37.04,
        "pct_Nenhum": 0.06,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Superior",
        "pct_ApenasComputador": 0.06,
        "pct_ApenasCelular": 22.28,
        "pct_Ambos": 77.66,
        "pct_Nenhum": 0,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_ApenasComputador": 1.03,
        "pct_ApenasCelular": 65.71,
        "pct_Ambos": 32.77,
        "pct_Nenhum": 0.49,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_ApenasComputador": 0.38,
        "pct_ApenasCelular": 46.93,
        "pct_Ambos": 52.57,
        "pct_Nenhum": 0.12,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 48.9,
        "pct_Ambos": 51.09,
        "pct_Nenhum": 0,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_ApenasComputador": 0.12,
        "pct_ApenasCelular": 56.23,
        "pct_Ambos": 43.47,
        "pct_Nenhum": 0.18,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_ApenasComputador": 0.23,
        "pct_ApenasCelular": 68.49,
        "pct_Ambos": 31.09,
        "pct_Nenhum": 0.19,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_ApenasComputador": 0.3,
        "pct_ApenasCelular": 80.43,
        "pct_Ambos": 18.76,
        "pct_Nenhum": 0.51,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_ApenasComputador": 0.64,
        "pct_ApenasCelular": 80.84,
        "pct_Ambos": 18.18,
        "pct_Nenhum": 0.34,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_ApenasComputador": 0.25,
        "pct_ApenasCelular": 69.53,
        "pct_Ambos": 30,
        "pct_Nenhum": 0.22,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_ApenasComputador": 0.04,
        "pct_ApenasCelular": 53.03,
        "pct_Ambos": 46.62,
        "pct_Nenhum": 0.31,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_ApenasComputador": 0.21,
        "pct_ApenasCelular": 45.29,
        "pct_Ambos": 54.47,
        "pct_Nenhum": 0.03,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_ApenasComputador": 0.41,
        "pct_ApenasCelular": 35.26,
        "pct_Ambos": 64.25,
        "pct_Nenhum": 0.08,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 14.96,
        "pct_Ambos": 85.04,
        "pct_Nenhum": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Não tem renda",
        "pct_ApenasComputador": 0.03,
        "pct_ApenasCelular": 71.61,
        "pct_Ambos": 28.12,
        "pct_Nenhum": 0.24,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não sabe (renda)",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 66.12,
        "pct_Ambos": 33.83,
        "pct_Nenhum": 0.05,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (renda)",
        "pct_ApenasComputador": 0.08,
        "pct_ApenasCelular": 33.34,
        "pct_Ambos": 66.46,
        "pct_Nenhum": 0.12,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "A",
        "pct_ApenasComputador": 0,
        "pct_ApenasCelular": 17.79,
        "pct_Ambos": 82.21,
        "pct_Nenhum": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "B",
        "pct_ApenasComputador": 0.07,
        "pct_ApenasCelular": 24.84,
        "pct_Ambos": 75.02,
        "pct_Nenhum": 0.07,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "C",
        "pct_ApenasComputador": 0.24,
        "pct_ApenasCelular": 62.18,
        "pct_Ambos": 37.42,
        "pct_Nenhum": 0.16,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "DE",
        "pct_ApenasComputador": 0.53,
        "pct_ApenasCelular": 85.92,
        "pct_Ambos": 13.12,
        "pct_Nenhum": 0.43,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_ApenasComputador": 0.13,
        "pct_ApenasCelular": 52.68,
        "pct_Ambos": 47.13,
        "pct_Nenhum": 0.06,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_ApenasComputador": 0.54,
        "pct_ApenasCelular": 72.74,
        "pct_Ambos": 26.24,
        "pct_Nenhum": 0.48,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Formal",
        "pct_ApenasComputador": 0.25,
        "pct_ApenasCelular": 44.4,
        "pct_Ambos": 55.34,
        "pct_Nenhum": 0,
        "Flags": "A1,A3",
        "Classe": "Média"
      },
      {
        "Segmento": "Informal",
        "pct_ApenasComputador": 0.01,
        "pct_ApenasCelular": 62.34,
        "pct_Ambos": 37.53,
        "pct_Nenhum": 0.13,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não se aplica",
        "pct_ApenasComputador": 0.49,
        "pct_ApenasCelular": 70.67,
        "pct_Ambos": 28.42,
        "pct_Nenhum": 0.43,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      }
    ]
  },
  "C2": {
    "code": "C2",
    "sheet": "RankC2",
    "title": "C2 - INDIVÍDUOS, POR ÚLTIMO ACESSO À INTERNET",
    "subtitle": "Total da população",
    "group": "Indivíduos",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_Ult3Meses",
        "label": "Últimos 3 meses (%)"
      },
      {
        "key": "pct_3a12Meses",
        "label": "3 a 12 meses (%)"
      },
      {
        "key": "pct_Mais12Meses",
        "label": "Mais12Meses (%)"
      },
      {
        "key": "pct_NuncaAcessou",
        "label": "Nuncaacessou (%)"
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
      "A1": "A1 → % de acesso nos últimos 3 meses < 70%",
      "A2": "A2 → % de acesso nos últimos 3 meses < 90% (cumulativo com A1)",
      "A3": "A3 → % de pessoas que acessaram há mais de 3 meses (>5%)",
      "A4": "A4 → % de pessoas que nunca acessaram >5%"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_Ult3Meses": 84.46,
        "pct_3a12Meses": 2.06,
        "pct_Mais12Meses": 3.67,
        "pct_NuncaAcessou": 9.73,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Urbana",
        "pct_Ult3Meses": 85.68,
        "pct_3a12Meses": 1.97,
        "pct_Mais12Meses": 3.43,
        "pct_NuncaAcessou": 8.84,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Rural",
        "pct_Ult3Meses": 75.79,
        "pct_3a12Meses": 2.68,
        "pct_Mais12Meses": 5.41,
        "pct_NuncaAcessou": 16.06,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_Ult3Meses": 90.07,
        "pct_3a12Meses": 0.75,
        "pct_Mais12Meses": 1.75,
        "pct_NuncaAcessou": 7.41,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Nordeste",
        "pct_Ult3Meses": 83.09,
        "pct_3a12Meses": 1.98,
        "pct_Mais12Meses": 3.11,
        "pct_NuncaAcessou": 11.66,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_Ult3Meses": 80.92,
        "pct_3a12Meses": 3.63,
        "pct_Mais12Meses": 4.58,
        "pct_NuncaAcessou": 10.8,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Norte",
        "pct_Ult3Meses": 84.64,
        "pct_3a12Meses": 2,
        "pct_Mais12Meses": 4.5,
        "pct_NuncaAcessou": 8.8,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_Ult3Meses": 81.77,
        "pct_3a12Meses": 3.34,
        "pct_Mais12Meses": 3.61,
        "pct_NuncaAcessou": 11.27,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Masculino",
        "pct_Ult3Meses": 85.17,
        "pct_3a12Meses": 2.28,
        "pct_Mais12Meses": 2.6,
        "pct_NuncaAcessou": 9.95,
        "Flags": "A2,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Feminino",
        "pct_Ult3Meses": 83.79,
        "pct_3a12Meses": 1.86,
        "pct_Mais12Meses": 4.69,
        "pct_NuncaAcessou": 9.52,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Branca",
        "pct_Ult3Meses": 84.71,
        "pct_3a12Meses": 1.06,
        "pct_Mais12Meses": 3.89,
        "pct_NuncaAcessou": 10.33,
        "Flags": "A2,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Preta",
        "pct_Ult3Meses": 84.58,
        "pct_3a12Meses": 1.72,
        "pct_Mais12Meses": 4.87,
        "pct_NuncaAcessou": 8.82,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Parda",
        "pct_Ult3Meses": 79.3,
        "pct_3a12Meses": 0.58,
        "pct_Mais12Meses": 7.6,
        "pct_NuncaAcessou": 10.83,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Amarela",
        "pct_Ult3Meses": 86.1,
        "pct_3a12Meses": 2.91,
        "pct_Mais12Meses": 3.08,
        "pct_NuncaAcessou": 7.85,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Indígena",
        "pct_Ult3Meses": 73.1,
        "pct_3a12Meses": 1.9,
        "pct_Mais12Meses": 2.39,
        "pct_NuncaAcessou": 22.58,
        "Flags": "A2,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não respondeu (cor/raça)",
        "pct_Ult3Meses": 59.55,
        "pct_3a12Meses": 3.06,
        "pct_Mais12Meses": 1.75,
        "pct_NuncaAcessou": 35.1,
        "Flags": "A1,A2,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_Ult3Meses": 36.81,
        "pct_3a12Meses": 1.79,
        "pct_Mais12Meses": 3.91,
        "pct_NuncaAcessou": 57.2,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fundamental",
        "pct_Ult3Meses": 74.08,
        "pct_3a12Meses": 2.32,
        "pct_Mais12Meses": 5.98,
        "pct_NuncaAcessou": 17.57,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Médio",
        "pct_Ult3Meses": 92.35,
        "pct_3a12Meses": 1.63,
        "pct_Mais12Meses": 3.08,
        "pct_NuncaAcessou": 2.87,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Superior",
        "pct_Ult3Meses": 95.28,
        "pct_3a12Meses": 2.5,
        "pct_Mais12Meses": 0.77,
        "pct_NuncaAcessou": 1.35,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_Ult3Meses": 91.05,
        "pct_3a12Meses": 2.33,
        "pct_Mais12Meses": 4,
        "pct_NuncaAcessou": 2.6,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_Ult3Meses": 95.48,
        "pct_3a12Meses": 1.53,
        "pct_Mais12Meses": 2.04,
        "pct_NuncaAcessou": 0.94,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_Ult3Meses": 92.01,
        "pct_3a12Meses": 3.74,
        "pct_Mais12Meses": 1.84,
        "pct_NuncaAcessou": 2.39,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_Ult3Meses": 91.27,
        "pct_3a12Meses": 1.7,
        "pct_Mais12Meses": 4.16,
        "pct_NuncaAcessou": 2.87,
        "Flags": "A3",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_Ult3Meses": 84,
        "pct_3a12Meses": 1.4,
        "pct_Mais12Meses": 5.59,
        "pct_NuncaAcessou": 8.95,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_Ult3Meses": 58.76,
        "pct_3a12Meses": 1.82,
        "pct_Mais12Meses": 3.93,
        "pct_NuncaAcessou": 35.19,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_Ult3Meses": 76.12,
        "pct_3a12Meses": 2.96,
        "pct_Mais12Meses": 6.48,
        "pct_NuncaAcessou": 14.34,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_Ult3Meses": 82.41,
        "pct_3a12Meses": 2.06,
        "pct_Mais12Meses": 3.06,
        "pct_NuncaAcessou": 12.3,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_Ult3Meses": 87.16,
        "pct_3a12Meses": 0.58,
        "pct_Mais12Meses": 4.8,
        "pct_NuncaAcessou": 7.42,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_Ult3Meses": 96.4,
        "pct_3a12Meses": 0.31,
        "pct_Mais12Meses": 0.27,
        "pct_NuncaAcessou": 3.02,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_Ult3Meses": 97.67,
        "pct_3a12Meses": 0.4,
        "pct_Mais12Meses": 1.06,
        "pct_NuncaAcessou": 0.87,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_Ult3Meses": 96.74,
        "pct_3a12Meses": 1.97,
        "pct_Mais12Meses": 0.26,
        "pct_NuncaAcessou": 1.02,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Não tem renda",
        "pct_Ult3Meses": 82.68,
        "pct_3a12Meses": 3.12,
        "pct_Mais12Meses": 3.64,
        "pct_NuncaAcessou": 10.56,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não sabe (renda)",
        "pct_Ult3Meses": 80.45,
        "pct_3a12Meses": 1.36,
        "pct_Mais12Meses": 2.72,
        "pct_NuncaAcessou": 15.46,
        "Flags": "A2,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não respondeu (renda)",
        "pct_Ult3Meses": 79.7,
        "pct_3a12Meses": 10.25,
        "pct_Mais12Meses": 2.61,
        "pct_NuncaAcessou": 7.35,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "A",
        "pct_Ult3Meses": 96.39,
        "pct_3a12Meses": 0.26,
        "pct_Mais12Meses": 1.38,
        "pct_NuncaAcessou": 1.96,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "B",
        "pct_Ult3Meses": 96.7,
        "pct_3a12Meses": 0.33,
        "pct_Mais12Meses": 0.89,
        "pct_NuncaAcessou": 2.08,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "C",
        "pct_Ult3Meses": 86.76,
        "pct_3a12Meses": 1.98,
        "pct_Mais12Meses": 4.05,
        "pct_NuncaAcessou": 7.14,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "DE",
        "pct_Ult3Meses": 72.87,
        "pct_3a12Meses": 3.31,
        "pct_Mais12Meses": 4.86,
        "pct_NuncaAcessou": 18.83,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_Ult3Meses": 91.11,
        "pct_3a12Meses": 1.18,
        "pct_Mais12Meses": 2.13,
        "pct_NuncaAcessou": 5.52,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_Ult3Meses": 74.74,
        "pct_3a12Meses": 3.35,
        "pct_Mais12Meses": 5.92,
        "pct_NuncaAcessou": 15.9,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Formal",
        "pct_Ult3Meses": 95.79,
        "pct_3a12Meses": 0.84,
        "pct_Mais12Meses": 1.08,
        "pct_NuncaAcessou": 2.29,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Informal",
        "pct_Ult3Meses": 86.05,
        "pct_3a12Meses": 1.37,
        "pct_Mais12Meses": 3.12,
        "pct_NuncaAcessou": 9.33,
        "Flags": "A2,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não se aplica",
        "pct_Ult3Meses": 76.26,
        "pct_3a12Meses": 3.26,
        "pct_Mais12Meses": 5.66,
        "pct_NuncaAcessou": 14.73,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      }
    ]
  },
  "J2A": {
    "code": "J2A",
    "sheet": "RankJ2A",
    "title": "J2A - INDIVÍDUOS, POR QUANTIDADE DE LINHAS DE TELEFONE CELULAR",
    "subtitle": "Total da população",
    "group": "Indivíduos",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_NenhumaLinha",
        "label": "Nenhuma linha (%)"
      },
      {
        "key": "pct_UmaLinha",
        "label": "Uma linha (%)"
      },
      {
        "key": "pct_DuasLinhas",
        "label": "Duas linhas (%)"
      },
      {
        "key": "pct_TresOuMais",
        "label": "Três ou mais linhas (%)"
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
      "A1": "A1 - pct_NenhumaLinha > 5",
      "A2": "A2 - pct_UmaLinha < 70",
      "A3": "A3 - pct_UmaLinha + pct_DuasLinhas < 85",
      "A4": "A4 - pct_UmaLinha + pct_DuasLinhas + pct_TresOuMais < 95"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_NenhumaLinha": 12.18,
        "pct_UmaLinha": 71.87,
        "pct_DuasLinhas": 14.23,
        "pct_TresOuMais": 0.96,
        "pct_NSabe_NResp": 0.76,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Urbana",
        "pct_NenhumaLinha": 11.03,
        "pct_UmaLinha": 72.4,
        "pct_DuasLinhas": 14.79,
        "pct_TresOuMais": 0.99,
        "pct_NSabe_NResp": 0.79,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Rural",
        "pct_NenhumaLinha": 20.45,
        "pct_UmaLinha": 68.13,
        "pct_DuasLinhas": 10.19,
        "pct_TresOuMais": 0.71,
        "pct_NSabe_NResp": 0.51,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_NenhumaLinha": 8.42,
        "pct_UmaLinha": 72.01,
        "pct_DuasLinhas": 16.26,
        "pct_TresOuMais": 0.84,
        "pct_NSabe_NResp": 2.48,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Nordeste",
        "pct_NenhumaLinha": 15.21,
        "pct_UmaLinha": 71.93,
        "pct_DuasLinhas": 11.65,
        "pct_TresOuMais": 0.5,
        "pct_NSabe_NResp": 0.72,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_NenhumaLinha": 15.62,
        "pct_UmaLinha": 64.68,
        "pct_DuasLinhas": 18.59,
        "pct_TresOuMais": 0.22,
        "pct_NSabe_NResp": 0.89,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Norte",
        "pct_NenhumaLinha": 11.03,
        "pct_UmaLinha": 72.66,
        "pct_DuasLinhas": 14.67,
        "pct_TresOuMais": 1.37,
        "pct_NSabe_NResp": 0.27,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_NenhumaLinha": 11.31,
        "pct_UmaLinha": 75.05,
        "pct_DuasLinhas": 12.1,
        "pct_TresOuMais": 1.27,
        "pct_NSabe_NResp": 0.27,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Masculino",
        "pct_NenhumaLinha": 12.84,
        "pct_UmaLinha": 69.4,
        "pct_DuasLinhas": 15.77,
        "pct_TresOuMais": 1.44,
        "pct_NSabe_NResp": 0.54,
        "Flags": "A1,A2,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Feminino",
        "pct_NenhumaLinha": 11.56,
        "pct_UmaLinha": 74.2,
        "pct_DuasLinhas": 12.77,
        "pct_TresOuMais": 0.5,
        "pct_NSabe_NResp": 0.97,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Branca",
        "pct_NenhumaLinha": 11.63,
        "pct_UmaLinha": 73.81,
        "pct_DuasLinhas": 12.97,
        "pct_TresOuMais": 1.03,
        "pct_NSabe_NResp": 0.55,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Preta",
        "pct_NenhumaLinha": 12.93,
        "pct_UmaLinha": 66.12,
        "pct_DuasLinhas": 18.65,
        "pct_TresOuMais": 1.57,
        "pct_NSabe_NResp": 0.73,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Parda",
        "pct_NenhumaLinha": 9.75,
        "pct_UmaLinha": 75.73,
        "pct_DuasLinhas": 8.55,
        "pct_TresOuMais": 4.38,
        "pct_NSabe_NResp": 1.59,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Amarela",
        "pct_NenhumaLinha": 11.08,
        "pct_UmaLinha": 73.62,
        "pct_DuasLinhas": 13.82,
        "pct_TresOuMais": 0.62,
        "pct_NSabe_NResp": 0.85,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Indígena",
        "pct_NenhumaLinha": 23.08,
        "pct_UmaLinha": 68.9,
        "pct_DuasLinhas": 7.71,
        "pct_TresOuMais": 0.13,
        "pct_NSabe_NResp": 0.18,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (cor/raça)",
        "pct_NenhumaLinha": 31.31,
        "pct_UmaLinha": 49.4,
        "pct_DuasLinhas": 17.39,
        "pct_TresOuMais": 0.02,
        "pct_NSabe_NResp": 1.88,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_NenhumaLinha": 45.09,
        "pct_UmaLinha": 50.65,
        "pct_DuasLinhas": 2.54,
        "pct_TresOuMais": 0.01,
        "pct_NSabe_NResp": 1.71,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fundamental",
        "pct_NenhumaLinha": 23.81,
        "pct_UmaLinha": 65.99,
        "pct_DuasLinhas": 8.68,
        "pct_TresOuMais": 0.53,
        "pct_NSabe_NResp": 0.99,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Médio",
        "pct_NenhumaLinha": 4.52,
        "pct_UmaLinha": 79.25,
        "pct_DuasLinhas": 14.77,
        "pct_TresOuMais": 0.83,
        "pct_NSabe_NResp": 0.63,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Superior",
        "pct_NenhumaLinha": 1.34,
        "pct_UmaLinha": 71.18,
        "pct_DuasLinhas": 24.91,
        "pct_TresOuMais": 2.13,
        "pct_NSabe_NResp": 0.44,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_NenhumaLinha": 30.94,
        "pct_UmaLinha": 62.55,
        "pct_DuasLinhas": 4.47,
        "pct_TresOuMais": 0.62,
        "pct_NSabe_NResp": 1.43,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_NenhumaLinha": 7.81,
        "pct_UmaLinha": 79,
        "pct_DuasLinhas": 11.4,
        "pct_TresOuMais": 0.36,
        "pct_NSabe_NResp": 1.43,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_NenhumaLinha": 4.92,
        "pct_UmaLinha": 75.75,
        "pct_DuasLinhas": 17.04,
        "pct_TresOuMais": 2.19,
        "pct_NSabe_NResp": 0.11,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_NenhumaLinha": 5.21,
        "pct_UmaLinha": 73.2,
        "pct_DuasLinhas": 20.79,
        "pct_TresOuMais": 0.68,
        "pct_NSabe_NResp": 0.13,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_NenhumaLinha": 8.18,
        "pct_UmaLinha": 71.33,
        "pct_DuasLinhas": 18.83,
        "pct_TresOuMais": 1.4,
        "pct_NSabe_NResp": 0.27,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_NenhumaLinha": 24.75,
        "pct_UmaLinha": 66.39,
        "pct_DuasLinhas": 7,
        "pct_TresOuMais": 0.15,
        "pct_NSabe_NResp": 1.71,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_NenhumaLinha": 21.86,
        "pct_UmaLinha": 67.72,
        "pct_DuasLinhas": 9.15,
        "pct_TresOuMais": 0.55,
        "pct_NSabe_NResp": 0.72,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_NenhumaLinha": 12.75,
        "pct_UmaLinha": 74.47,
        "pct_DuasLinhas": 11.76,
        "pct_TresOuMais": 0.41,
        "pct_NSabe_NResp": 0.6,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_NenhumaLinha": 8.11,
        "pct_UmaLinha": 79.19,
        "pct_DuasLinhas": 11.88,
        "pct_TresOuMais": 0.42,
        "pct_NSabe_NResp": 0.4,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_NenhumaLinha": 4.09,
        "pct_UmaLinha": 70.4,
        "pct_DuasLinhas": 22.68,
        "pct_TresOuMais": 2.7,
        "pct_NSabe_NResp": 0.13,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_NenhumaLinha": 2.76,
        "pct_UmaLinha": 76.38,
        "pct_DuasLinhas": 19.11,
        "pct_TresOuMais": 1.52,
        "pct_NSabe_NResp": 0.23,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_NenhumaLinha": 3.07,
        "pct_UmaLinha": 64.87,
        "pct_DuasLinhas": 29.64,
        "pct_TresOuMais": 2.39,
        "pct_NSabe_NResp": 0.02,
        "Flags": "A2",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não tem renda",
        "pct_NenhumaLinha": 29.36,
        "pct_UmaLinha": 63.57,
        "pct_DuasLinhas": 6.97,
        "pct_TresOuMais": 0,
        "pct_NSabe_NResp": 0.09,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não sabe (renda)",
        "pct_NenhumaLinha": 15.49,
        "pct_UmaLinha": 64.87,
        "pct_DuasLinhas": 14.68,
        "pct_TresOuMais": 0.43,
        "pct_NSabe_NResp": 4.52,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (renda)",
        "pct_NenhumaLinha": 4.33,
        "pct_UmaLinha": 62.21,
        "pct_DuasLinhas": 28.45,
        "pct_TresOuMais": 2.95,
        "pct_NSabe_NResp": 2.07,
        "Flags": "A2,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "A",
        "pct_NenhumaLinha": 5.12,
        "pct_UmaLinha": 72.09,
        "pct_DuasLinhas": 14.24,
        "pct_TresOuMais": 8.09,
        "pct_NSabe_NResp": 0.46,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "B",
        "pct_NenhumaLinha": 1.95,
        "pct_UmaLinha": 73.51,
        "pct_DuasLinhas": 22.1,
        "pct_TresOuMais": 2.02,
        "pct_NSabe_NResp": 0.42,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "C",
        "pct_NenhumaLinha": 9.84,
        "pct_UmaLinha": 74.42,
        "pct_DuasLinhas": 14.16,
        "pct_TresOuMais": 0.8,
        "pct_NSabe_NResp": 0.78,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "DE",
        "pct_NenhumaLinha": 22.48,
        "pct_UmaLinha": 66.76,
        "pct_DuasLinhas": 9.46,
        "pct_TresOuMais": 0.34,
        "pct_NSabe_NResp": 0.95,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_NenhumaLinha": 6.99,
        "pct_UmaLinha": 72.66,
        "pct_DuasLinhas": 18.29,
        "pct_TresOuMais": 1.32,
        "pct_NSabe_NResp": 0.75,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_NenhumaLinha": 19.8,
        "pct_UmaLinha": 70.72,
        "pct_DuasLinhas": 8.27,
        "pct_TresOuMais": 0.43,
        "pct_NSabe_NResp": 0.78,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Formal",
        "pct_NenhumaLinha": 2.34,
        "pct_UmaLinha": 74.78,
        "pct_DuasLinhas": 21.26,
        "pct_TresOuMais": 1.04,
        "pct_NSabe_NResp": 0.57,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "Informal",
        "pct_NenhumaLinha": 11.77,
        "pct_UmaLinha": 70.36,
        "pct_DuasLinhas": 15.05,
        "pct_TresOuMais": 1.8,
        "pct_NSabe_NResp": 1.03,
        "Flags": "A1,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não se aplica",
        "pct_NenhumaLinha": 18.73,
        "pct_UmaLinha": 70.92,
        "pct_DuasLinhas": 9.23,
        "pct_TresOuMais": 0.4,
        "pct_NSabe_NResp": 0.72,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      }
    ]
  },
  "J3": {
    "code": "J3",
    "sheet": "RankJ3",
    "title": "J3 - INDIVÍDUOS QUE POSSUEM TELEFONE CELULAR, POR TIPO DE PLANO DE PAGAMENTO",
    "subtitle": "Total de pessoas que possuem telefone celular",
    "group": "Indivíduos",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_PrePago",
        "label": "Pré-pago (%)"
      },
      {
        "key": "pct_PosPago",
        "label": "Pós-pago (%)"
      },
      {
        "key": "pct_Controle",
        "label": "Controle (%)"
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
      "A1": "A1: pct_PrePago > 5",
      "A2": "A2: pct_PosPago < 30",
      "A3": "A3: pct_PosPago + pct_Controle < 50",
      "A4": "A4: pct_NSabe_NResp > 10"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_PrePago": 56.82,
        "pct_PosPago": 20.15,
        "pct_Controle": 17.58,
        "pct_NSabe_NResp": 5.46,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Urbana",
        "pct_PrePago": 55.01,
        "pct_PosPago": 21.59,
        "pct_Controle": 18.17,
        "pct_NSabe_NResp": 5.23,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Rural",
        "pct_PrePago": 71.21,
        "pct_PosPago": 8.62,
        "pct_Controle": 12.86,
        "pct_NSabe_NResp": 7.31,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_PrePago": 52.38,
        "pct_PosPago": 24.14,
        "pct_Controle": 21.27,
        "pct_NSabe_NResp": 2.21,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Nordeste",
        "pct_PrePago": 65.54,
        "pct_PosPago": 7.98,
        "pct_Controle": 13.65,
        "pct_NSabe_NResp": 12.83,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_PrePago": 50.86,
        "pct_PosPago": 29.21,
        "pct_Controle": 16.85,
        "pct_NSabe_NResp": 3.09,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Norte",
        "pct_PrePago": 62.73,
        "pct_PosPago": 15.25,
        "pct_Controle": 17.09,
        "pct_NSabe_NResp": 4.93,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_PrePago": 57.67,
        "pct_PosPago": 26.13,
        "pct_Controle": 11.96,
        "pct_NSabe_NResp": 4.24,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Masculino",
        "pct_PrePago": 54.87,
        "pct_PosPago": 20.82,
        "pct_Controle": 20.33,
        "pct_NSabe_NResp": 3.98,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Feminino",
        "pct_PrePago": 58.63,
        "pct_PosPago": 19.52,
        "pct_Controle": 15.01,
        "pct_NSabe_NResp": 6.84,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Branca",
        "pct_PrePago": 49.61,
        "pct_PosPago": 26.09,
        "pct_Controle": 20.09,
        "pct_NSabe_NResp": 4.21,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Preta",
        "pct_PrePago": 60.25,
        "pct_PosPago": 15.08,
        "pct_Controle": 19.86,
        "pct_NSabe_NResp": 4.81,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Parda",
        "pct_PrePago": 53.64,
        "pct_PosPago": 11.57,
        "pct_Controle": 28.57,
        "pct_NSabe_NResp": 6.21,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Amarela",
        "pct_PrePago": 60.65,
        "pct_PosPago": 18.48,
        "pct_Controle": 14.65,
        "pct_NSabe_NResp": 6.22,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Indígena",
        "pct_PrePago": 60.83,
        "pct_PosPago": 6.17,
        "pct_Controle": 26.92,
        "pct_NSabe_NResp": 6.09,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (cor/raça)",
        "pct_PrePago": 60.35,
        "pct_PosPago": 17.21,
        "pct_Controle": 9.21,
        "pct_NSabe_NResp": 13.23,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_PrePago": 57.61,
        "pct_PosPago": 7.52,
        "pct_Controle": 21.92,
        "pct_NSabe_NResp": 12.96,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fundamental",
        "pct_PrePago": 65.2,
        "pct_PosPago": 13.38,
        "pct_Controle": 12.38,
        "pct_NSabe_NResp": 9.04,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Médio",
        "pct_PrePago": 59.99,
        "pct_PosPago": 17.38,
        "pct_Controle": 18.05,
        "pct_NSabe_NResp": 4.59,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Superior",
        "pct_PrePago": 39.4,
        "pct_PosPago": 35.74,
        "pct_Controle": 23.24,
        "pct_NSabe_NResp": 1.62,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_PrePago": 70.65,
        "pct_PosPago": 7.8,
        "pct_Controle": 9.18,
        "pct_NSabe_NResp": 12.38,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_PrePago": 67.56,
        "pct_PosPago": 8.2,
        "pct_Controle": 17.41,
        "pct_NSabe_NResp": 6.83,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_PrePago": 56.66,
        "pct_PosPago": 22.55,
        "pct_Controle": 17.96,
        "pct_NSabe_NResp": 2.83,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_PrePago": 54.08,
        "pct_PosPago": 23.08,
        "pct_Controle": 19.7,
        "pct_NSabe_NResp": 3.14,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_PrePago": 52.68,
        "pct_PosPago": 22.92,
        "pct_Controle": 18.99,
        "pct_NSabe_NResp": 5.41,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_PrePago": 49.28,
        "pct_PosPago": 27.06,
        "pct_Controle": 16.49,
        "pct_NSabe_NResp": 7.17,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_PrePago": 68.38,
        "pct_PosPago": 11.07,
        "pct_Controle": 10.02,
        "pct_NSabe_NResp": 10.53,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_PrePago": 60.23,
        "pct_PosPago": 14.87,
        "pct_Controle": 18.65,
        "pct_NSabe_NResp": 6.25,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_PrePago": 53.27,
        "pct_PosPago": 22.54,
        "pct_Controle": 21.94,
        "pct_NSabe_NResp": 2.26,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_PrePago": 46,
        "pct_PosPago": 29.36,
        "pct_Controle": 22.86,
        "pct_NSabe_NResp": 1.79,
        "Flags": "A1,A2",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_PrePago": 43.33,
        "pct_PosPago": 34.87,
        "pct_Controle": 21.49,
        "pct_NSabe_NResp": 0.31,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_PrePago": 35.83,
        "pct_PosPago": 46.85,
        "pct_Controle": 16.1,
        "pct_NSabe_NResp": 1.22,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não tem renda",
        "pct_PrePago": 46.82,
        "pct_PosPago": 38.31,
        "pct_Controle": 11.92,
        "pct_NSabe_NResp": 2.95,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "Não sabe (renda)",
        "pct_PrePago": 60.19,
        "pct_PosPago": 13.98,
        "pct_Controle": 13.64,
        "pct_NSabe_NResp": 12.19,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (renda)",
        "pct_PrePago": 58.97,
        "pct_PosPago": 21.32,
        "pct_Controle": 15.21,
        "pct_NSabe_NResp": 4.5,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "A",
        "pct_PrePago": 24.61,
        "pct_PosPago": 32.51,
        "pct_Controle": 40.63,
        "pct_NSabe_NResp": 2.25,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "B",
        "pct_PrePago": 41.05,
        "pct_PosPago": 37.25,
        "pct_Controle": 20.32,
        "pct_NSabe_NResp": 1.39,
        "Flags": "A1",
        "Classe": "Observação"
      },
      {
        "Segmento": "C",
        "pct_PrePago": 57.44,
        "pct_PosPago": 19.06,
        "pct_Controle": 18.93,
        "pct_NSabe_NResp": 4.58,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "DE",
        "pct_PrePago": 69.25,
        "pct_PosPago": 8.24,
        "pct_Controle": 12.08,
        "pct_NSabe_NResp": 10.44,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_PrePago": 54.31,
        "pct_PosPago": 22.84,
        "pct_Controle": 19.15,
        "pct_NSabe_NResp": 3.71,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_PrePago": 61.08,
        "pct_PosPago": 15.57,
        "pct_Controle": 14.91,
        "pct_NSabe_NResp": 8.44,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Formal",
        "pct_PrePago": 48.76,
        "pct_PosPago": 27.08,
        "pct_Controle": 21.24,
        "pct_NSabe_NResp": 2.93,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Informal",
        "pct_PrePago": 59.89,
        "pct_PosPago": 19.67,
        "pct_Controle": 16,
        "pct_NSabe_NResp": 4.44,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não se aplica",
        "pct_PrePago": 61.04,
        "pct_PosPago": 15.11,
        "pct_Controle": 15.78,
        "pct_NSabe_NResp": 8.07,
        "Flags": "A1,A2,A3",
        "Classe": "Alta"
      }
    ]
  },
  "J6A": {
    "code": "J6A",
    "sheet": "RankJ6A",
    "title": "J6A - USUÁRIOS DE INTERNET PELO TELEFONE CELULAR, POR TIPO DE CONEXÃO UTILIZADA DE FORMA EXCLUSIVA OU SIMULTÂNEA",
    "subtitle": "Total de usuários de Internet pelo telefone celular",
    "group": "Indivíduos",
    "columns": [
      {
        "key": "Segmento",
        "label": "Segmento"
      },
      {
        "key": "pct_ApenasRedeMovel",
        "label": "Apenas rede móvel (%)"
      },
      {
        "key": "pct_ApenasWiFi",
        "label": "Apenas Wi-Fi (%)"
      },
      {
        "key": "pct_Ambos",
        "label": "Ambos (%)"
      },
      {
        "key": "pct_Indeterminado",
        "label": "Indeterminado (%)"
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
      "A1": "A1: pct_ApenasRedeMovel > 5",
      "A2": "A2: pct_ApenasWiFi > 30",
      "A3": "A3: pct_Ambos < 80",
      "A4": "A4: pct_Ambos < 95 (acumula com A3)"
    },
    "classLegend": [
      "0 flags → Baixa",
      "1 flag → Observação",
      "2 flags → Média",
      "3 ou 4 flags (ou seja, >=3) → Alta"
    ],
    "rows": [
      {
        "Segmento": "Brasil (TOTAL)",
        "pct_ApenasRedeMovel": 4.02,
        "pct_ApenasWiFi": 22.44,
        "pct_Ambos": 73.26,
        "pct_Indeterminado": 0.28,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Urbana",
        "pct_ApenasRedeMovel": 3.85,
        "pct_ApenasWiFi": 20.9,
        "pct_Ambos": 74.97,
        "pct_Indeterminado": 0.27,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Rural",
        "pct_ApenasRedeMovel": 5.35,
        "pct_ApenasWiFi": 34.43,
        "pct_Ambos": 59.87,
        "pct_Indeterminado": 0.34,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sudeste",
        "pct_ApenasRedeMovel": 4.08,
        "pct_ApenasWiFi": 19.29,
        "pct_Ambos": 76.38,
        "pct_Indeterminado": 0.25,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Nordeste",
        "pct_ApenasRedeMovel": 3.54,
        "pct_ApenasWiFi": 30.36,
        "pct_Ambos": 65.92,
        "pct_Indeterminado": 0.18,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Sul",
        "pct_ApenasRedeMovel": 2.54,
        "pct_ApenasWiFi": 16.97,
        "pct_Ambos": 79.8,
        "pct_Indeterminado": 0.68,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Norte",
        "pct_ApenasRedeMovel": 7.22,
        "pct_ApenasWiFi": 22.92,
        "pct_Ambos": 69.72,
        "pct_Indeterminado": 0.13,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Centro-Oeste",
        "pct_ApenasRedeMovel": 4.69,
        "pct_ApenasWiFi": 23,
        "pct_Ambos": 72.18,
        "pct_Indeterminado": 0.13,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Masculino",
        "pct_ApenasRedeMovel": 3.54,
        "pct_ApenasWiFi": 19.77,
        "pct_Ambos": 76.48,
        "pct_Indeterminado": 0.22,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Feminino",
        "pct_ApenasRedeMovel": 4.49,
        "pct_ApenasWiFi": 24.98,
        "pct_Ambos": 70.2,
        "pct_Indeterminado": 0.33,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Branca",
        "pct_ApenasRedeMovel": 3.66,
        "pct_ApenasWiFi": 21.06,
        "pct_Ambos": 74.79,
        "pct_Indeterminado": 0.49,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Preta",
        "pct_ApenasRedeMovel": 3.49,
        "pct_ApenasWiFi": 24.82,
        "pct_Ambos": 71.48,
        "pct_Indeterminado": 0.21,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Parda",
        "pct_ApenasRedeMovel": 4.24,
        "pct_ApenasWiFi": 22.48,
        "pct_Ambos": 73.17,
        "pct_Indeterminado": 0.11,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Amarela",
        "pct_ApenasRedeMovel": 7.16,
        "pct_ApenasWiFi": 20.05,
        "pct_Ambos": 72.65,
        "pct_Indeterminado": 0.14,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Indígena",
        "pct_ApenasRedeMovel": 7.05,
        "pct_ApenasWiFi": 19.93,
        "pct_Ambos": 72.82,
        "pct_Indeterminado": 0.2,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (cor/raça)",
        "pct_ApenasRedeMovel": 4.32,
        "pct_ApenasWiFi": 29.91,
        "pct_Ambos": 63.99,
        "pct_Indeterminado": 1.78,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Analfabeto/Educação Infantil",
        "pct_ApenasRedeMovel": 7.07,
        "pct_ApenasWiFi": 68.42,
        "pct_Ambos": 22.78,
        "pct_Indeterminado": 1.72,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Fundamental",
        "pct_ApenasRedeMovel": 5.84,
        "pct_ApenasWiFi": 36.38,
        "pct_Ambos": 57.34,
        "pct_Indeterminado": 0.45,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Médio",
        "pct_ApenasRedeMovel": 3.65,
        "pct_ApenasWiFi": 18.58,
        "pct_Ambos": 77.68,
        "pct_Indeterminado": 0.09,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Superior",
        "pct_ApenasRedeMovel": 2.01,
        "pct_ApenasWiFi": 7.36,
        "pct_Ambos": 90.33,
        "pct_Indeterminado": 0.3,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 10 a 15 anos",
        "pct_ApenasRedeMovel": 2.71,
        "pct_ApenasWiFi": 44.38,
        "pct_Ambos": 52.9,
        "pct_Indeterminado": 0.01,
        "Flags": "A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "De 16 a 24 anos",
        "pct_ApenasRedeMovel": 1.41,
        "pct_ApenasWiFi": 25.34,
        "pct_Ambos": 73.25,
        "pct_Indeterminado": 0,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "De 25 a 34 anos",
        "pct_ApenasRedeMovel": 2.72,
        "pct_ApenasWiFi": 11.85,
        "pct_Ambos": 85.37,
        "pct_Indeterminado": 0.07,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 35 a 44 anos",
        "pct_ApenasRedeMovel": 3.64,
        "pct_ApenasWiFi": 15.61,
        "pct_Ambos": 80.71,
        "pct_Indeterminado": 0.04,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "De 45 a 59 anos",
        "pct_ApenasRedeMovel": 4.33,
        "pct_ApenasWiFi": 18.8,
        "pct_Ambos": 76.74,
        "pct_Indeterminado": 0.13,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "De 60 anos ou mais",
        "pct_ApenasRedeMovel": 10.4,
        "pct_ApenasWiFi": 34.53,
        "pct_Ambos": 53.35,
        "pct_Indeterminado": 1.72,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Até 1 SM",
        "pct_ApenasRedeMovel": 6.59,
        "pct_ApenasWiFi": 39.75,
        "pct_Ambos": 53.47,
        "pct_Indeterminado": 0.2,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Mais de 1 SM até 2 SM",
        "pct_ApenasRedeMovel": 4.46,
        "pct_ApenasWiFi": 22.32,
        "pct_Ambos": 73.02,
        "pct_Indeterminado": 0.21,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Mais de 2 SM até 3 SM",
        "pct_ApenasRedeMovel": 2.87,
        "pct_ApenasWiFi": 15.68,
        "pct_Ambos": 81.31,
        "pct_Indeterminado": 0.14,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 3 SM até 5 SM",
        "pct_ApenasRedeMovel": 1.53,
        "pct_ApenasWiFi": 10.08,
        "pct_Ambos": 87.95,
        "pct_Indeterminado": 0.44,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 5 SM até 10 SM",
        "pct_ApenasRedeMovel": 1.81,
        "pct_ApenasWiFi": 11.21,
        "pct_Ambos": 86.96,
        "pct_Indeterminado": 0.03,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Mais de 10 SM",
        "pct_ApenasRedeMovel": 0.23,
        "pct_ApenasWiFi": 20.05,
        "pct_Ambos": 79.63,
        "pct_Indeterminado": 0.09,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não tem renda",
        "pct_ApenasRedeMovel": 3.53,
        "pct_ApenasWiFi": 25.63,
        "pct_Ambos": 70.45,
        "pct_Indeterminado": 0.39,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não sabe (renda)",
        "pct_ApenasRedeMovel": 5.33,
        "pct_ApenasWiFi": 24.84,
        "pct_Ambos": 69.5,
        "pct_Indeterminado": 0.33,
        "Flags": "A1,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Não respondeu (renda)",
        "pct_ApenasRedeMovel": 4.65,
        "pct_ApenasWiFi": 12.22,
        "pct_Ambos": 81.68,
        "pct_Indeterminado": 1.44,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "A",
        "pct_ApenasRedeMovel": 0,
        "pct_ApenasWiFi": 4.7,
        "pct_Ambos": 95.3,
        "pct_Indeterminado": 0,
        "Flags": null,
        "Classe": "Baixa"
      },
      {
        "Segmento": "B",
        "pct_ApenasRedeMovel": 1.59,
        "pct_ApenasWiFi": 8.64,
        "pct_Ambos": 89.51,
        "pct_Indeterminado": 0.25,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "C",
        "pct_ApenasRedeMovel": 4.04,
        "pct_ApenasWiFi": 20.75,
        "pct_Ambos": 74.97,
        "pct_Indeterminado": 0.24,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "DE",
        "pct_ApenasRedeMovel": 6.02,
        "pct_ApenasWiFi": 36.9,
        "pct_Ambos": 56.72,
        "pct_Indeterminado": 0.37,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Na força de trabalho",
        "pct_ApenasRedeMovel": 3.04,
        "pct_ApenasWiFi": 15.27,
        "pct_Ambos": 81.43,
        "pct_Indeterminado": 0.27,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Fora da força de trabalho",
        "pct_ApenasRedeMovel": 5.7,
        "pct_ApenasWiFi": 34.65,
        "pct_Ambos": 59.36,
        "pct_Indeterminado": 0.29,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      },
      {
        "Segmento": "Formal",
        "pct_ApenasRedeMovel": 2.67,
        "pct_ApenasWiFi": 9.36,
        "pct_Ambos": 87.75,
        "pct_Indeterminado": 0.23,
        "Flags": "A4",
        "Classe": "Observação"
      },
      {
        "Segmento": "Informal",
        "pct_ApenasRedeMovel": 3.56,
        "pct_ApenasWiFi": 19.64,
        "pct_Ambos": 76.43,
        "pct_Indeterminado": 0.36,
        "Flags": "A3,A4",
        "Classe": "Média"
      },
      {
        "Segmento": "Não se Aplica",
        "pct_ApenasRedeMovel": 5.35,
        "pct_ApenasWiFi": 34.21,
        "pct_Ambos": 60.17,
        "pct_Indeterminado": 0.26,
        "Flags": "A1,A2,A3,A4",
        "Classe": "Alta"
      }
    ]
  }
};
