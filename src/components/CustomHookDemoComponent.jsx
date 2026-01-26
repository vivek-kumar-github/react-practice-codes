import { useFetchData } from "../custom_hooks/useFetchData";

export default function CustomHookDemoComponent() {
    const { data } = useFetchData("https://fakestoreapi.com/products")

    return (
        <div className="container-fluid">
            <h1>CustomHookDemoComponent</h1>
            <h3>Products</h3>
            <ol>
                {
                    data.map(product =>
                        <li key={product.title}>{product.title}</li>
                    )
                }
            </ol>
            <hr />
        </div>
    )
}