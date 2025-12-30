function DataBindingNestedComponent() {
    const menu = [
        {Category : "Electronics", Products : ["Samsung TV", "Mobile"]},
        {Category : "Footwear", Products : ["Nike Casuals", "Lee Boot"]}
    ]
    return (
        <>
            <h1>DataBindingNestedComponent</h1>
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map(item =>
                        <li key={item.Category}>{item.Category}
                            <ul>
                                {
                                    item.Products.map(product =>
                                        <li key={product}>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select a Product</h2>
            <select>
                {
                    menu.map(item =>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product =>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
        </>
    )
}

export default DataBindingNestedComponent