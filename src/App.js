import React,{useState} from "react";

    

const App =()=>{
    const[num1, setNum1] = useState("");
    const[num2, setNum2] =useState("");
    const[result, setResult] = useState("");
    // const[error, setError] = useState(false);

    function typeNum1(e){
        setNum1(e.target.value);

        e.preventDefault();
    }
    function typeNum2(e){
        setNum2(e.target.value);
        e.preventDefault();
    }


    function Add(e){
        setResult(Number(num1+num2))  ;
        
        console.log(num1, num2);
        e.preventDefault();
    }
    function Sub(e){
        setResult(Number(num1-num2))  ;
      
        e.preventDefault();
    }
    function Mul(e){
        setResult(Number(num1*num2))  ;
 
        e.preventDefault();
    }
    function Div(e){
        setResult(Number(num1/num2))  ;
        
        e.preventDefault();
    }
    
    return(
        <div className="container">
             <form className="form">
                <h1>React Calculator </h1>
                <input onChange={typeNum1} type="number" placeholder="Num 1"/> <br/>
                <input onChange={typeNum2}  type="number" placeholder="Num 1"/>
                 <div className="btn"> <button onClick={Add}>+</button> <button onClick={Sub}>-</button> <button onClick={Mul}>*</button> <button onClick={Div}>/</button></div>
                 {/* {num1? <h1>Error</h1>:""} */}
                 {/* {result? <h2>Result : {result}</h2>:""} */}
                 {result !== "" &&
        ((num1 === "" && (
          <div className="error-message">
            <h3>Error!</h3>
            <p>Error: Num1 is empty</p>
          </div>
        )) ||
          (num2 === "" && (
            <div className="error-message">
                <h3>Error!</h3>
              <p>Error: Num2 is empty</p>
            </div>
          )) || (
            <div className="success-message">
              <h3 className="success">successful</h3>
              <p>Result: {result}</p>
            </div>
          ))}
             </form>
             
        </div>
    )
}

export default App;