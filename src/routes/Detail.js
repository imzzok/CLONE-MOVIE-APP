import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams();
    const getMocie = async () => {
        const json = await (
            await fetch(`http://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
useEffect(() => {
    getMocie();
}, [])
return <h1>Detail</h1>
}
export default Detail;