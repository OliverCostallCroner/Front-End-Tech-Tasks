export type absenceType = (
    "SICKNESS" 
    | "ANNUAL_LEAVE"
    | "MEDICAL"
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