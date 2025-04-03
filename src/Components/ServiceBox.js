export default function ServiceBox({image, title, description}) {
    return (
        <>
        <div className="service-box">
            <div className="service-box-image">
                <img src={image} alt="Service" style={{
                    width: '15vw',
                    height: '15vw',
                    objectFit: 'cover',
                    borderRadius: '500px'
                    }}></img>
                <h2 style={{
                    paddingTop: '1vw',
                    fontSize : '3vw'
                }}>{title}</h2>
            </div>
            <div className="service-box-description" style={{fontSize : '2.3vw'}}>{description}</div>
        </div>
        </>
    )
}