export default function TeamBox({image, title, description}) {
    return (
        <>
        <div className="team-box">
            <img src={image} alt="Team" style={{
                width: '1vw',
                height: '1vw',
                objectFit: 'cover',
                borderRadius: '500px'
                }}></img>
            <h2 style={{
                fontSize : '30pt'
            }}>{title}</h2>
            <p style={{
                fontSize : '15pt'
            }}>{description}</p>
        </div>
        </>
    )
}