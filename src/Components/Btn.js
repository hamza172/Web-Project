import React from 'react';
const btnCss={
  textAlign: "center",
  verticalAlign: "middle",
  padding: "12px 24px",
  border: "3px solid #BA0000",
  opacity: "1"
}
function Btn(props) {
return <button style={btnCss}>{props.Text}</button>
}
  export default Btn