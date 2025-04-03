import Employee from "../Components/Employee";
import { useEffect, useState } from "react";
import PageHeader from "../Components/pageHeader"


import React from "react";


export default function Team() {
    //fetch the description,image, and Name
    const [members, setMembers] = useState([]);

    useEffect(() => {
    
        //get the description
        fetch("/employees/info.txt")
            .then(response => response.text()) // Convert response to text
            .then(data => {
                const members = data.split("\n").map(line => {
                    const [id, name, title, image, description] = line.split("|").map(field => field.trim());
                    return { id, name, title, image, description };
                }); 

                setMembers(members);
            }) // Store in state
            .catch(error => console.error("Error reading file:", error));
        },[]);

    return (
        <>
            <PageHeader title="Our Team"/>
            <div className="our-team">
                <div className="our-team-container">
                    {members.map(member => (
                        <Employee
                            name={member.name}
                            image={member.image}
                            id={member.id}
                            title={member.title}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}