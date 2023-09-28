import React from 'react'


export default function alert(props) {


    const capitalize = (word) =>{
      //  console.log(word);
      //   let arr = word.split("");
      //   let wordS =  arr.slice(0,1);
      //    let wordC =  wordS.toString().toUpperCase();
      //    return wordC + word.slice(1);

         return word.charAt(0).toUpperCase() + word.slice(1);
        
         

    }


  return (
  props.alert && 
<div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert" >
  <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong> 
 </div>
      

  )
}
