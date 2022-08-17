import React from 'react';

const Navbar = (props) => {
 return(
    <div>
        <div style={styles.navbar}>
            <img alt="cart" 
                src = "https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                style = {styles.image}
            />
            <span style={styles.cartCount}>{props.count}</span>
            MY CART
        </div>
    </div>            
 );    
}
const styles = {
    image:{
        height : 70,
        width : 70,
        borderRadius :4,
        marginTop : 20,
        marginLeft : 20
        
    },
    cartCount:{
        background: 'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position: 'absolute',
        fontSize:'25px',
        fontColor:'skyblue'
        
    },
    // navbar:{
        
    //     background:'blue'
        
    // }
    
}

export default Navbar;

