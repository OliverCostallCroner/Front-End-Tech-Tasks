import { useEffect, useState } from "react";
import { absence } from "../../../lib/types"
import { FormatDate } from "../../../lib/utils/formatDate"
import { AddDays } from "../../../lib/utils/addDays";

export const AbsenceRow = ({absence} : {absence : absence}) => {
    const [conflict, setConflict] = useState<boolean>(false);
    const startDate = new Date(absence.startDate);
    const endDate = AddDays(startDate, absence.days)

    useEffect(() => {
            fetch(`/api/conflict/${absence.id}`)
            .then((res) => res.json())
            .then((data) => {
                setConflict(data.conflicts);
            })
    },[])
    return(
        <tr key={`absence-${absence.id}`} className={conflict ? "conflict" : ""}>
            <td>{absence.employee.firstName + " " + absence.employee.lastName}</td>
            <td>{FormatDate(startDate)}</td>
            <td>{FormatDate(endDate)}</td>
            <td>{absence.absenceType}</td>
            <td>{absence.approved ? "Approved" : "Pending Approval"}</td>
            <td>{conflict ? "Conflicted" : "No conflict"}</td>
        </tr>
    )
}