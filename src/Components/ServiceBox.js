import {Col, Row, Image} from "react-bootstrap"

export default function ServiceBox({image, title, description}) {
    return (
        <>
        <Row>
        <div id="service-box">
            <Col className="pb-3 pt-md-2 pb-md-4">
                <Image src={image} fluid roundedCircle/>
            </Col>
            <Col className="pb-md-3">
                <Col className="pb-lg-2">
                    <h3>{title}</h3>
                </Col>
                <Col>
                    <div id="service-box-description">
                        <p>{description}</p>
                    </div>
                </Col>
            </Col>
        </div>
        </Row>
        </>
    )
}