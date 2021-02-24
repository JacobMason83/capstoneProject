import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Header from '../helpers/headerPage'  
import { FormControl, TextField } from '@material-ui/core'





export default class  Request extends Component {
    constructor(props) {
        super()
        this.state = {
            renter: "",
            address: "", 
            description: "",
            page: 'Maitenance Requests'
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
        .post('https://jdm-express-jwt-api.herokuapp.com/requests', {
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
            <Fragment>
            <Header page={this.state.page} />
            <div className="request-form" >
            <form className="form-maitenance" onSubmit={this.formSubmit}>
            <h1>Put your Maitenance Requests Here: </h1>
            <div className="form-wrapper">
      
            <div className="float-container">

            <label htmlFor="name">Name</label>
                <input type="text"
                    name="renter"
                    placeholder="Name"
                    value={this.state.renter}
                    onChange={this.handleChange}
                />

            </div>
            <div className="float-container">
            <label htmlFor="address">Address</label>
                <input type="text"
                    name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleChange}
                />               
            </div>
            <div className="float-container">
            <label htmlFor="description">Description</label>
                <textarea 
                rows='5'
                col="5"
                name="description"
                placeholder="description"
                value={this.state.description}
                onChange={this.handleChange}
                >
                </textarea>

            </div>            
                
                <button type="submit" className="btn">Submit</button>

            </div>

            </form>
            </div>

            </Fragment>
            
        )

    }
}
    


