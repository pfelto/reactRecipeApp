const Instructions = (props) => 
    <section className='instructions'>
        <h2>{props.title}</h2>
        {props.steps.map((step, i) =>
            <p key={i}>{step}</p>
        )}
    </section>

    export default Instructions