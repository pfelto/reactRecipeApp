import IngredientList from "./ingredientList";
import Instructions from "./instructions";

const Recipe = (props) =>
    <section id={props.name.toLowerCase().replace(/ /g, '-')}>
        <h1>{props.name}</h1>
        <IngredientList list={props.ingredients}/>
        <Instructions title='Cooking Instructions' steps={props.steps}/>
    </section>

export default Recipe