import PageHeader from "../Components/pageHeader"
import {Container ,Row, Col, Image} from 'react-bootstrap';


export default function About() {
    return (
        <>
        <PageHeader title="About Us"/>
        <Container>
            <Row id="about-us" className="pt-4 pb-4">
                <Col>
                    <Image src="/images/JPC.png" alt="JPC Logo" className="p-3"></Image> 
                    <p>Founded in 2020 by a 12-year U.S. Corps of Engineers veteran, our corporation was built with a foundation in accuracy, durability, and an unending commitment to perfection. With years of hands-on experience in commercial demolition, land clearing, building demolition, and utility line installation trenching operations, we utilize military-grade efficiency and skill in every single job. With a founder with years of background in working and being wholly qualified in all types of heavy machinery, we undertake each job safely, efficiently, and according to schedule.<br></br><br></br>From commercial development locations of any size to utility specialties, we stand out with high-quality work and with the same integrity and discipline with which we served in the military. Clearing for new development, demolishing structures in a safe manner, or trenching for critical infrastructure, we face each challenge with the mission-focused work ethic that sets us apart. With a dedication to providing reliable, expert service with tailor-made solutions designed to respond to our individual clients' requirements, we lay the path for success from the ground level.</p>            
                </Col>
            </Row>
        </Container>
        </>
    )
}