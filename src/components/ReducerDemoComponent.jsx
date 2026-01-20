import { useEffect, useReducer, useState } from "react";

let initialState = { likes: 0, dislikes: 0 }

function reducer(state, action) {
    switch (action.type) {
        case "like":
            return { likes: state.likes + 1, dislikes: state.dislikes }
        case "dislike":
            return { dislikes: state.dislikes + 1, likes: state.likes }
    }
}

export default function ReducerDemoComponent() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/2")
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <div className="container-fluid">
            <h1>ReducerDemoComponent</h1>
            <div className="card p-2" style={{ width: "250px" }}>
                <img src={product.image} className="card-img-top" height="160" />
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
                <div className="card-footer">
                    [{state.likes}]<button className="btn btn-primary" onClick={() => { dispatch({ type: "like" }) }}><span className="bi bi-hand-thumbs-up"></span>Like</button>
                    [{state.dislikes}]<button className="btn btn-danger" onClick={() => { dispatch({ type: "dislike" }) }}> <span className="bi bi-hand-thumbs-down"></span>Dislike</button>
                </div>
            </div>
            <hr />
        </div>
    )
}