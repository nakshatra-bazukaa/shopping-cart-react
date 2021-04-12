import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        console.log('this', this.state);
        
        // Both of the set state form discussed below use shallow merging 

        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 - use when previous state is required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1618147739~hmac=355f8b91f0a73e212b124dd639973ddc"
                            alt="increase"
                            onClick = {this.increaseQuantity}
                        />
                        <img className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618147763~hmac=4255c77bed875bd94d8877b261dd1f9e"
                            alt="decrease"
                        />
                        <img
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1618147655~hmac=c8bceba205a4b6f5a99f88074a6a0ccd"
                            alt="delete"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#CCC'
    }
}

export default CartItem;