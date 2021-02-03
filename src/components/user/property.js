import React from 'react';

const PropertyItem = (props) => {
    const propertyItems = props.homes

    return (
        <div className="property-item-container">

{propertyItems.map(item => {
    return (
        <div key={item.id} className='property-wrapper'>
            
            <div className="image-wrapper">
                <img src={item.image} alt="logo"/>
                <hr />
            </div>
            <div className="content">
                <h1>Property Name:{item.propertyName}</h1>
                <hr />
                <h2>Address:{item.address}</h2>
                <hr />
                <h2>Value:{item.value}</h2>                
                </div>                              
                <div className="content">
                <h1>Renter:{item.renter}</h1>
                </div>

            </div>               
            
        
    )
})}

        </div>
    )
}
export default PropertyItem



