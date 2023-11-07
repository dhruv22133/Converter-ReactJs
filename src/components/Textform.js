import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleclickuppar = () => {
        if (text === null);
        else {
            setText(text.toUpperCase());
        }
    }
    const textchange = (event) => {
        setText(event.target.value);
    }
    const handleclicklower = () => {
        setText(text.toLowerCase());
    }
    const titlecase = () => {
        if(text.length <= 0 || (text.length === 1 && text[text.length -1] === " ")){return}
        let str;
        if (text[text.length - 1] === " ") {
            str = text.slice(0,-1);
            str = str.split(' ');
            for (let i = 0; i < str.length; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
            }
        }
        else {
            str = text.split(' ');
            for (let i = 0; i < str.length; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
            }
        }
        // let str = text.split(' ');
        // for (let i = 0; i < str.length; i++) {
        //     str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
        // } 
        setText(str.join(" "));

    }

    return (
        <>
            <h1 className='my-3' style={{ color: props.dark === 'dark' ? 'white' : 'black' }}> {props.heading}</h1>
            <div className="mb-3" style={{ color: props.dark === 'dark' ? 'white' : 'black' }}>
                <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.dark === 'light' ? 'dark' : 'light'}`}>Text Area</label>
                <textarea className={`form-control text-${props.dark === 'dark' ? 'white' : 'black'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={textchange} style={{ background: props.dark === 'dark' ? 'black' : 'white' }}></textarea>
                <button type="button" className={`btn btn-${props.dark} , my-3`} onClick={handleclickuppar} >UPPAR CASE</button>
                <button type="button" className={`btn btn-${props.dark} , my-3 , mx-3`} onClick={handleclicklower} >lower case</button>
                <button type="button" className={`btn btn-${props.dark} , my-3 `} onClick={titlecase} >Title Case</button>
                <button type="button" className={`btn btn-${props.dark} , my-3 , mx-3`} onClick={() => { return setText(text.split("").reverse().join("")) }} >esreveR</button>
                <button type="button" className={`btn btn-${props.dark} , my-3`} onClick={() => { setText("") }} >Clear</button>
            </div>
            <div className="container" style={{ color: props.dark === 'dark' ? 'white' : 'black' }} >
                <h2>Text Summary</h2>
                <p>{text.split(" ").length - 1} words, {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
