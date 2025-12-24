import profilePic from "./assets/pwa-192x192.png";

function Card(){
    return(

        <div className = "card">
            <img className = "card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className = "card-title">Antony Vivin S</h2>
            <p className = "card-description">Pursuing MCA at PSG TECH !</p>

        </div>

    );
}

export default Card;