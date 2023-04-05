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
   
    s1 = banco.excel.get(f'B3:C{banco.len_semestre1}')
    s2 = banco.excel.get(f'E3:F{banco.len_semestre2}')
    s3 = banco.excel.get(f'H3:I{banco.len_semestre3}')


    return (s1,s2,s3)
    


