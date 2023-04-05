import gspread

CODE="1B7huX51Ta8nyxYw-Jh04GUSzlhJTezBP6XcpHvErwx4"
gc = gspread.service_account(filename='key.json')
sheet = gc.open_by_key(CODE)

caminho = "Obrigatórias"
excel = sheet.worksheet(caminho)


len_semestre1=len(excel.col_values(2))
len_semestre2=len(excel.col_values(5))
len_semestre3=len(excel.col_values(8))

s1 = excel.get(f'B3:C{len_semestre1}')
s2 = excel.get(f'E3:F{len_semestre2}')
s3 = excel.get(f'H3:I{len_semestre3}')


        
    