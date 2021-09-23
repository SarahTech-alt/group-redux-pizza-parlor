import { useSelector, useDispatch } from 'react-redux';

function PizzaItem(props){
    const dispatch = useDispatch();
    
    const addPizzaToOrder = (event) => {
        event.preventDefault;
        console.log(props.pizza)
        dispatch({type: 'ADD_PIZZA', data: props.pizza})
    }
    return(
        <>
            <div className="img-wrapper">
                <img src={props.pizza.image_path}></img>
                <h2>{props.pizza.name}</h2>
                <p>{props.pizza.description}</p>
                <p>${props.pizza.price}</p>
                <button 
                onClick={addPizzaToOrder}>Add To Cart
                </button>
            </div>
        </>
    )
}

export default PizzaItem;