import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    let { categoryId } = useParams();
    console.log(categoryId)

    return (
        <div>
            <h3>Id selected: {categoryId} </h3>
            <h3>Id selected: {categoryId} </h3>
            <h3>Id selected: {categoryId} </h3>
            <h3>Id selected: {categoryId} </h3>
            <h3>Id selected: {categoryId} </h3>
        </div>
    );
}

export default Product;
