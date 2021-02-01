import React, { Component } from 'react'


export default class PayRent extends Component {
    constructor(){
        super()
        this.state = {
            renter: '',
            address: '',
            rentAmount: '',
            creditCard: ''
        }
    }
  

    //submit and change functions
    
     handleChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })        
    }
    handleSubmit = () => {
        const {renter, address, rentAmount} = this.state
        alert(`Thank you! ${renter} for paying ${rentAmount} for ${address}, we will see you next month!!`)
        this.setState({
            renter: '',
            address: '',
            rentAmount: '',
            creditCard: ''
        })
    }
    render(){
        const { renter, address, rentAmount, creditCard } = this.state
        return(
            
               <form onSubmit={this.handleSubmit} className="rent-form">
               <h1>Pay your rent here:</h1>
                   <div className="content-wrapper">
                   <label htmlFor="renter">Name</label>
                   <input type="text"
                       name='renter'
                       value={renter}
                       placeholder="Name"
                       onChange={this.handleChange}
                   />
                   <label htmlFor="address">Address</label>
                   <input type="text"
                       name='address'
                       value={address}
                       placeholder="Address"
                       onChange={this.handleChange}
                   />
                   <label htmlFor="creditCard">Credit Card</label>
                   <input type="text"
                       name='creditCard'
                       value={creditCard}
                       placeholder="CC number"
                       onChange={this.handleChange}
                   />
                   <label htmlFor="rentAmount">Amount</label>
                   <input type="text"
                       name='rentAmount'
                       value={rentAmount}
                       placeholder="Amount"
                       onChange={this.handleChange}
                   />
                   <button className="btn" type='submit'>Pay</button>

                   </div>
               </form>
            
        )
    }
}




// TODO 
// add ability to pay with paypal or stripe?
// create a form for entering in information
// maybe make it a modal so that they click a button and opens a modal to pay 
// can see if payment was successful
