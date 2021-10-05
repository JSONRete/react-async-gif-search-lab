
import React from 'react'
import GifSearch from '../components/GifSearch'
import MagicCard from '../components/MagicCard'

class GifListContainer extends React.Component {

    state={
        magic: []
    }

    render() {
        return(

            <div>

                <GifSearch />
                {this.state.magic.map(magicURL => {
                    return <MagicCard key={magicURL} magic={magicURL}/>
                })}

            </div>

        )    
        
    }
}

export default GifListContainer

// import React, { Component } from 'react';

// function GifListContainer() {


//         const [searchTerm, setSearchTerm] = useState('magic')
        
//         const fetchImages = 'https://api.giphy.com/v1/gifs/search?api  _key=ZxjmdOEZDt6kd2frUfcKB3g6E5lD83oy&rating=g&q=' + {searchTerm}

//         useEffect(() => {
//             fetch(fetchImages)
//             .then(res => res.json())
//             .then(json => console.log(json.data))
//         }, [searchTerm])
 

//     return (

//         <div></div>
//       );
// }

// export default GifListContainer;
  