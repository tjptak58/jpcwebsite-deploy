import PageHeader from "../Components/pageHeader"
import ServiceBox from "../Components/ServiceBox"
import {Button, Container ,Row, Col, Image} from 'react-bootstrap';


export default function Home() {
    return (
        <>
            <PageHeader title="Building a Better Future"/>
            <Container>
                <section>
                    <Row id="mission-statement"  className="pt-4 pb-4">
                        <Col lg={1}>
                        </Col>
                        <Col lg={10}>
                            <h2>Our Mission</h2>
                            <br></br>
                            <p>Jones Pinnacle LLC is dedicated to delivering exceptional construction projects that are completed on time and within budget. Our commitment to efficiency and reliability ensures we execute with success from start to finish all while maintaining clear communication and providing responsive service. With integrity, precision, and professionalism, we don’t just build structures; we build long-lasting relationships with our clients.</p>
                        </Col>
                        <Col lg={1}>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row id="our-services" className="pt-4 pb-4">
                        <h2>Our Services</h2>
                        <Col xs={12} lg={4} className="pt-3 pb-3">
                            <ServiceBox title="Commercial Demolition" description={"Strategically dismantling structures to maximize material reuse, minimize waste, and ensure safe and environmentally responsible demolition."} image="images/Demolition.jpg"/>
                        </Col>
                        <Col xs={12} lg={4} className="pt-3 pb-3">
                            <ServiceBox title="Building Deconstruction" description={"Safely and efficiently dismantling commercial structures while minimizing environmental impact, reducing waste, and ensuring regulatory compliance."} image="images/Deconstruction.jpeg"/>
                        </Col>
                        <Col xs={12} lg={4} className="pt-3 pb-3">
                            <ServiceBox title="Trenching Operations" description={"Expertly excavating trenches for utilities, foundations, and drainage systems while ensuring safety, efficiency, and compliance with regulations."} image="images/Trenching.jpg"/>
                        </Col>
                    </Row>
                    <Row id="codes" className="pt-4 pb-4">
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <h2>NAICS Codes</h2>
                            <ul>
                                <li>236100 Residential Building Construction</li>
                                <li>236220 Commercial and Industrial Building</li>
                                <li>238200 Building Equipment Contractors</li>
                                <li>238300 Building Finishing Contractors</li>
                                <li>238910 Site Preparation Contractors</li>
                                <li>237130 Power & Communication Line Related Structures</li>
                                <li>237990 Other Heavy and Civil Engineering Construction</li>
                            </ul>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </section>
                <section>
                        <Row id="meet-team" className="pt-4 pb-4">
                            <Col lg={2}></Col>
                            <Col lg={8}id="meet-team-info">
                                <p>At Jones Pinnacle, our team is the foundation of our success. With years of experience in the construction industry, we bring expertise, dedication, and craftsmanship to every project. From project managers to skilled tradespeople, each member of our team is committed to delivering high-quality results with precision and professionalism.</p>
                                <br></br>
                                <Button href="/team" id="teamButton">Meet Our Team</Button>
                            </Col>
                            <Col lg={2}></Col>
                            
                        </Row>
                </section>
                <section>
                    <Row id="contact-us">
                        <Image src="/images/JPC.png" alt="JPC Logo"></Image>
                        <h4>Contact Us:</h4>
                        <p>Email: info@jonespinnaclecompany.com<br></br>Phone: +1-616-410-5724</p>
                    </Row>
                </section>
            </Container>
        </>
    )
}