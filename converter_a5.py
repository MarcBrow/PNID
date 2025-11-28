import pandas as pd
import json

def split_flags(val):
    if isinstance(val, str) and val.strip():
        return [f.strip() for f in val.split(",")]
    return []

def main():
    df = pd.read_excel("A5.xlsx")

    df2 = df.rename(columns={
        "Segmento": "segmento",
        "pct_CaboFibra": "pctCaboFibra",
        "pct_RadioSatDSLDisc": "pctRadioSatDslDisc",
        "pct_ModemChipMovel": "pctModemChipMovel",
        "pct_NSabe_NResp": "pctNaoSabeNaoRespondeu",
        "Flags": "flags",
        "Classe": "classe"
    })

    df2 = df2[[
        "segmento",
        "pctCaboFibra",
        "pctRadioSatDslDisc",
        "pctModemChipMovel",
        "pctNaoSabeNaoRespondeu",
        "flags",
        "classe"
    ]]

    records = []
    for _, row in df2.iterrows():
        records.append({
            "segmento": row["segmento"],
            "pctCaboFibra": float(row["pctCaboFibra"]),
            "pctRadioSatDslDisc": float(row["pctRadioSatDslDisc"]),
            "pctModemChipMovel": float(row["pctModemChipMovel"]),
            "pctNaoSabeNaoRespondeu": float(row["pctNaoSabeNaoRespondeu"]),
            "flags": split_flags(row["flags"]),
            "classe": row["classe"] if isinstance(row["classe"], str) else ""
        })

    with open("a5.json", "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

    print("Gerado a5.json com", len(records), "registros.")

if __name__ == "__main__":
    main()
