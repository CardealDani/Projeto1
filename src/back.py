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

def semestre1():
    primeiro_semestre = banco.excel.get(f'B3:B{banco.len_semestre1}')
    segundo_semestre = banco.excel.get(f'E3:E{banco.len_semestre2}')
    terceiro_semestre = banco.excel.get(f'H3:H{banco.len_semestre3}')
    return (primeiro_semestre,segundo_semestre,terceiro_semestre)
    


