

function Button(){

    /*const handleClick = () => { alert("Button Clicked!"); }

    const handleClick2 = (name) => { alert(name + " Stop Clicking Me!");} 

    let count = 0 ;

    const handleClick = (name) => {
         if(count < 3)
         {
            count++;
            alert(name + " You Clicked Me!");
         }
         else{
            alert(name + " Stop Clicking Me!");
         }
    } */

         const handleClick = (e) => e.target.style.display = "none"

    return (
        <button onDoubleClick={(e) => handleClick(e)}>Click Me !</button>

    );
}

export default Button;