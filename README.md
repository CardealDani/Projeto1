# 👀O QUE É?


# ⚙ CONFIGURAÇÕES
Primeiro, quem utilizar o código, precisa ter esses elementos instalados:

- `PYTHON 3`: Instalar o Python 3 na sua máquina.(Pode ser a extensão do VS Code ou pelo link: https://www.python.org/downloads/)
- `FASTAPI`: Dentro do VS Code, instalar a biblioteca FastApi no terminal com o seguinte código: ```pip install fastApi[all]```
- `UVICORN`: Geralmente ela vem dentro do FastApi, porém, tem casos que não. Basta instalar no terminal assim: ```pip install uvicorn```
- `GSPREAD`: Gspread é a biblioteca do python para leitura de tabelas do google sheets. Instalar assim no terminal: ```pip install gspread```
- `LIVE SERVER`: Para abrir a página HTML, recomendo usar a extesão Live Server


# 🛠️ COMO RODAR?

Para rodar o código, precisa ter todas as configurações ajustadas.
 - 1- Abra o terminal e entre na pasta src dentro da pasta principal : ```cd projeto1-main``` e depois ```cd projeto src```
 - 2- Inicie o servidor com o Uvicorn chamando o arquivo 'back' e o 'app': ```uvicorn back:app --reload```
 - 3- Espere o servidor iniciar com a mensagem : ```INFO:     Application startup complete. ```
 - 4- Abra o arquivo 'index.html', que está dentro da pasta 'public/', com o live server.
