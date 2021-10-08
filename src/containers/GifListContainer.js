
import React from 'react'
import GifSearch from '../components/GifSearch'
import MagicCard from '../components/MagicCard'

class GifListContainer extends React.Component {

    // const fetchImages = 'https://api.giphy.com/v1/gifs/search?api_key=ZxjmdOEZDt6kd2frUfcKB3g6E5lD83oy&rating=g&q=' + {searchTerm}

    state={
        magic: [],
        searchTerm: "magic"
    }

    componentDidMount() {
        this.makeFetch(this.state.searchTerm)
        .then(resObj => {
            this.setState({
                magic: resObj.data

            }) 
        })
    }
    // componentDidMount() {
    //     this.makeFetch(this.state.searchTerm)
    //     .then(resObj => {
    //         this.setState({
    //             magic: resObj.message

    //         }) 
    //     })
    // }

    makeFetch = (searchTerm) => {
            return fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZxjmdOEZDt6kd2frUfcKB3g6E5lD83oy&q=${searchTerm}&limit=3&offset=123&rating=r&lang=en`)
            .then(res => res.json())
            // .then(json => json.data)

    }

//     makeFetch = (searchTerm) => {
//         return fetch(`https://dog.ceo/api/breed/${searchTerm}/images/random/4`)
//         .then(res => res.json())
//         // .then(json => json.data)

// }




    handleSearchChange = (newTerm) => {

        // console.log(newTerm, "From handleSearchChange")
        this.setState({
            searchTerm: newTerm
        })

    }

    handleSearchSubmit = () => {
        this.makeFetch(this.state.searchTerm)
        .then(resObj => {
            this.setState({
                magic: resObj.data

            }) 
        })

    }
    // handleSearchSubmit = () => {
    //     this.makeFetch(this.state.searchTerm)
    //     .then(resObj => {
    //         this.setState({
    //             magic: resObj.message

    //         }) 
    //     })

    // }

    render() {

        console.log(this.state) 
        return(
            <div>

                <GifSearch 
                handleSearchChange={this.handleSearchChange} 
                searchTerm={this.state.searchTerm}
                handleSearchSubmit={this.handleSearchSubmit}
                />
                {this.state.magic.map(magicURL => {
                      return <MagicCard key={magicURL.id} title={magicURL.title} url={magicURL.images.original.url}  />
                    // return <MagicCard key={magicURL} title={magicURL} />
                })}

            </div>

        )    
        
    }
}

export default GifListContainer
 

// .then(json => {
//     console.log(json)
//       console.log(json.data[0].images.original.url);
//   })
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
   