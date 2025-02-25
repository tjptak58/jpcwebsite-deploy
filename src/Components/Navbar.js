
export default function Navbar() {
    return (
        <nav className="nav">
            <a href = "/" className = "site-title">JPC</a>
            <ul>
                <li>
                    <a href = "/about">About</a>
                </li>
                <li>
                    <a href = "/team">Team</a>
                </li>
                <li>
                    <a href = "/signup">Sign up</a>
                </li>
            </ul>
        </nav>
    )
}