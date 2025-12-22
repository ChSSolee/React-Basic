import { useParams } from "react-router";

export default function Team() {
    const params = useParams();
    return (
        <>
            <h1>Team {params.teamId} | Group {params.groupId}</h1>
            <title>
                {`Team ${params.teamId} | Group ${params.groupId}`}
            </title>
        </>
    )
}