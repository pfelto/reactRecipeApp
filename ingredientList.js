import Ingredient from "./ingredient";

const IngredientList = (props) =>
    <ul className='ingredients'>
        {props.list.map((ingredient,i) =>
            <Ingredient key={i} 
                amount={ingredient.amount}
                measurement={ingredient.measurement}
                name={ingredient.name}
                />
        )}
    </ul>

export default IngredientList