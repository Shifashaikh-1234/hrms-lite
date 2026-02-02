from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from .. import crud, schemas

router = APIRouter(prefix="/attendance", tags=["Attendance"])

@router.post("/", status_code=201)
def mark_attendance(attendance: schemas.AttendanceCreate, db: Session = Depends(get_db)):
    result = crud.mark_attendance(db, attendance)

    if result == "EMPLOYEE_NOT_FOUND":
        raise HTTPException(status_code=404, detail="Employee not found")

    if not result:
        raise HTTPException(status_code=400, detail="Attendance already marked")

    return result



@router.get("/{employee_id}", response_model=list[schemas.AttendanceResponse])
def view_attendance(employee_id: str, db: Session = Depends(get_db)):
    return crud.get_attendance(db, employee_id)
