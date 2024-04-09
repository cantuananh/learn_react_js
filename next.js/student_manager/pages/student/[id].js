import {useRouter} from "next/router";

 export  default function Student() {
    const route = useRouter();

    const {id} = route.query;

    return (
        <>
            <div>
                <h2>Student info</h2>
                <p>Student: {id}</p>
            </div>
        </>
    );
}