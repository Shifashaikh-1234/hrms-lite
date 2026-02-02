from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from .. import crud, schemas, models

router = APIRouter(prefix="/employees", tags=["Employees"])

@router.post("/", response_model=schemas.EmployeeResponse, status_code=201)
def add_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    emp = crud.create_employee(db, employee)
    if not emp:
        raise HTTPException(status_code=400, detail="Employee already exists")
    return emp


@router.get("/", response_model=list[schemas.EmployeeResponse])
def list_employees(db: Session = Depends(get_db)):
    return crud.get_employees(db)


@router.delete("/{employee_id}")
def remove_employee(employee_id: str, db: Session = Depends(get_db)):
    if not crud.delete_employee(db, employee_id):
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"message": "Employee deleted"}

@router.get("/summary")
def dashboard_summary(db: Session = Depends(get_db)):
    total_employees = db.query(models.Employee).count()
    total_attendance = db.query(models.Attendance).count()
    present_today = db.query(models.Attendance).filter(
        models.Attendance.status == "Present"
    ).count()

    return {
        "total_employees": total_employees,
        "total_attendance": total_attendance,
        "present_today": present_today
    }

@router.get("/{employee_id}/present-days")
def present_days(employee_id: str, db: Session = Depends(get_db)):
    count = db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id,
        models.Attendance.status == "Present"
    ).count()

    return {"present_days": count}
