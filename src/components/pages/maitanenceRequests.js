import React, { Component } from 'react'

export default class MaitanenceRequest extends Component {
    constructor() {
        super()
    }

    render(){
        return(
            <form id="form">
                <input type="text"
                    name="name"
                    placeholder="Name"
                />
                <input type="text"
                    name="name"
                    placeholder="Address"
                />
                <input type="text"
                    name="name"
                    placeholder="Name"
                />
                <input type="textarea"
                    name="description"
                    placeholder="description"
                />
            </form>
        )
    }
}