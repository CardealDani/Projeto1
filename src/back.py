from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import banco


app = FastAPI()


origins = ['http://127.0.0.1:5500']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')


def obrigatorias():
   
    s1 = banco.excel.get(f'B3:C{banco.len_semestre1}')
    s2 = banco.excel.get(f'E3:F{banco.len_semestre2}')
    s3 = banco.excel.get(f'H3:I{banco.len_semestre3}')
    s4 = banco.excel.get(f'K3:L{banco.len_semestre4}')
    s6 = banco.excel.get(f'N3:O{banco.len_semestre6}')
    s7 = banco.excel.get(f'Q3:R{banco.len_semestre7}')
    s8 = banco.excel.get(f'T3:U{banco.len_semestre8}')

    return (s1,s2,s3,s4,s6,s7,s8)
    

