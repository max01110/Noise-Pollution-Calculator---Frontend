import React, { Component } from 'react'
import Main from '../components/Main'


export class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 700,
            someVar: ''
        }
        this.handler = this.handler.bind(this)

    }

    handler() {
        this.setState({
            someVar: 'some value'
        })
    }

    render() {
    
        return (
            <div>
                <Main/>
            </div>
            )
           
    }
}

export default index
