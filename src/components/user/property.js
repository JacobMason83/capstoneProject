import React from 'react';

const PropertyItem = (props) => {
    const propertyItems = props.homes

    return (
        <div className="property-item-container">

{propertyItems.map(item => {
    return (
        <div key={item.id}>
            <div className="property-item-card-wrapper">
            <div className="image-wrapper">
                <img src={item.image} alt="logo"/>
                <hr />
            </div>
            <div className="content">
                <h1>{item.propertyName}</h1>
                <h2>{item.address}</h2>
                <h2>{item.value}</h2>                
                </div>                              
                <div className="content">
                <h1>{item.renter}</h1>
                </div>

            </div>               
            
        </div>
    )
})}

        </div>
    )
}
export default PropertyItem



