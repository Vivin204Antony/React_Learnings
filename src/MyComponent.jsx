import React, { useState} from "react";

function MyComponent() {

    const [name, setName ] = useState("Guest");
    const [age, setAge ] = useState(0);
    const [isEmployed, setIsEmployed ] = useState(false);

    const updateName = () => {
        setName("Vivin Antony");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const updateEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>SetName</button>

            <p>Age : {age}</p>
            <button onClick={updateAge}>SetAge</button>

            <p>Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmployment}>Toggle Employment</button>
        </div>
    );
}

export default MyComponent;

