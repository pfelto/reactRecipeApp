import Recipe from "./recipe";
import Summary from './summary';

const Menu = (props) =>
<article>
    <header>
        <h1>{props.title}</h1>
    </header>
        <div>
            {props.recipes.map((recipe, i) =>
                <Summary key={i} title={recipe.name}
                    ingredients={recipe.ingredients.length}
                    steps={recipe.steps.length} />
            )}
        </div>
        <div className="recipes">
            {props.recipes.map((recipe, i) =>
                <Recipe key={i} name={recipe.name}
                    ingredients={recipe.ingredients}
                    steps={recipe.steps} />
            )}
        </div>
</article>

export default Menu