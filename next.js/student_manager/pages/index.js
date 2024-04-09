import getStudents from "./mock-data/data";
import Link from "next/link";
import getProducts from "./mock-data/products";

export default function Home({children}) {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link href={"/toolbar/home"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/toolbar/blog"}>Blog</Link>

                    </li>
                    <li>
                        <Link href={"/toolbar/about"}>About</Link>
                    </li>

                    <li>
                        <Link href={"/toolbar/weather"}>Weather</Link>
                    </li>
                </ul>
                <div>
                    <h1>{children}</h1>
                </div>
            </div>



            {/*    <div>*/}
            {/*        <table>*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <td>ID</td>*/}
            {/*                <td>Name</td>*/}
            {/*                <td>Action</td>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {*/}
            {/*                getStudents().map(student => (*/}
            {/*                    <tr key={student.id}>*/}
            {/*                        <td>{student.id}</td>*/}
            {/*                        <td>{student.name}</td>*/}
            {/*                        <td>*/}
            {/*                            <button>Edit</button>*/}
            {/*                            <button>Delete</button>*/}
            {/*                            <Link href={`/student/${encodeURIComponent(student.id)}`}>*/}
            {/*                                <button>Show</button>*/}
            {/*                            </Link>*/}
            {/*                        </td>*/}
            {/*                    </tr>*/}
            {/*                ))*/}
            {/*            }*/}

            {/*            {*/}
            {/*                getProducts().map(product => (*/}
            {/*                    <tr key={product.id}>*/}
            {/*                        <td>{product.id}</td>*/}
            {/*                        <td>{product.name}</td>*/}
            {/*                        <td>*/}
            {/*                            <button>edit</button>*/}
            {/*                            <button>delete</button>*/}
            {/*                            <Link href={`/product/show/${encodeURIComponent(product.id)}`}>*/}
            {/*                                <button>Show</button>*/}
            {/*                            </Link>*/}
            {/*                        </td>*/}

            {/*                    </tr>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*    </div>*/}
        </>
    );
}