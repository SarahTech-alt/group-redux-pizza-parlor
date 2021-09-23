

function PizzaItem(props){
    return(
        <>
            <div className="img-wrapper">
                <img src={props.pizza.image_path}></img>
                <h2>{props.pizza.name}</h2>
                <p>{props.pizza.description}</p>
            </div>
        </>
    )
}

export default PizzaItem;