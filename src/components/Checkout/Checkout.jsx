//import useSelector to access reduxStore
import { useSelector } from "react-redux";

function Checkout() {
    //declare array pizzaOrder from store
    const pizzaOrder = useSelector(store => store.pizzasSelectedReducer);
    //declare object orderInfo from store
    const orderInfo = useSelector(store => store.orderReducer);

    //calculates order total
    const calcTotal = () => {
        let total = 0;
        for (let item of pizzaOrder) {
            total += parseFloat(item.cost);
        }
        return total;
    }

    //order total to be displayed on DOM
    const orderTotal = calcTotal();

    return(
        <>
            <h1>Step 3: Checkout</h1>
            <p>{orderInfo.name}</p>
            <p>{orderInfo.address}</p>
            <p>{orderInfo.state}, {orderInfo.zip}</p>
            <p>{orderInfo.method}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaOrder.map((item, i) =>
                        (<tr key={i}>
                            <td>{item.name}</td>
                            <td>${item.cost}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
            <p>Total: $<span>{orderTotal}</span></p>
        </>
    );
}

export default Checkout;