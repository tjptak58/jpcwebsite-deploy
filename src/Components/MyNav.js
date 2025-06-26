import {Nav, Navbar} from 'react-bootstrap';

export default function MyNav({topOfPageBool}) {
    let toggle;
    let codes;
    if (topOfPageBool==="true") {
        toggle = <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
    } else {
        codes = <>
        <Navbar.Brand className="ms-auto">
            <img
            src="/images/svosb.jpg"
            width="60vw"
            height="60vw"
            className="d-inline-block align-top"
            alt="JPC Logo"
            />
        </Navbar.Brand>
        </>
        
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary text-white px-2 py-2">
            <Navbar.Brand href="/" className="ms-3">
                <img
                src="/images/JPC.png"
                width="50"
                height="50"
                className="d-inline-block align-top img-fluid"
                alt="JPC Logo"
                />
            </Navbar.Brand>
            {toggle}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-3 fs-4 text-white">
                <Nav.Link href="/" className="ms-3 text-white">Home</Nav.Link>
                <Nav.Link href="/about" className="ms-3 text-white">About</Nav.Link>
                <Nav.Link href="/team" className="ms-3 text-white">Team</Nav.Link>
                <Nav.Link href="/signup" className="ms-3 text-white">Signup</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            {codes}
        </Navbar>
    )
}