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
    primeiro_semestre = sum(banco.s1,[])
    segundo_semestre = sum(banco.s2,[])
    terceiro_semestre = sum(banco.s3,[])


    return (primeiro_semestre,segundo_semestre,terceiro_semestre)
    


