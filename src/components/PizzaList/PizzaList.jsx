import PizzaItem from '../PizzaItem/PizzaItem'
import {useSelector} from 'react-redux'

function PizzaList(props) {
    //use useSelector to access info from pizzaReducer 
    const reduxStore = useSelector(store => store);
    const { pizzaReducer } = reduxStore;
    console.log(pizzaReducer)
    return(
        <>
        {/* Use a .map to pass in all pizza information to PizzaItem */}
            {pizzaReducer.map( pizza =>
                <PizzaItem
                    key={pizza.id}
                    pizza={pizza}
                />
           )}
            
        </>
    )
}

export default PizzaList;