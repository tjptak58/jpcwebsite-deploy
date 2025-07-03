import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PageHeader from "../Components/pageHeader"
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function TeamMember() {
    const {memberId} = useParams();
    //fetch the description,image, and Name
    const [member, setMember] = useState();

    useEffect(() => {
        if (!memberId) return;
        
        //get the description
        fetch("/employees/info.txt")
            .then(response => response.text()) // Convert response to text
            .then(data => {
                const members = data.split("\n").map(line => {
                    const [id, name, title, image, description] = line.split("|").map(field => field.trim());
                    return { id, name, title, image, description };
                }); 

                const foundMember = members.find(m => m.id === memberId);
                setMember(foundMember || {}); // Store found member
            }) // Store in state
            .catch(error => console.error("Error reading file:", error));
        },[memberId]);
            
        if (!member) return <p>Loading...</p>;  
        if (!member.name) return <p>Member not found.</p>;

    return (
        <>
        <PageHeader title={member.name}/>
        <Container>
            <Row className="pt-4 pb-4">
                <Col xs={4}>
                    <Image src={member.image} fluid rounded/>
                </Col>
                <Col xs={8}>
                    <p>{member.description}</p> 
                </Col>
            </Row>
        </Container>
        
        </>
    )
}