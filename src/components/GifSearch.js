import React, { Component } from 'react';

class GifSearch extends Component {


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearchSubmit()
    }

    render() {

        console.log("SEARCH PROPS", this.props)
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
        
            <h1>This is the search Form</h1>
            <input type='text' 
            onChange={(e) =>this.props.handleSearchChange(e.target.value)}
            value={this.props.searchTerm}
            />
            <input type='submit' />
             
            
            </form>
            </div>
        );
    }

}

export default GifSearch;