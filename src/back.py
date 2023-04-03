from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import banco


app = FastAPI()

origins = ['http://localhost:63342']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')

def opa():
    teste = banco.excel.col_values(1)
    return teste


