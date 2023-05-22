import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                    <button disabled={text.length ===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length ===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                    <button disabled={text.length ===0} className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text</button>
                    <button disabled={text.length ===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy text</button>
                    <button disabled={text.length ===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} minutes to read</p>
            </div>
        </>
    )
} 
