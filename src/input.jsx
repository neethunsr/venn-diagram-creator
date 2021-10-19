import React from 'react';

function InputText(props) {
    return( 
    <div className="">
        <input type="text" placeholder={props.placeholder} name="key" />
    </div>);
}

function InputNumber(props){
    return(
        <div className="">
            <input type="number" placeholder={props.placeholder} name="data" />
        </div>
    )
}
  export {InputText, InputNumber};