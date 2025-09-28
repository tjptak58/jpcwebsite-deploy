import PageHeader from "../Components/pageHeader"
import {Container, Form, Button} from "react-bootstrap"

export default function Signup() {

    const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());

    console.log("All fields:", values);
    console.log("Selected trades:", data.getAll("trades"));

    window.location.href = "/";
    };

    return (
        <>
        <PageHeader title="Contractor Sign-Up"/>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="businessName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" name = "businessName" placeholder="Enter name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="businessOwner">
                    <Form.Label>Business Owner</Form.Label>
                    <Form.Control type="text" name="businessOwner" placeholder="Enter Owner"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="businessAddress">
                    <Form.Label>Business Owner</Form.Label>
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
                    <Form.Control type="text" name="title" placeholder="Enter Title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact-email">
                    <Form.Label>Primary Contact Email</Form.Label>
                    <Form.Control type="text" name="contact-email" placeholder="Enter Primary Contact Email"/>
                </Form.Group>
                <Form.Label>Select Trades</Form.Label>
                <Form.Group className="mb-3" controlId="trades">
                    <Form.Check // prettier-ignore
                    type="checkbox"
                    id="appliance"
                    name="appliance"
                    label="Appliance Install / Repair"
                    />
                    <Form.Check
                    type="checkbox"
                    id="cabinets"
                    name="cabinets"
                    label="Cabinets"
                    />
                    <Form.Check
                    type="checkbox"
                    id="carpenter"
                    name="carpenter"
                    label="Carpenter"
                    />
                    <Form.Check
                    type="checkbox"
                    id="cleaning"
                    name="cleaning"
                    label="Cleaning - Interior"
                    />
                    <Form.Check
                    type="checkbox"
                    id="chimney"
                    name="chimney"
                    label="Chimney Maintenance / Repair"
                    />
                    <Form.Check
                    type="checkbox"
                    id="concrete"
                    name="concrete"
                    label="Concrete"
                    />
                    <Form.Check
                    type="checkbox"
                    id="countertops"
                    name="countertops"
                    label="Countertops"
                    />
                    <Form.Check
                    type="checkbox"
                    id="doors"
                    name="doors"
                    label="Doors"
                    />
                    <Form.Check
                    type="checkbox"
                    id="drywall"
                    name="drywall"
                    label="Dry Wall Install / Repair"
                    />
                    <Form.Check
                    type="checkbox"
                    id="electrician"
                    name="electrician"
                    label="Electrician"
                    />
                    <Form.Check
                    type="checkbox"
                    id="engineering"
                    name="engineering"
                    label="Engineering"
                />
                <Form.Check
                    type="checkbox"
                    id="environmental"
                    name="environmental"
                    label="Environmental / Asbestos / Abatement"
                />
                <Form.Check
                    type="checkbox"
                    id="estimator"
                    name="estimator"
                    label="Estimator"
                />
                <Form.Check
                    type="checkbox"
                    id="flooring"
                    name="flooring"
                    label="Flooring"
                />
                <Form.Check
                    type="checkbox"
                    id="foundation"
                    name="foundation"
                    label="Foundation Repair"
                />
                <Form.Check
                    type="checkbox"
                    id="framing"
                    name="framing"
                    label="Framing"
                />
                <Form.Check
                    type="checkbox"
                    id="garage-doors"
                    name="garage-doors"
                    label="Garage Doors"
                />
                <Form.Check
                    type="checkbox"
                    id="general-contractor"
                    name="general-contractor"
                    label="General Contractor"
                />
                <Form.Check
                    type="checkbox"
                    id="general-labor"
                    name="general-labor"
                    label="General Labor"
                />
                <Form.Check
                    type="checkbox"
                    id="gutters"
                    name="gutters"
                    label="Gutter Installation / Repair"
                />
                <Form.Check
                    type="checkbox"
                    id="hvac"
                    name="hvac"
                    label="HVAC"
                />
                <Form.Check
                    type="checkbox"
                    id="handyman"
                    name="handyman"
                    label="Handyman"
                />
                <Form.Check
                    type="checkbox"
                    id="land-survey"
                    name="land-survey"
                    label="Land Survey"
                />
                <Form.Check
                    type="checkbox"
                    id="landscaping"
                    name="landscaping"
                    label="Landscaping"
                />
                <Form.Check
                    type="checkbox"
                    id="maintenance"
                    name="maintenance"
                    label="Maintenance"
                />
                <Form.Check
                    type="checkbox"
                    id="painter"
                    name="painter"
                    label="Painter"
                />
                <Form.Check
                    type="checkbox"
                    id="pest-control"
                    name="pest-control"
                    label="Pest Control"
                />
                <Form.Check
                    type="checkbox"
                    id="plumber"
                    name="plumber"
                    label="Plumber"
                />
                <Form.Check
                    type="checkbox"
                    id="pool"
                    name="pool"
                    label="Pool Maintenance"
                />
                <Form.Check
                    type="checkbox"
                    id="pressure-washing"
                    name="pressure-washing"
                    label="Pressure Washing"
                />
                <Form.Check
                    type="checkbox"
                    id="remediation"
                    name="remediation"
                    label="Remediation"
                />
                <Form.Check
                    type="checkbox"
                    id="roofer"
                    name="roofer"
                    label="Roofer"
                />
                <Form.Check
                    type="checkbox"
                    id="septic"
                    name="septic"
                    label="Septic"
                />
                <Form.Check
                    type="checkbox"
                    id="supplier"
                    name="supplier"
                    label="Supplier"
                />
                <Form.Check
                    type="checkbox"
                    id="tile"
                    name="tile"
                    label="Tile Installer"
                />
                <Form.Check
                    type="checkbox"
                    id="water-proofing"
                    name="water-proofing"
                    label="Water Proofing"
                />
                <Form.Check
                    type="checkbox"
                    id="well-treatment"
                    name="well-treatment"
                    label="Well Treatment"
                />
                <Form.Check
                    type="checkbox"
                    id="windows"
                    name="windows"
                    label="Windows"
                />
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </Container>
        </>
    )
}