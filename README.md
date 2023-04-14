👀 O QUE É?
Este é um protótipo para o Projeto Integrado I do Curso de Sistemas e Mídias Digitais da UFC! O protótipo é baseado em uma aplicação interativa na qual o aluno seleciona as cadeiras que já cursou no curso de SMD e, no final, recebe um feedback mostrando se pode ou não se formar.

⚙ CONFIGURAÇÕES
Para utilizar o código, é necessário ter os seguintes elementos instalados:

Python 3: Instale o Python 3 na sua máquina. Você pode fazer o download pelo link https://www.python.org/downloads/ ou pela extensão do VS Code.
FastAPI: Dentro do VS Code, instale a biblioteca FastAPI no terminal com o seguinte código: pip install fastapi[all].
UVICORN: O UVICORN geralmente já vem junto com o FastAPI, mas se não estiver instalado, instale-o no terminal com o seguinte código: pip install uvicorn.
Gspread: Gspread é a biblioteca do Python para leitura de tabelas do Google Sheets. Instale-a no terminal com o seguinte código: pip install gspread.
Live Server: Para abrir a página HTML, recomendamos usar a extensão Live Server.
🛠️ COMO RODAR?
Para rodar o código, ajuste todas as configurações necessárias e siga os passos abaixo:

Abra o terminal e navegue até a pasta src dentro da pasta principal com os seguintes comandos: cd projeto1-main e depois cd projeto src.
Inicie o servidor com o Uvicorn chamando os arquivos back e app com o seguinte comando: uvicorn back:app --reload.
Aguarde o servidor iniciar com a mensagem: INFO: Application startup complete.
Abra o arquivo index.html, que está dentro da pasta public/, com o Live Server.
