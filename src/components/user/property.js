import React from 'react';

const PropertyItem = (props) => {
    const propertyItems = props.homes

    return (
        <div className="property-item-container">

{propertyItems.map(item => {
    return (
        <div key={item.id}>
            <div className="property-item-card-wrapper">
                {item.propertyName}
                {item.address}
                {item.value}
                {item.renter}
            </div>
        </div>
    )
})}

        </div>
    )
}
export default PropertyItem



