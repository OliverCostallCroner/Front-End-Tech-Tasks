import { absence } from "../../lib/types";

export const AbsenceTable = ({data} : {data : absence[]}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Start Date</th>
                    <th>Days</th>
                    <th>Absence Type</th>
                    <th>Approved</th>
                </tr>
            </thead>
            <tbody>
                {data.map((absence) => (
                    <tr key={`absence-${absence.id}`}>
                        <td>{absence.employee.firstName + " " + absence.employee.lastName}</td>
                        <td>{absence.startDate}</td>
                        <td>{absence.days}</td>
                        <td>{absence.absenceType}</td>
                        <td>{absence.approved ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}