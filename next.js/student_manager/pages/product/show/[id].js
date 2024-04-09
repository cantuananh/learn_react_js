import {useRouter} from "next/router";

export default function Product() {
    const route = useRouter();

    const {id} = route.query


    return (
        <>
            <div>
                <h1>Show detail product.</h1>
                <p>Id product: {id}</p>

            </div>
        </>
    );
}