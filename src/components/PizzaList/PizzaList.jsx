import PizzaItem from '../PizzaItem/PizzaItem'
import {useSelector} from 'react-redux'

function PizzaList(props) {
    //use useSelector to access info from pizzaReducer 


    return(
        <>
        {/* Use a .map to pass in all pizza information to PizzaItem */}
            <PizzaItem/>
        </>
    )
}

export default PizzaList;