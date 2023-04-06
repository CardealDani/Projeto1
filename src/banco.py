import gspread

CODE = "1B7huX51Ta8nyxYw-Jh04GUSzlhJTezBP6XcpHvErwx4"
gc = gspread.service_account(filename='key.json')
sheet = gc.open_by_key(CODE)

caminho = "Obrigatórias"
excel = sheet.worksheet(caminho)


len_semestre1 = len(excel.col_values(2))
len_semestre2 = len(excel.col_values(5))
len_semestre3 = len(excel.col_values(8))
len_semestre4 = len(excel.col_values(11))
len_semestre6 = len(excel.col_values(14))
len_semestre7 = len(excel.col_values(17))
len_semestre8 = len(excel.col_values(20))
