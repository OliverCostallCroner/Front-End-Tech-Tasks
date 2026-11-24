import { absence } from "../../lib/types";
import { AbsenceRow } from "./AbsenceRow";

export const AbsenceTable = ({data} : {data : absence[]}) => {
    return(
        <table className="absence-table">
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Start Date</th>
                    <th>Days</th>
                    <th>Absence Type</th>
                    <th>Status</th>
                    <th>Conflict</th>
                </tr>
            </thead>
            <tbody>
                {data.map((absence) => (
                    <AbsenceRow absence={absence} key={`absence-${absence.id}`}/>
                ))}
            </tbody>
        </table>
    )
}