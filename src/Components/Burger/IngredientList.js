import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import burgerSlice from '../../store/burger'

const IngredientList = () => {

    const ingredient = useSelector( store => store.burger.ingredient )
    const totalPrice = useSelector( store => store.burger.totalPrice )
    const dispatch = useDispatch()

  return (
    <div>
      <ul>
          <li>Patty: {ingredient.patty} <button onClick={ () => dispatch( burgerSlice.actions.removeIngredients({ ingredient: 'patty' })) } >-</button><button onClick={ () => dispatch(burgerSlice.actions.addIngredients({ ingredient: 'patty' })) } >+</button></li>
          <li>Lettuce: {ingredient.patty} <button onClick={ () => dispatch( burgerSlice.actions.removeIngredients({ ingredient: 'lettuce' })) } >-</button><button onClick={ () => dispatch(burgerSlice.actions.addIngredients({ ingredient: 'lettuce' })) } >+</button></li>
          <li>Cheese: {ingredient.patty} <button onClick={ () => dispatch( burgerSlice.actions.removeIngredients({ ingredient: 'cheese' })) } >-</button><button onClick={ () => dispatch(burgerSlice.actions.addIngredients({ ingredient: 'cheese' })) } >+</button></li>
          <li>Tomato: {ingredient.patty} <button onClick={ () => dispatch( burgerSlice.actions.removeIngredients({ ingredient: 'tomato' })) } >-</button><button onClick={ () => dispatch(burgerSlice.actions.addIngredients({ ingredient: 'tomato' })) } >+</button></li>
      </ul>
      <h5>Total Price: Rp {totalPrice}</h5>
    </div>
  )
}

export default IngredientList
