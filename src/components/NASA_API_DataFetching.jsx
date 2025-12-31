import { useState, useEffect } from 'react'
function NASA_API_DataFetching() {
    const [mars, setMars] = useState(null)

    useEffect(() => {
        fetch("DEMO_KEY")
            .then(response => response.json())
            .then(data => {
                setMars(data)
            })
    }, [])

    return (
        <>
            <div className="container">
                <h2>Mars Photos</h2>
                <div className="d-flex flex-wrap">
                    {
                        mars.photos.map(photo =>
                            <div  className="card p-2 m-2 w-25">
                                <img src={photo.img_src} className="card-img-top" height="100" />
                                <div className="card-header">
                                    <h3>{photo.camera.full_name}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{photo.rover.name}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NASA_API_DataFetching