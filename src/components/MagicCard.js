import React from 'react'

function MagicCard(props){

    // console.log(props, "What are the props")
    return( 
    
            // <div>
            //     <h2>{props.title}</h2>
            //     <img src={props.url} alt={props.title} />
            // </div>
        // <div>
        // <img src={props.title} />
        // </div>

        <div>
        <img src={props.url} />
        </div>
    
        )
}

export default MagicCard
