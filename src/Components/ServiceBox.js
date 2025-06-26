import {Col, Row} from "react-bootstrap"

export default function ServiceBox({image, title, description}) {
    return (
        <>
        <Row>
        <div id="service-box">
            <Col>
            <div id="service-box-image">
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
            </Col>
            <Col>
                <div id="service-box-description" style={{fontSize : '2.3vw'}}>{description}</div>
            </Col>
        </div>
        </Row>
        </>
    )
}