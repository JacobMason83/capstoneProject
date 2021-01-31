import React, { useState } from 'react'




const Request = (props) => {
   const [name, setName] = useState("")
   const [address, setAddress] = useState("")
   const [description, setDescription] = useState("")
   const [modalIsOpen, setModalIsOpen] =useState(true)
   
   const customStyles = {
        
  
    
        
}

    const formSubmit = (e) => {
        console.log("hi from button i was clicked")
    }
        return(
            
            <div className="request-form" >
            <form className="form" >
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
            </div>
            
        )
    
}

export default Request