export type absenceType = (
    "ANNUAL_LEAVE"
    | "COMPASSIONATE_LEAVE"
    | "FAMILY"
    | "MEDICAL"
    | "SICKNESS" 
)

export type employee = {
    firstName: string;
    lastName: string;
    id: string;
}

export type absence = {
    id: number;
    startDate: string;
    days: number;
    absenceType: absenceType;
    employee: employee;
    approved: boolean;
}