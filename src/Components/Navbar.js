
export default function Navbar() {
    return (
        <nav className="nav">
            <a href = "/" className = "site-title">Jones Pinnacle</a>
            <ul>
                <li>
                    <a href = "/about">About</a>
                </li>
                <li>
                    <a href = "/team">Team</a>
                </li>
                <li>
                    <a href = "/contact">Contact Us</a>
                </li>
                <li>
                    <a href = "/signup">Sign up</a>
                </li>
            </ul>
        </nav>
    )
}