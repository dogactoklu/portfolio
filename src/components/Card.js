import '.././index.css'

function Card(props) {
    return(
        <div className="card_container">
            <h1>Hello?</h1>
            <hr></hr>
            <h1>{props.text}</h1>
            <h1>{props.text2}</h1>
        </div>
    );
}

export default Card;