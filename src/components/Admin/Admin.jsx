import axios from 'axios';
import { useSelector } from 'react-redux';

function Admin(){
    
    const orderInfo() => {
        
    }

    const customerInfo = useSelector (store => store.orderReducer)
    return(
        <>
        <h1>Step 3: Checkout</h1>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {reduxStore.checkoutReducer.map((item, i) =>
            (<tr key={i}>
              <td>{orderReducer.name}</td>
              <td>{orderReducer.time}</td>
              <td>{orderReducer.type}</td>
              <td>{orderReducer.cost}</td>
            </tr>)
          )}
        </tbody>
      </table>
        </>
    )
}

export default Admin;