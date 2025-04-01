export default function ServiceBox({image, title, description}) {
    return (
        <>
        <div className="service-box">
            <div className="service-box-image">
                <img src={image} alt="Service" style={{
                    width: '20vw',
                    height: '20vw',
                    objectFit: 'cover',
                    borderRadius: '500px'
                    }}></img>
                <h2 style={{
                    paddingTop: '1vw',
                    fontSize : '4vw'
                }}>{title}</h2>
            </div>
            <div className="service-box-description" style={{fontSize : '3vw'}}>{description}</div>
        </div>
        </>
    )
}