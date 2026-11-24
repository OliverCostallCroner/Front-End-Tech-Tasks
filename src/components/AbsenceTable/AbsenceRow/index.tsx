import { absence } from "../../../lib/types"

export const AbsenceRow = ({absence} : {absence : absence}) => {
    return(
        <tr key={`absence-${absence.id}`}>
            <td>{absence.employee.firstName + " " + absence.employee.lastName}</td>
            <td>{absence.startDate}</td>
            <td>{absence.days}</td>
            <td>{absence.absenceType}</td>
            <td>{absence.approved ? "Yes" : "No"}</td>
        </tr>
    )
}