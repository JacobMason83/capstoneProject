import React from 'react';

const PropertyItem = (props) => {
    const propertyItems = props.homes

    return (
        <div className="property-item-container">

{propertyItems.map(item => {
    return (
        
        <div className='property-wrapper'>
            
            <div className="image-wrapper">
                <img src={item.image} alt="logo"/>
            </div>
            <div className="content">
            <div className="title">
                <h1>Property: </h1> <b>{item.propertyName}</b>
            </div>
            <br />
                <div className="address">
                <h2>Address:</h2> {item.address}
                </div>
                <br />
                <div className="price">
                <h2>Value:</h2>  {item.value}              
                </div>
                <br />
                <div className="renter">
                <h1>Renter:</h1> {item.renter}
                </div>

                </div>                              
            </div>               


            
        
    )
})}
        </div>

        
    )
}
export default PropertyItem



