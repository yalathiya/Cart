import React from 'react';
//import 'index.css';
const CartItem = (props) => {
    
    //increaseQty=() => {
        //this.state.qty = this.state.qty + 1;
        //console.log('this',this.state);

        //Set state form 1
        /*this.setState({
            qty: this.state.qty + 1
        });*/

        //Set state form 2
        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty+1
        //     }
        // });
    //}
    // decreaseQty=()=>{
    //     //console.log('this',this.state);
    //     if(this.state.qty  == 1){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty-1
    //         }
    //     });
    // }
    // delete=()=>{
    //     console.log('this',this.state);
    // }
    
        const {price, title, qty} = props.product;
        const {product, onIncreaseQty, OnDecreaseQty, onDelete} = props;
        return(
            
            <div className="cart-item">
                
                <div className="left-block">
                    <img style = {styles.image} src={product.img}/>
                </div>
                <div className="left-block">
                    <div style = { {fontSize:25}}>{title}</div>
                    <div style = { {fontSize:25,fontColor: '#777'}}>Rs: {price}</div>
                    <div style = { {fontSize:25, fontColor: '#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt = "increase" 
                        className="action-icons" 
                        //src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1660052449~hmac=b9107226fbe8b15a32559c7ec8888ed1"
                        src="https://cdn-icons-png.flaticon.com/512/753/753317.png"
                        onClick = {() => props.onIncreaseQty(product)}
                        /> 
                        <img 
                        alt = "decrease" 
                        className="action-icons" 
                        //src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1660052480~hmac=cdc66e1252cac87a9c246c4b8479b463"
                        src="https://cdn-icons-png.flaticon.com/512/753/753340.png"
                        onClick = {() => props.onDecreaseQty(product)}
                        /> 
                        <img 
                        alt = "delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                        onClick = {() => props.onDelete(product.id)}
                        /> 
                    </div>
                </div>
            </div>
        );
    
}
const styles = {
    image:{
        height : 150,
        width : 150,
        borderRadius :4,
        background : '#ccc'
    }
}

export default CartItem;

