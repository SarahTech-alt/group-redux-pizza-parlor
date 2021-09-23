//import useState
import {useState} from 'react';
//import dispatch
import {useDispatch} from 'react-redux';

function OrderForm() {
    //declare dispatch
    const dispatch = useDispatch();
    //create defaultOrder obj
    const defaultOrder = {name: '', address: '', state: '', zip: '', method: 'delivery'};
    //state variable
    const [order, setOrder] = useState(defaultOrder);
    //function to handle submit
    const handleSubmit = (event) => {
        //prevent default form behavior
        event.preventDefault();
        //dispatch here
        dispatch(order);
        //reset inputs to default
        setOrder(defaultOrder);

    }
    return(
        <>
            <form onSubmit={handleSubmit} className="addOrder">
                <input required placeholder="Name" value={order.name} onChange={(event) => setOrder({...order, name: event.target.value})} />
                <input required placeholder="Address" value={order.address} onChange={(event) => setOrder({...order, address: event.target.value})} />
                <input required placeholder="State" value={order.state} onChange={(event) => setOrder({...order, state: event.target.value})} />
                <input required placeholder="ZIP" value={order.zip} onChange={(event) => setOrder({...order, zip: event.target.value})} />
                <div className="radio">
                    <label>
                        <input type="radio" value="delivery" onClick={(event) => setOrder({...order, method: event.target.value})} />
                        Delivery
                    </label>
                    <label>
                        <input type="radio" value="pickup" onClick={(event) => setOrder({...order, method: event.target.value})} />
                        Pickup
                    </label>
                </div>
                <button type="submit">Next</button>
            </form>
        </>
    );

}

export default OrderForm;