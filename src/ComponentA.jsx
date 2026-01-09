import React, { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA()
{

    const [user, setUser] = useState("Antony");

    return (
        <div className = "BOX">
            <h2>Component A</h2>
            <h3>{`Hello ${user}`}</h3>
            <ComponentB user = {user} />
            
        </div>
    );
}

export default ComponentA;