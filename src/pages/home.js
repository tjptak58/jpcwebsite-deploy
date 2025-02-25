import PageHeader from "../Components/pageHeader"
import ServiceBox from "../Components/ServiceBox"

export default function Home() {
    return (
        <>
            <PageHeader title="Building a Better Future"/>
            <div className="mission-statement">
                <div className="mission-statement-header">
                    <img src="/images/JPC.png" alt="JPC Logo"></img>
                </div>
                <div className="mission-statement-text">
                    <h1>Our Mission:</h1>
                    <p>At JPC LLC, we are dedicated to delivering exceptional construction projects that are completed on time and within budget. Our commitment to efficiency and reliability ensures the successful execution of every phase, from inception to completion. We prioritize customer satisfaction by maintaining clear communication and providing responsive service throughout the entire process. With a strong foundation built on integrity, precision, and professionalism, we don’t just build structures; we cultivate lasting relationships with our clients.</p>
                </div>
            </div>
            <div className="our-services">
                <h1 className="services-header">Our Services</h1>
                <div className="our-services-container">
                    <div className="service1">
                        <ServiceBox title="Commercial Demolition" description={"Strategically dismantling structures to maximize material reuse, minimize waste, and ensure safe and environmentally responsible demolition."} image="images/Demolition.webp"/>
                    </div>
                    <div className="service2">
                        <ServiceBox title="Building Deconstruction" description={"Safely and efficiently dismantling commercial structures while minimizing environmental impact, reducing waste, and ensuring regulatory compliance."} image="images/Deconstruction.jpeg"/>
                    </div>
                    <div className="service3">
                        <ServiceBox title="Trenching Operations" description={"Expertly excavating trenches for utilities, foundations, and drainage systems while ensuring safety, efficiency, and compliance with regulations."} image="images/Trenching.webp"/>
                    </div>
                </div>
            </div>
            <div className="meet-team">
                <div className="meet-team-text">
                    <p>At JPC, our team is the foundation of our success. With years of experience in the construction industry, we bring expertise, dedication, and craftsmanship to every project. From project managers to skilled tradespeople, each member of our team is committed to delivering high-quality results with precision and professionalism.</p>
                </div>
                <div className="meet-team-header">
                <div className="team-page-wrapper">
                    <h1>
                        <a href="/team" style={{ textDecoration: "none", color: "white" }}>
                            Meet our team
                        </a>
                    </h1>
                </div>
                </div>
            </div>
            <div className="contact-us">
                <img src="/images/JPC.png" alt="JPC Logo"></img>
                <h1>Contact Us:</h1>
                <p>Email: jonespinnaclellc@gmail.com</p>
                <p>Phone: +13176070705</p>
            </div>
        </>
    )
}