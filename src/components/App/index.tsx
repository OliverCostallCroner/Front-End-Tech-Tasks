import { useEffect, useState } from "react"
import { absence } from "../../lib/types";

export const App = () => {
    const [data, setData] = useState<absence[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(data.length == 0){
            fetch("/api/absences")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false);
            })
        }
    },[])

    return(
        <p className="test-text">test - App</p>
    )
}