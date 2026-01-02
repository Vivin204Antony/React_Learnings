//Function based components with JSX
function Food(){

    const food1 = "Apple";
    const food2 = "Orange";

    return(

        <>        
        <ul>
            <li>Banana</li>
            <li>{food1.toLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        <hr />
        </>
        

    );
}

export default Food;