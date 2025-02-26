import PageHeader from "../Components/pageHeader"


import React from "react";


export default function Team() {
    return (
        <>
            <PageHeader title="Our Team"/>
            <div className="our-team">
                <div className="our-team-container">
                    <div className="team1">
                        <img src="/images/Goings.jpg" alt="Diggs"></img>
                    </div>
                    <h1>Jonathan Goings</h1>
                    <p>Jonathan Goings is a highly skilled leader with extensive experience in team management, project coordination, and regulatory compliance, making them an asset in construction project management. His background in logistics, scheduling, and stakeholder collaboration ensures efficiency in handling materials, timelines, and safety protocols. With strong problem-solving abilities, attention to detail, and a proven track record in high-pressure environments, Jonathan has excelled at executing projects with precision and accountability.</p>
                    <div className="team1">
                        <img src="/images/Jones.jpg" alt="Diggs"></img>
                    </div>
                    <h1>Jonathan Jones</h1>
                    <p>A seasoned construction project and asset management leader with 15 years of experience, the candidate excels in overseeing large-scale projects, optimizing operations, and navigating government contracts across 23 states. With a strong background in leadership, risk management, and process optimization, they drive teams to deliver projects on time and within budget while fostering continuous improvement. Their expertise in data analytics, strategic planning, and project execution, combined with a military-honed discipline, makes them an invaluable asset to any construction initiative</p>
                </div>
            </div>
        </>
    )
}