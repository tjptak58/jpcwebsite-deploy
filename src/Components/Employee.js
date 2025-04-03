import {Button} from 'react-bootstrap';

export default function Employee({name, image, id, title}) {
    return ( 
        <>
        <div className="team-box">
            <div className="team-box-image">
                <img src={image} alt="Service" style={{
                    width: '35vw',
                    height: '35vw',
                    objectFit: 'cover',
                    borderRadius: '500px'
                    }}></img>
            </div>
            <div className="team-box-description">
                <h2 style={{
                    paddingTop: '1vw',
                    fontSize : '6vw'
                }}>{name}</h2>
                <h3 style={{
                    paddingTop: '1vw',
                    paddingBottom: '1vw',
                    fontSize : '3vw'
                }}>
                    {title}
                </h3>
                <Button variant="primary" href={`/team/${id}`} className="teamButton">About Me</Button>
            </div>
        </div>
        </>
    )
}