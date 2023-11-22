import React, { useState } from 'react';

export function QuizForm(props) {
    const [typedValue, setTypedValue] = useState(""); 

    const handleChange = (event) => {
        setTypedValue(event.target.value); 
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault(); 
    //     console.log("submit the form");
    //     console.log("post", typedValue);
    //     setTypedValue(""); 
    // }

    return (
        <form id="skin-quiz" >
            <div className='quiz-container'>
            <div className="profile-tool-titles">
                <p> Name </p>
                <input name ='username' type='textarea'/>
            </div>
            <div className="question">
                <p>1. How does your skin feel after cleansing?</p>
            </div>
            <div className="options">
                <label>
                    <input type="radio" name="q1" value="a" onChange={handleChange} checked={typedValue === "a"} />
                    Tight and dry
                </label>
                <label>
                    <input type="radio" name="q1" value="b" onChange={handleChange} checked={typedValue === "b"} />
                    Normal, not too oily or dry
                </label>
                <label>
                    <input type="radio" name="q1" value="c" onChange={handleChange} checked={typedValue === "c"} />
                    Oily
                </label>
            </div>
            <div class="question">
                <p>2. How often do you get shiny or greasy skin?</p>
            </div>
            <div class="options">
                <label>
                    <input type="radio" name="q2" value="a"/>  Rarely or never
                </label>
                <label>
                    <input type="radio" name="q2" value="b"/> Occasionally
                </label>
                <label>
                    <input type="radio" name="q2" value="c"/>  Often
                </label>
            </div>
            
            <div class="question">
                <p>3. Do you have visible pores on your face?</p>
            </div>
            <div class="options">
                <label>
                    <input type="radio" name="q3" value="a"/> Small or hardly visible
                </label>
                <label>
                    <input type="radio" name="q3" value="b"/>  Average-sized
                </label>
                <label>
                    <input type="radio" name="q3" value="c"/> Large and noticeable
                </label>
            </div>
            <div class="question">
                <p>4. How does your skin react to sun exposure?</p>
            </div>
            <div class="options">
                <label>
                    <input type="radio" name="q4" value="a"/>  It burns easily and rarely tans
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/>  It tans gradually and rarely burns
                </label>
                <label>
                    <input type="radio" name="q4" value="c"/> It tans quickly and rarely burns
                </label>
            </div>
            <div class="question">
                <p>5. How sensitive is your skin to skincare products or makeup?</p>
            </div>
            <div class="options">
                <label>
                    <input type="radio" name="q4" value="a"/>  Very sensitive, often experiences redness or irritation
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/>  Moderately sensitive, occasionally reacts
                </label>
                <label>
                    <input type="radio" name="q4" value="c"/> Not very sensitive, rarely reacts
                </label>
            </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default QuizForm;
