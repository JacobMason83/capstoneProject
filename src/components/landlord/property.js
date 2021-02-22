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
                <h1>Property Name:{item.propertyName}</h1>
            </div>
                <div className="address">
                <h2>Address:{item.address}</h2>
                </div>
                <div className="price">
                <h2>Value:{item.value}</h2>                
                </div>
                <div className="renter">
                <h1>Renter:{item.renter}</h1>
                </div>

                </div>                              
            </div>               


            
        
    )
})}
        </div>


        
    )
}
export default PropertyItem



