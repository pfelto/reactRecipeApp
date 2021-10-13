const Ingredient = (props) =>
    <li>
        <span className='amount'>{props.amount}</span>
        <span className='measurement'>{props.measurement}</span>
        <span className='name'>{props.name}</span>
    </li>

export default Ingredient