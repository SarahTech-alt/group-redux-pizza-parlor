import { useSelector, useDispatch } from 'react-redux';

function PizzaItem(props){
    const dispatch = useDispatch();
    
    const addPizzaToOrder = (event) => {
        event.preventDefault;
        console.log(props.pizza)
        //must edit reducers before sending 
        //dispatch({type: 'SET_ORDER_REDUCER', data: props.pizza})
    }
    return(
        <>
            <div className="img-wrapper">
                <img src={props.pizza.image_path}></img>
                <h2 className="pizzas">{props.pizza.name}</h2>
                <p>{props.pizza.description}</p>
                <p>${props.pizza.price}</p>
                <button className="add"
                onClick={addPizzaToOrder}>Add To Cart
                </button>
            </div>
        </>
    )
}

export default PizzaItem;