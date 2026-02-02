from sqlalchemy.orm import Session
from . import models, schemas
from sqlalchemy.exc import IntegrityError

# -------- Employees --------
def create_employee(db: Session, employee: schemas.EmployeeCreate):
    emp = models.Employee(**employee.dict())
    db.add(emp)
    try:
        db.commit()
        db.refresh(emp)
        return emp
    except IntegrityError:
        db.rollback()
        return None


def get_employees(db: Session):
    return db.query(models.Employee).all()


def delete_employee(db: Session, employee_id: str):
    emp = db.query(models.Employee).filter(models.Employee.employee_id == employee_id).first()
    if emp:
        db.delete(emp)
        db.commit()
        return True
    return False


# -------- Attendance --------
def mark_attendance(db: Session, attendance: schemas.AttendanceCreate):
    employee = db.query(models.Employee).filter(
        models.Employee.employee_id == attendance.employee_id
    ).first()

    if not employee:
        return "EMPLOYEE_NOT_FOUND"

    record = models.Attendance(**attendance.dict())
    db.add(record)

    try:
        db.commit()
        return record
    except IntegrityError:
        db.rollback()
        return None

    record = models.Attendance(**attendance.dict())
    db.add(record)
    try:
        db.commit()
        return record
    except IntegrityError:
        db.rollback()
        return None


def get_attendance(db: Session, employee_id: str):
    return db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()
