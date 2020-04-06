import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = props => (
  <div className={ classes.BuildControls }>
    <p>
      Current price: <strong>{ props.price.toFixed(2) }  &#36;</strong>
    </p>
    {
      controls.map(item => (
        <BuildControl key={item.label} label={item.label} 
          added={ () => props.ingredientAdded(item.type) }
          removed={ () => props.ingredientRemoved(item.type) }
          disabled={ props.disabled[item.type] }
        />
      ))
    }
    <button disabled={ !!props.purchasable } className={ classes.OrderButton }>ORDER NOW</button>
  </div>
);

export default buildControls;
