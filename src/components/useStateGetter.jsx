import {useState} from "react";

function useStateGetter() {
    const [Products, setProducts] = useState(["TV", "Mobile", "Shoe"])
    return (
        <>
            <h1>useStateGetter</h1>
            <div className="container">
                <ol>
                    {
                        Products.map(product =>
                        <li key={product.id}>{product}</li>
                        )
                    }
                </ol>
            </div>
        </>
    )
}

export default useStateGetter