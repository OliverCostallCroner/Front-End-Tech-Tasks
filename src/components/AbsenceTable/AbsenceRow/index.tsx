import { useEffect, useState } from "react";
import { absence } from "../../../lib/types"
import { FormatDate } from "../../../lib/utils/formatDate"

export const AbsenceRow = ({absence} : {absence : absence}) => {
    const [conflict, setConflict] = useState<boolean>(false);

    useEffect(() => {
            fetch(`/api/conflict/${absence.id}`)
            .then((res) => res.json())
            .then((data) => {
                setConflict(data.conflicts);
            })
    },[])
    return(
        <tr key={`absence-${absence.id}`}>
            <td>{absence.employee.firstName + " " + absence.employee.lastName}</td>
            <td>{FormatDate(absence.startDate)}</td>
            <td>{absence.days}</td>
            <td>{absence.absenceType}</td>
            <td>{absence.approved ? "Approved" : "Pending Approval"}</td>
            <td>{conflict ? "Conflicted" : "No conflict"}</td>
        </tr>
    )
}