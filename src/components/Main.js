import React, { Component } from 'react'
import axios from 'axios'

let data;


class Tasks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            someVar: "",
            location: "",
            air: [],
            construction: [],
            roads: [],
            isLoaded: false
        }

        this.handlerTask = this.handlerTask.bind(this);

    }

    componentDidMount() {
        console.log("Componentdidmount")
        // this.loadTasksTodo()
        // this.loadTasksComplete()

    }

    componentDidUpdate() {
        console.log("Componentdidupdate")
        // this.loadTasksTodo()
        // this.loadTasksComplete()
    }

    handlerTask() {
        this.setState({
            someVar: 'some value'
        })
    }

    getNoise = async (loc) => {
        let reqLoc = "http://localhost:3030/noise?address=" + loc
        axios.get(reqLoc).then((response) => {
        
            // console.log(response.data.roads)
        // let resp = response
        let respR = Object.values(response.data.roads);
        let respA = Object.values(response.data.air);
        let respC = Object.values(response.data.construction);
        
            this.setState({
                roads: respR,
                construction: respC,
                air: respA,
                isLoaded: true
            })
        
            this.handlerTask()

        }).catch((e) => {
            console.log(e)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state.location
        this.getNoise(data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    render() {
        const {location, roads, air, construction} = this.state

        const scrolling = {
            padding: "50px",
        }

        console.log(roads)
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                <p><input type="text" placeholder="Location" name="location" onChange={this.handleInputChange}/></p>
                <p><button>Search</button></p>
            </form>

            <p>Your location: {location}</p>


            <h1>Nearby Roads</h1>
            <ul>
                {roads.map(road => (
                    <li key={road.id}>
                        {road.name}    
                    </li> 
                ))}
            </ul>
            <h1>Nearby Construction</h1>
            <ul>
                {construction.map(constr => (
                    <li key={constr.id}>
                        {constr.name}    
                    </li> 
                ))}
            </ul>
            <h1>Nearby Airways</h1>
            <ul>
                {air.map(a => (
                    <li key={a.id}>
                        {a.name}    
                    </li> 
                ))}
            </ul>
         
            </div>
        )
    }
}

export default Tasks
