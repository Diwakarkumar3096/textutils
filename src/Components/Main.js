import React,{useState} from 'react'

export default function Main(props) {
const [text, setText] = useState("");
// text = "fhwjvdbhjwembs"; wrong way 
// setText("vehgcdsbnvfehjds") correct way
    const upperClickHandler = () =>{
        console.log("UpperCase click");
       let newText = text.toUpperCase();
       setText(newText);
    }

    const lowerClickHandler = () =>{
        let newText = text.toLowerCase();
       setText(newText);
    }
    const clearClickHandler = () =>{
        setText("");
    }

    const textHandler = (e)=>{
        setText(e.target.value);
    }

  return (
    <>
      <div className="container">
      <h1>{props.heading}</h1>
        <div className="container">
            <textarea className="form-control" onChange={textHandler} value={text} rows="9"></textarea>
            <div className="container my-2">
                <button onClick={upperClickHandler} className="btn btn-primary mx-2">Convert to UpperCase</button>
                <button onClick={lowerClickHandler} className="btn btn-secondary mx-2">Convert to LowerCase</button>
                <button onClick={clearClickHandler} className="btn btn-warning mx-2">Convert to clearCase</button>
            </div>
            <div className="container">
                <h2>{props.previewHeading}</h2>
                <p>{text}</p>
                <div className="container">
                    <p>{text.split(" ").length} : Words, {text.length} : Characters</p>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}
