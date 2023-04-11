from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import banco

class Cadeira(BaseModel):
    disciplina:list


data:List[Cadeira] = []

app = FastAPI()


origins = ['http://127.0.0.1:5500']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)



@app.get('/obrigatorias')
def obrigatorias():

    s1 = banco.excel_obrigatorias.get(f'B3:C{banco.len_semestre1}')
    s2 = banco.excel_obrigatorias.get(f'E3:F{banco.len_semestre2}')
    s3 = banco.excel_obrigatorias.get(f'H3:I{banco.len_semestre3}')
    s4 = banco.excel_obrigatorias.get(f'K3:L{banco.len_semestre4}')
    s6 = banco.excel_obrigatorias.get(f'N3:O{banco.len_semestre6}')
    s7 = banco.excel_obrigatorias.get(f'Q3:R{banco.len_semestre7}')
    s8 = banco.excel_obrigatorias.get(f'T3:U{banco.len_semestre8}')


    return (s1, s2, s3, s4, s6, s7, s8)

@app.get('/eletivas')
def finalizar():
    
    s_e_4 = banco.excel_eletivas.get(f'B3:C{banco.len_semestre4_eletivas}')
    s_e_5 = banco.excel_eletivas.get(f'E3:F{banco.len_semestre5_eletivas}')
    return (data)

@app.post('/obrigatorias')
def postarObrigatorias(cadeira:Cadeira):
    data.append(cadeira)
