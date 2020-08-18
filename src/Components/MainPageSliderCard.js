import React from 'react';
    const pCss={
        backgroundColor:"#000000",
        padding: "4px",
        marginRight: "38%",
        marginLeft: "38%",
    }
    const h1Css={
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        marginTop:"-33px",
        marginLeft: "23%",
        marginRight: "23%",
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingRight: "30px",
        paddingLeft: "30px",
    }
    const buttonCss ={
        padding: "20px",
        paddingRight: "70px",
        paddingLeft: "70px",
        marginTop: "-30px",
        color: "#fff",
        backgroundColor: "#070034",
        border: "none",
        borderRadius: "50px",
        fontSize: "18px",
        ":hover":{
            backgroundColor: "#0000000",
       }
    
}
function MainPageSliderCard (props){
    return <>
        <p style={pCss}>{props.p}</p>
        <h3 style={h1Css}>{props.h1}</h3>
        <button style={buttonCss}>{props.button}</button>
    </>
}
export default MainPageSliderCard