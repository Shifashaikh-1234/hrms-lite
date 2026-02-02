from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine
from . import models
from .routers import employees, attendance

# Create DB tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="HRMS Lite API")

# ---------------- CORS CONFIG ----------------
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    # add your Vercel URL later
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --------------------------------------------

app.include_router(employees.router)
app.include_router(attendance.router)

@app.get("/")
def root():
    return {"message": "HRMS Lite Backend Running"}
