import React, { useState } from 'react'
import ReactModal from 'react-modal'
ReactModal.setAppElement(".app-wrapper")

const Request = (props) => {
   const [name, setName] = useState("")
   const [address, setAddress] = useState("")
   const [description, setDescription] = useState("")
   
   const customStyles = {
        
    content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkslategrey",
    top: "60%",
    left: "60%",
    right: "auto",
    bottom:"auto",
   color:'white',
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "50vh",
    boxShadow: "10px 13px 14px 5px rgba(0,0,0,1.75)"
    
    },
    overlay: {
        backgroundColor: "transparent"
    }        
}

    const formSubmit = (e) => {
        console.log("hi from button i was clicked")
    }
        return(
            <ReactModal style={customStyles} isOpen={props.modalIsOpen}>
            <form id="form">
                <input type="text"
                    name="name"
                    placeholder="Name"
                />
                <input type="text"
                    name="name"
                    placeholder="Address"
                />               
                <textarea 
                rows='5'
                col="5"
                name="description"
                placeholder="description"
                >
                </textarea>
                    
                
                <button onClick={formSubmit()} type="submit" className="btn">Submit</button>
            </form>
            </ReactModal>
        )
    
}

export default Request