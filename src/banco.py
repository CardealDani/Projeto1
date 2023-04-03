import gspread

CODE="1B7huX51Ta8nyxYw-Jh04GUSzlhJTezBP6XcpHvErwx4"
gc = gspread.service_account(filename=r'C:\Users\aluno\PycharmProjects\pythonProject\Primeiro-teste-BACK-END-main\teste1\key.json')
sheet = gc.open_by_key(CODE)

caminho = r'Página1'
excel = sheet.worksheet(caminho)


