import React, { useState } from 'react'
// import React, { useTranslation } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = ' ';
        setText(newText)
        props.showAlert("Your text has been Cleared!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success");
    }
    // const handleMarathi = () => {
    //     let newText = text.split(/[ ]+/);
    //     setText(newText);
    //     props.showAlert("Extra spaces has been removed!", "success");
    // }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    // const handleOnMarathi = (event) => {
    //     let newText = text.toMarathi();
    //     setText(newText)
    // }
    const [text, setText] = useState('');
    // const [text, setText] = useTranslation();

    // setText("New Text");
    return (
        <div>
            <div className="container"  style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="my box" rows="8"></textarea>
                </div>
                {/* <div className="container my-2"> */}
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button>
                {/* </div> */}
                {/* <div className="container my-2"> */}
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
                {/* </div> */}
                {/* <div className="container my-2"> */}
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                {/* </div> */}
                {/* <div className="container my-2"> */}
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                {/* </div> */}
                 {/* <div className="container my-2">
                 <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleMarathi}>Remove extra spaces</button>
                </div> */}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Enter the text summery</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </div>
    )
}
// import React,{useState} from 'react';
// export default function TextForm(props) {
//   const [text, settext] = useState('');
  
//   const click=()=>{
//     console.log("clicked");
//     let d=text.toUpperCase();
//     settext(d);
//     props.showmealert("CONVERTED TO UPPER CASE","success");
//   }
      
//     const click1=()=>{
//       console.log("clicked");
//       let d=text.toLowerCase();
//       settext(d);
//       props.showmealert("CONVERTED TO LOWER CASE","success");
//     }
     
//   const eventchange=(event)=>{
//    settext(event.target.value);
//   }
//   return (
//       <>
  
//   <div className="container" style={{color: props.moded==='dark'?'white':'black'}}>
//     <div>
//     <label for="box" className="form-label">ENTER YOUR TEXT HERE</label>
//     <textarea className="form-control" id="box" value={text} rows="8" onChange={eventchange}></textarea>
//   </div>
//   <button type="button" className="btn btn-danger mx-2 my-3" onClick={click} >CONVERT TO UPPER CASE</button>
//   <button type="button" className="btn btn-danger mx-2 my-3" onClick={click1} >CONVERT TO LOWER CASE</button>


//   <div className="container my-4">
//     <h1>TEXT INFORMATION</h1>
//     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} WORDS AND {text.length} CHARACTERS</p>
//     <p>{text.split(" ").length*0.008} MINUTES WILL BE REQUIRED</p>
//     <h2>PREVIEW</h2>
//     <p>{text}</p>
//   </div>
//   </div>

// </>
//   );
// }