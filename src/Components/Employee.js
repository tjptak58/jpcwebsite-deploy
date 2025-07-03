import {Button, Row, Col, Image} from 'react-bootstrap';

export default function Employee({name, image, id, title}) {
    return ( 
        <>
        <Row id="our-team" className="pt-4 pb-4">
            <Col sm={12} xlg={4} className="pb-4">
                <Image src={image} fluid rounded/>
            </Col>
            <Col sm={12} xlg={8} id="employee">
                <Col className="pb-3">
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                </Col>
                <Col>
                    <Button href={`/team/${id}`} id="teamButton">About Me</Button>
                </Col>
            </Col>
        </Row>
        </>
    )
}