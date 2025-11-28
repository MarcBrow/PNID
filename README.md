# Visualização dos Alertas A5

Este projeto mostra uma tabela interativa com os segmentos e alertas do indicador A5,
a partir de um arquivo JSON (`a5.json`) gerado com base na planilha `A5.xlsx`.

## Arquivos

- `index.html` – página principal com o layout e a tabela.
- `script.js` – código JavaScript que carrega `a5.json`, cria os filtros e renderiza a tabela.
- `a5.json` – dados já convertidos da planilha A5.
- `converter_a5.py` – script em Python para converter `A5.xlsx` em `a5.json`.

## Como testar localmente

1. Instale o Python (se ainda não tiver).
2. Coloque `A5.xlsx` na mesma pasta destes arquivos (se quiser regerar o JSON).
3. Opcional: rode `python converter_a5.py` para gerar um novo `a5.json`.
4. Inicie um servidor simples:

   ```bash
   python -m http.server 8000
   ```

5. Abra no navegador: `http://localhost:8000/index.html`.

## Como usar no GitHub Pages

1. Crie um repositório no GitHub e envie todos estes arquivos para a raiz do repositório.
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, selecione **Deploy from a branch**, escolha o branch (`main`) e a pasta raiz (`/`). Salve.
4. Acesse a URL gerada, algo como:

   ```
   https://seu-usuario.github.io/nome-do-repositorio/
   ```

A página `index.html` será carregada e a tabela interativa estará disponível.
