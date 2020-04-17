import React, { Component } from 'react'
import axios from 'axios'

export default class CreateBook extends Component {

    async componentDidMount(){
        const res = await axios.get('https://mern-stack-bookshelf.herokuapp.com/api/books');
        console.log(res);
    }

    render() {
        return (
            <div>
                Create Book
            </div>
        )
    }
}
