import {Nav, Navbar} from 'react-bootstrap';

export default function MyNav({topOfPageBool}) {
    let toggle;
    if (topOfPageBool==="true") {
        toggle = <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary text-white">
            <Navbar.Brand href="/" className="ms-3">
                <img
                src="/images/JPC.png"
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="JPC Logo"
                />
            </Navbar.Brand>
            {toggle}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-3 fs-4 text-white">
                <Nav.Link href="/" className="ms-3 text-white">Home</Nav.Link>
                <Nav.Link href="/about" className="ms-3 text-white">About</Nav.Link>
                <Nav.Link href="/team" className="ms-3 text-white">Team</Nav.Link>
                <Nav.Link href="/contact" className="ms-3 text-white">Contact</Nav.Link>
                <Nav.Link href="/signup" className="ms-3 text-white">Signup</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}