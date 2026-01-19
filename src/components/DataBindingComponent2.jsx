function DataBindingComponent2() {
    const categories = ["All", "Electronics", "Footwear", "Fashion"]
    return (
        <>
            <h1>DataBindingComponent2</h1>
            <div className="container-fluid">
                <h2>Categories</h2>
                <ol>
                    {
                        categories.map(category =>
                            <li key={category}>{category}</li>
                        )
                    }
                </ol>
                <h2>Select Category</h2>
                <select>
                    {
                        categories.map(category =>
                            <option key={category} value={category}>{category}</option>
                        )
                    }
                </select>
            </div>
            <hr />
        </>
    )
}

export default DataBindingComponent2