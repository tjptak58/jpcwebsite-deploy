import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PageHeader from "../Components/pageHeader"
import {Container, Form} from "react-bootstrap"

export default function Signup() {
    const form = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(form.current);
    const selectedTrades = data.getAll("trades").join(", ");
    // inject joined trades into hidden field before send
    form.current.querySelector("input[name='trades']").value = selectedTrades;

    emailjs
    .sendForm(
        "service_ic20taq",   // from EmailJS dashboard
        "template_9ckgxpj",  // from EmailJS dashboard
        form.current,
        {
        publicKey: "OzTzzCUZdhg1fKpWV", // from EmailJS account
        }
    )
    .then(
        () => {
        console.log("SUCCESS!");
        alert("Form submitted successfully!");
        },
        (error) => {
        console.log("FAILED...", error.text);
        alert("Something went wrong, try again.");
        }
    );

    //window.location.href = "/";
    };

    return (
        <>
        <PageHeader title="Contractor Sign-Up"/>
        <Container id="contractor-form">
            <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="businessName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" name = "businessName" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="businessOwner">
                    <Form.Label>Business Owner</Form.Label>
                    <Form.Control type="text" name="businessOwner" placeholder="Enter Owner"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="businessAddress">
                    <Form.Label>Business Address</Form.Label>
                    <Form.Control type="text" name="businessAddress" placeholder="Enter Address"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="apt">
                    <Form.Label>Apartment,suite,etc</Form.Label>
                    <Form.Control type="text" name="apt" placeholder="Enter Apt"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" placeholder="Enter City"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="state">
                    <Form.Label>State/Province</Form.Label>
                    <Form.Control type="text" name="state" placeholder="Enter State/Province"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="zip">
                    <Form.Label>ZIP / Postal Code</Form.Label>
                    <Form.Control type="text" name="zip" placeholder="Enter ZIP/Postal Code"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Business Phone</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Enter Phone #"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Business Email</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Enter Email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="website">
                    <Form.Label>Business Website</Form.Label>
                    <Form.Control type="text"name="website" placeholder="Enter Website"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact-name">
                    <Form.Label>Primary Contact</Form.Label>
                    <Form.Control type="text" name="contact-name" placeholder="Enter Contact"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter Title" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact-email">
                    <Form.Label>Primary Contact Email</Form.Label>
                    <Form.Control type="text" name="contact-email" placeholder="Enter Primary Contact Email" required/>
                </Form.Group>
                <Form.Label>Select Trades</Form.Label>
                <Form.Group className="mb-3" controlId="trades">
                    <Form.Check // prettier-ignore
                    type="checkbox"
                    value="appliance"
                    name="trades"
                    label="Appliance Install / Repair"
                    />
                    <Form.Check
                    type="checkbox"
                    value="cabinets"
                    name="trades"
                    label="Cabinets"
                    />
                    <Form.Check
                    type="checkbox"
                    value="carpenter"
                    name="trades"
                    label="Carpenter"
                    />
                    <Form.Check
                    type="checkbox"
                    value="cleaning"
                    name="trades"
                    label="Cleaning - Interior"
                    />
                    <Form.Check
                    type="checkbox"
                    value="chimney"
                    name="trades"
                    label="Chimney Maintenance / Repair"
                    />
                    <Form.Check
                    type="checkbox"
                    value="concrete"
                    name="trades"
                    label="Concrete"
                    />
                    <Form.Check
                    type="checkbox"
                    value="countertops"
                    name="trades"
                    label="Countertops"
                    />
                    <Form.Check
                    type="checkbox"
                    value="doors"
                    name="trades"
                    label="Doors"
                    />
                    <Form.Check
                    type="checkbox"
                    value="drywall"
                    name="trades"
                    label="Dry Wall Install / Repair"
                    />
                    <Form.Check
                    type="checkbox"
                    value="electrician"
                    name="trades"
                    label="Electrician"
                    />
                    <Form.Check
                    type="checkbox"
                    value="engineering"
                    name="trades"
                    label="Engineering"
                />
                <Form.Check
                    type="checkbox"
                    value="environmental"
                    name="trades"
                    label="Environmental / Asbestos / Abatement"
                />
                <Form.Check
                    type="checkbox"
                    value="estimator"
                    name="trades"
                    label="Estimator"
                />
                <Form.Check
                    type="checkbox"
                    value="flooring"
                    name="trades"
                    label="Flooring"
                />
                <Form.Check
                    type="checkbox"
                    value="foundation"
                    name="trades"
                    label="Foundation Repair"
                />
                <Form.Check
                    type="checkbox"
                    value="framing"
                    name="trades"
                    label="Framing"
                />
                <Form.Check
                    type="checkbox"
                    value="garage-doors"
                    name="trades"
                    label="Garage Doors"
                />
                <Form.Check
                    type="checkbox"
                    value="general-contractor"
                    name="trades"
                    label="General Contractor"
                />
                <Form.Check
                    type="checkbox"
                    value="general-labor"
                    name="trades"
                    label="General Labor"
                />
                <Form.Check
                    type="checkbox"
                    value="gutters"
                    name="trades"
                    label="Gutter Installation / Repair"
                />
                <Form.Check
                    type="checkbox"
                    value="hvac"
                    name="trades"
                    label="HVAC"
                />
                <Form.Check
                    type="checkbox"
                    value="handyman"
                    name="trades"
                    label="Handyman"
                />
                <Form.Check
                    type="checkbox"
                    value="land-survey"
                    name="trades"
                    label="Land Survey"
                />
                <Form.Check
                    type="checkbox"
                    value="landscaping"
                    name="trades"
                    label="Landscaping"
                />
                <Form.Check
                    type="checkbox"
                    value="maintenance"
                    name="trades"
                    label="Maintenance"
                />
                <Form.Check
                    type="checkbox"
                    value="painter"
                    name="trades"
                    label="Painter"
                />
                <Form.Check
                    type="checkbox"
                    value="pest-control"
                    name="trades"
                    label="Pest Control"
                />
                <Form.Check
                    type="checkbox"
                    value="plumber"
                    name="trades"
                    label="Plumber"
                />
                <Form.Check
                    type="checkbox"
                    value="pool"
                    name="trades"
                    label="Pool Maintenance"
                />
                <Form.Check
                    type="checkbox"
                    value="pressure-washing"
                    name="trades"
                    label="Pressure Washing"
                />
                <Form.Check
                    type="checkbox"
                    value="remediation"
                    name="trades"
                    label="Remediation"
                />
                <Form.Check
                    type="checkbox"
                    value="roofer"
                    name="trades"
                    label="Roofer"
                />
                <Form.Check
                    type="checkbox"
                    value="septic"
                    name="trades"
                    label="Septic"
                />
                <Form.Check
                    type="checkbox"
                    value="supplier"
                    name="trades"
                    label="Supplier"
                />
                <Form.Check
                    type="checkbox"
                    value="tile"
                    name="trades"
                    label="Tile Installer"
                />
                <Form.Check
                    type="checkbox"
                    value="water-proofing"
                    name="trades"
                    label="Water Proofing"
                />
                <Form.Check
                    type="checkbox"
                    value="well-treatment"
                    name="trades"
                    label="Well Treatment"
                />
                <Form.Check
                    type="checkbox"
                    value="windows"
                    name="trades"
                    label="Windows"
                />
                <input type="hidden" name="trades" />
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </Container>
        </>
    )
}