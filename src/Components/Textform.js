import React, {useState} from 'react'

export default function Textform(props) {
    const handleup = () =>{
        console.log('uppercase clicked'+text)
        let nt=text.toUpperCase();
        setText(nt)
        props.showAlert("Uppercase converted",'success')
    }
    const onHandle = (evevt)=>{
        console.log('on handle clicked')
        setText(evevt.target.value)

    }
    const clear = () =>{
        setText(" ")
        props.showAlert("cleared",'success')
    }
    const handlelow = () =>{
        let nt = text.toLowerCase();
        setText(nt)
        props.showAlert("Lowercase converted",'success')
    }
    const [text,setText] = useState("Enter your text here")
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'#122f4f'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={onHandle} style={{backgroundColor : props.mode === 'dark'?'#122f4f':'white',color : props.mode === 'dark'?'white':'#122f4f'}} id="mybox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleup}>Convert to up</button>
        <button className='btn btn-primary  mx-3' onClick={handlelow}>Convert to low</button>
        <button className='btn btn-primary  mx-3' onClick={clear}>clear</button>
    </div>
    <div className="container my-3"  style={{color : props.mode === 'dark'?'white':'#122f4f'}}>
        <h3>Summary</h3>
        <p>Your summary has {text.split(" ").length} words {text.length} chars..</p>
        <p>Time to read the entered word is {0.008 * text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
