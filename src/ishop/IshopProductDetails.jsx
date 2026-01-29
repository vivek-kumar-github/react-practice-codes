import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

export default function IshopProductDetails() {

    const [product, setProduct] = useState(null)
    let params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/getproduct/${params.id}`)
            .then(response => {
                setProduct(response.data[0])
            })
    }, [params.id])

    if (product === null) {
        return (
            <div className="container p-5 text-center">
                <div className="spinner-border text-primary"></div>
                <p>Loading Product Details...</p>
            </div>
        )
    }

    return (
        <>
            <div>
                <h2>Product details</h2>
                <dl>
                    <dt>Title</dt>
                    <dd>{product.title}</dd>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Preview</dt>
                    <dd>
                        <img src={product.image} width="150" height="150" />
                    </dd>
                    <dt>Rating</dt>
                    <dd>{product.rating.rate}</dd>
                </dl>
                <br />
                <Link to={"/products/" + product.category}>Back to Products</Link>
            </div>
        </>
    )
}