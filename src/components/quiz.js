import React from 'react';

export function quiz(props){
        const typedvalue = ""
    
    const handleSubmit = (event) => {
        console.log("submit the form");
        console.log("post", typedValue);
        setTypedValue("")
        }
    }

return (
<form id="skin-quiz">
            <div class="personinfo">

            </div>
            <div class="question">
                <p>1. How does your skin feel after cleansing?</p>
            </div>
            <div class="options">
                <label>
                    <input type="radio" name="q1" value="a"> Tight and dry </input>
                </label>
                <label>
                    <input type="radio" name="q1" value="b"> Normal, not too oily or dry </input>
                </label>
                <label>
                    <input type="radio" name="q1" value="c"> Oily </input>
                </label>
            </div>
    
            
            <button type="button" >Submit</button>

        </form>
    )
