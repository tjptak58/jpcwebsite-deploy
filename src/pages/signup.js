import PageHeader from "../Components/pageHeader"
import SimpleForm from "../Components/SimpleForm"
import {Container} from "react-bootstrap"

export default function Signup() {
    return (
        <>
        <PageHeader title="Join Our Team"/>
        <Container>
            <SimpleForm />
        </Container>
        </>
    )
}