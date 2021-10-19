import PropTypes from 'react'

const Summary = ({ingredients=0,steps=0,title='[recipe]'}) => 
    <div>    
        <h1>{title}</h1>
        <p>{ingredients} Ingredients | {steps} Steps</p>
    </div>

Summary.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props,propName) =>
    (typeof props[propName] !== 'string' ? console.log('Title must be a string') : (
        (props[propName].length > 20) ? console.log('Title cannot be over 20 chars') :
        null)
    )
}

export default Summary