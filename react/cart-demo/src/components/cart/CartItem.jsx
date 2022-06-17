import { Typography } from 'antd';
import React from 'react';

const CartItem = (props) => {
    const { item, onCheckedChange } = props;
    const { checked, name, price } = item;
    // const onWrapCheckedChange = (e) => {
    //     onCheckedChange(item)
    // }
    
    return (
        <div className="cart-item">
            <div className="checkbox-wrap">
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={onCheckedChange.bind(null, item)}
                />
            </div>
            <p className="item-info">
                {name} <Typography.Text mark>${price}</Typography.Text>
            </p>
        </div>
    )
}

export default CartItem