import gspread

CODE="1B7huX51Ta8nyxYw-Jh04GUSzlhJTezBP6XcpHvErwx4"
gc = gspread.service_account(filename='key.json')
sheet = gc.open_by_key(CODE)

caminho = "Página1"
excel = sheet.worksheet(caminho)


len_semestre1=len(excel.col_values(2))
len_semestre2=len(excel.col_values(5))
len_semestre3=len(excel.col_values(8))

print(len_semestre1,len_semestre2,len_semestre3)