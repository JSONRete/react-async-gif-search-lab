import React from 'react'

function MagicCard(props){

    console.log(props)
    return( 
        
        <div>
        <img src={props.magic} />
        </div>
        )
}

export default MagicCard