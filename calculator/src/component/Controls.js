
import React, { useState } from 'react'


function Controls({set_value,c_value}) {
    const [firstV,setfirstV]=useState(0);
    const [operation, setopertion]=useState("");

    var value=c_value;
    const handleClick=(btn)=>{
        var btnvalue= btn.target.textContent; 
        //check operation btn not pressed
        if(operation===""){                   
            set_value(value+btnvalue); 
        }
        //add value to current value
        else{                     
             set_value(value+btnvalue); 
        }
        //+/- convert value to negative and vice versa
        if(btnvalue=="+/-"){
            set_value(-value)
        }
    }
    const handleMaster=(btn)=>{
        var btnvalue=btn.target.textContent;
        if(btnvalue==='AC'){
            set_value("");
        }
        if(btnvalue==='C'){
            set_value("");
        }
        if(btnvalue=='='){
        var secondValue=c_value;       
          if(operation=='+'){          
            set_value(Number(firstV)+Number(secondValue));
           }
           if(operation=='-'){          
            set_value(Number(firstV)-Number(secondValue));
           }
           if(operation=='x'){          
            set_value(Number(firstV)*Number(secondValue));
           }
           if(operation=='/'){          
            set_value(Number(firstV)/Number(secondValue));
           }
           if(operation=='%'){          
            set_value(Number(firstV)%Number(secondValue));
           }          
        }
    }
    const handleOperation=(btn)=>{
        var btnvalue=btn.target.textContent;
        setfirstV(c_value);
        set_value("");
        if(btnvalue=='+'){           
           setopertion("+");            
        }
        if(btnvalue== '-'){            
            setopertion("-");
        }
        if(btnvalue== 'X'){            
            setopertion("x");            
        }
        if(btnvalue== '/'){          
            setopertion("/");           
        }
        if(btnvalue== '%'){
            setopertion("%");
        }
    }
    console.log(firstV);
   
    return (
        <div>
            <table className='form-control'>
                <tr className='row col-lg-12'>
                    <td className='col-lg-3'><button className='btn btn-outline-primary' onClick={handleMaster}>C</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary'  onClick={handleMaster} >AC</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary'  onClick={handleClick}>%</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary'  onClick={handleOperation}>/</button></td>
                </tr>
                <tr className='row col-lg-12'>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>7</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>8</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>9</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleOperation}>X</button></td>
                </tr>
                <tr className='row col-lg-12'>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>4</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>5</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>6</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleOperation}>-</button></td>
                </tr>
                <tr className='row col-lg-12'>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>1</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>2</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>3</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleOperation}>+</button></td>
                </tr>
                <tr className='row col-lg-12'>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>+/-</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>0</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleClick}>.</button></td>
                    <td className='col-lg-3'><button className='btn btn-outline-primary ' onClick={handleMaster}>=</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Controls