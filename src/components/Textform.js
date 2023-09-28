import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform (props){
    const [text, setText] = useState ("");

   const convertUpcase = () =>{
    let textarea = document.getElementById('message');
   // console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    textarea.value = newText;
    props.showAlert("Converted to uppercase case" , "success");
   }
   const convertLwcase = () =>{
    let textarea = document.getElementById('message');
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    textarea.value = newText;
    props.showAlert("Converted to lower case" , "success");
   }

   const onchangehandler = (event) =>{
  // console.log("area clicked");
   setText (event.target.value);


   }
  
   const submitValue = ()=>{
    //console.log("submit button clicked");
    let div = document.createElement("div");
    let textarea = document.getElementById('message');
    div.innerHTML =  textarea.value;
    document.getElementById("block_main").appendChild(div);

   }

   const clearText = () =>{
     let newText = "";
     setText(newText);
     let textarea = document.getElementById('message');
     textarea.value = "";
     props.showAlert("Text is cleared" , "success");


   }

   const copyText = () =>{
    let copyText = document.getElementById("message");
    navigator.clipboard.writeText(copyText.value);
    //console.log("Text Copied");
    props.showAlert("Copied to clipboard" , "success");
   }
   
   const removeExtraSpace = () =>{
    let copyText = document.getElementById("message");
     let regex =  /\s+/g;
     let stringText = copyText.value;

     let trimText = stringText.replace(regex, " ");
    // let trimText = stringText.trim();
         copyText.value = trimText;
         props.showAlert("Extra space removed" , "success");

   } 


    return (
<div className="maintextform" >
<div className="my-3  text-container"  >
  <h2 htmlFor="exampleFormControlTextarea1" id = "textHeading" className="form-label" style={{color:props.textmode==="light"?"black":"white"}}>{props.heading} </h2>
  <textarea id= "message" className="form-control" placeholder = {text}  rows="3"  onChange={onchangehandler} style={{ backgroundColor: props.textmode==="light"?"white":"grey", color:props.textmode==="light"?"black":"white"}}></textarea>
  <div className='button_sec'>
  <button type="button" className='btn btn-primary mt-3' onClick={convertUpcase}>Convert to Uppercase</button>
  <button type="button" className='btn btn-primary mt-3 ms-3' onClick={convertLwcase}>Convert to Lowercase</button>
  {/* <button type="button" className='btn btn-primary mt-3 ms-3' onClick={submitValue}>Submit</button>  */}
  <button type="button" className='btn btn-primary mt-3 ms-3' onClick={clearText}>Clear Text</button>
  <button type="button" className='btn btn-primary mt-3 ms-3' onClick={copyText}>Copy Text</button>
  <button type="button" className='btn btn-primary mt-3 ms-3' onClick={removeExtraSpace}>Remove Extra Space</button>
  </div>
</div>
  <div className='block_container' id="block_main" style={{color:props.textmode==="light"?"black":"white"}}>
     <h2>Your text summary here</h2>
     <p>Total words {(text.split(" ").length) - 1} and total chracters are {text.length}</p>
     <p>Time required to read : {.008* text.split(" ").length }</p>
     <h2>Preview</h2>
     <p>{text===""?"Enter something above to preview it here":text}</p>
  </div>

</div>
    )
}