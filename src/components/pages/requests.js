import React, { Component } from 'react'
import axios from 'axios'





export default class  Request extends Component {
    constructor(props) {
        super()
        this.state = {
            renter: "",
            address: "", 
            description: ""
        }
    }
   handleChange = (e) => {
    e.preventDefault()
       this.setState({
           [e.target.name]: e.target.value
       })
   }
   
    formSubmit = () => {
        const { renter, address, description } = this.state
        axios
        .post('http://localhost:4000/requests', {
            renter, 
            address, 
            description
        }, {withCredentials: true})
        .then(res => {
         console.log(res.data)
        })      
            
        .catch(err => console.error(err))
        
    }
    componentDidMount() {
        this.setState({
            renter: '',
            address: '',
            description: ''
        })
    }
    render() {
        return(
            
            <div className="request-form" >
            <form className="form" onSubmit={this.formSubmit}>
            <h1>Put your Maitenance Requests Here: </h1>
                <input type="text"
                    name="renter"
                    placeholder="Name"
                    value={this.state.renter}
                    onChange={this.handleChange}
                />
                <input type="text"
                    name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleChange}
                />               
                <textarea 
                rows='5'
                col="5"
                name="description"
                placeholder="description"
                value={this.state.description}
                onChange={this.handleChange}
                >
                </textarea>
                    
                
                <button type="submit" className="btn">Submit</button>

            </form>
            </div>
            
        )

    }
}
    


