import React from 'react'

function Cardscomponent(props) {
    return (
        
            <div className="col-auto">
             <article className="cards">
                        <h1>{props.h1}</h1>
                        <p>{props.text}</p>
                        <button type="button" className="btn btn-success btn2 mx-4">Depositor Portal</button>

                    </article>
                    </div>
            
        
    )
}

export default Cardscomponent;
