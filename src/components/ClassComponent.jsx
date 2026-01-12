import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: "Product Details",
            Name: "Samsung TV",
            Price: 65737.88,
            Stock: true,
            Cities: ["Delhi", "Hyderabad"],
            Rating: { rate: 4.5, count: 6700 }
        }
    }

    render() {
        return (
            <>
                <h1>ClassComponent</h1>
                <div className="container-fluid">
                    <h2>{this.state.Title}</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{this.state.Name}</dd>
                        <dt>Price</dt>
                        <dd>{this.state.Price}</dd>
                        <dt>Stock</dt>
                        <dd>{(this.state.Stock == true) ? "Available" : "Out of Stock"}</dd>
                        <dt>Cities</dt>
                        <dd>
                            <ol>
                                {
                                    this.state.Cities.map(city =>
                                        <li key={city}>{city}</li>
                                    )
                                }
                            </ol>
                            <dd>
                                <span className="bi bi-star-fill text-success"></span>{this.state.Rating.rate} [{this.state.Rating.count}]
                            </dd>
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
}