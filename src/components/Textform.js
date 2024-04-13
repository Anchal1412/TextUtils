import React, { useState } from 'react'

export default function Textform(props) {
    const handleFormat = () => {
        let newtext =  text.replace(/\. /g, '.\n');

  // Adjust spacing by removing extra spaces
  newtext = newtext.replace(/\s+/g, ' ');

  // Indent paragraphs by adding a tab character at the beginning
  newtext = newtext.replace(/\n/g, '\n\t');

  // Capitalize the first letter of each sentence
  newtext = newtext.replace(/(^\w|[\.\!\?]\s+\w)/g, (match) => match.toUpperCase());
        setText(newtext);
        props.showalert("Formated", "success");
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to upper case", "success");
    }
    const handleloClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lower case", "success");

    }
    const handleclearClick=()=>{    
        let newtext='';
        setText(newtext);
        props.showalert("Text cleared!", "success");
    }
    const handlecopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard!", "success");
    }
    const handleextraspace=()=>{
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra space removed!", "success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
                    color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleFormat}>Format</button>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleextraspace}>handle extraspace</button>
            
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter somthing in the textbox above to Preview it here"}</p>
            </div>
        </>
    )
}
