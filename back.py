from fastapi import FastAPI, UploadFile, File, Form

from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import banco
import envio_de_email


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],  # ou ['http://seu-dominio.com']
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/obrigatorias')
def obrigatorias():
    obrig = []
    s1 = banco.excel_obrigatorias.get(f'B3:D{banco.len_semestre1}')
    s2 = banco.excel_obrigatorias.get(f'E3:G{banco.len_semestre2}')
    s3 = banco.excel_obrigatorias.get(f'H3:I{banco.len_semestre3}')
    s4 = banco.excel_obrigatorias.get(f'K3:L{banco.len_semestre4}')
    s6 = banco.excel_obrigatorias.get(f'N3:O{banco.len_semestre6}')
    s7 = banco.excel_obrigatorias.get(f'Q3:R{banco.len_semestre7}')
    s8 = banco.excel_obrigatorias.get(f'T3:U{banco.len_semestre8}')
    obrig.extend((s1, s2, s3, s4, s6, s7, s8))

    return obrig


@app.get('/eletivas')
def eletivas():
    elet = []
    s_e_4 = banco.excel_eletivas.get(f'B3:D{banco.len_semestre4_eletivas}')
    s_e_5 = banco.excel_eletivas.get(f'E3:G{banco.len_semestre5_eletivas}')
    elet.extend((s_e_4, s_e_5))
    return elet

@app.get('/optativas')
def optativas():

    optativa = banco.excel_optativas.get(f'B3:C{banco.len_optativas}')
    return optativa


@app.get('/final')
def final():
    return ('Acho que deu bom')


@app.post("/final")
async def upload_pdf(file: UploadFile = File(...), email: str = Form(...), nome: str = Form(...)):


    contents = await file.read()
    with open("document.pdf", "wb") as f:
        f.write(contents)
        
    envio_de_email.enviar_email(nome.title(), email)
    return {"message": "Email Enviado"}
