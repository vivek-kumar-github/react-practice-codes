function DataBindingComponent1() {
    let Product = {
        Name: "Samsung TV",
        Price: 45005.45,
        Stock: false
    }
    return (
        <>
            <h1>DataBindingComponent1</h1>
            <div className="container">
                <h2>Product Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{Product.Name}</dd>
                    <dd><input type="text" value={Product.Name}></input></dd>
                    <dt>Price</dt>
                    <dd>{Product.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(Product.Stock == true) ? "Availabe" : "Out of Stock"}</dd>
                </dl>
            </div>
            <hr />
        </>
    )
}

export default DataBindingComponent1