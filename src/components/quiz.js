import React, { useState } from 'react';

export function QuizForm({setUserName}) {
    const [userName, setUserNameValue] = useState("");
    const [optionValues, setOptionValues] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
      });

    const handleNameChange = (event) => {
        setUserNameValue(event.target.value);
      }
    
      const handleOptionChange = (question, value) => {
        setOptionValues((prevValues) => ({
          ...prevValues,
          [question]: value,
        }));
      }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setUserName(userName);
        setUserNameValue('');
    };

    return (
        <form id="skin-quiz" onSubmit={handleSubmit} >
            <div className='quiz-container'>
            <div className="profile-tool-titles">
                <p> Name </p>
                <input name ='username' type='text' value={userName} onChange={handleNameChange}/>
            </div>
            <div className="question">
                <p>1. How does your skin feel after cleansing?</p>
            </div>
            <div className="options">
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={() => handleOptionChange("q1", "a")}
              checked={optionValues.q1 === "a"}
            />
            Tight and dry
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={() => handleOptionChange("q1", "b")}
              checked={optionValues.q1 === "b"}
            />
            Normal, not too oily or dry
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={() => handleOptionChange("q1", "c")}
              checked={optionValues.q1 === "c"}
            />
            Oily
          </label>
        </div>
            <div className="question">
                <p>2. How often do you get shiny or greasy skin?</p>
            </div>
            <div className="options">
                <label>
                    <input type="radio"
                    name="q2"
                    value="a"
                    onChange={() => handleOptionChange("q2", "a")}
                    checked={optionValues.q2 === "a"}/>
                    Rarely or never
                </label>
                <label>
                <input type="radio"
                    name="q2"
                    value="b"
                    onChange={() => handleOptionChange("q2", "b")}
                    checked={optionValues.q2 === "b"}/>
                    Occasionally
                </label>
                <label>
                <input type="radio"
                    name="q2"
                    value="c"
                    onChange={() => handleOptionChange("q2", "c")}
                    checked={optionValues.q2 === "c"}/>
                    Often
                </label>
            </div>
            
            <div className="question">
                <p>3. Do you have visible pores on your face?</p>
            </div>
            <div className="options">
                <label>
                <input type="radio"
                    name="q3"
                    value="a"
                    onChange={() => handleOptionChange("q3", "a")}
                    checked={optionValues.q3 === "a"}/>
                    Small or hardly visible
                </label>
                <label>
                <input type="radio"
                    name="q3"
                    value="b"
                    onChange={() => handleOptionChange("q3", "b")}
                    checked={optionValues.q3 === "b"}/>
                    Average-sized
                </label>
                <label>
                <input type="radio"
                    name="q3"
                    value="c"
                    onChange={() => handleOptionChange("q3", "c")}
                    checked={optionValues.q3 === "c"}/>
                    Large and noticeable
                </label>
            </div>
            <div className="question">
                <p>4. How does your skin react to sun exposure?</p>
            </div>
            <div className="options">
                <label>
                <input type="radio"
                    name="q4"
                    value="a"
                    onChange={() => handleOptionChange("q4", "a")}
                    checked={optionValues.q4 === "a"}/>
                    It burns easily and rarely tans
                </label>
                <label>
                <input type="radio"
                    name="q4"
                    value="b"
                    onChange={() => handleOptionChange("q4", "b")}
                    checked={optionValues.q4 === "b"}/>
                    It tans gradually and rarely burns
                </label>
                <label>
                <input type="radio"
                    name="q4"
                    value="c"
                    onChange={() => handleOptionChange("q4", "c")}
                    checked={optionValues.q4 === "c"}/>
                    It tans quickly and rarely burns
                </label>
            </div>
            <div className="question">
                <p>5. How sensitive is your skin to skincare products or makeup?</p>
            </div>
            <div className="options">
                <label>
                <input type="radio"
                    name="q5"
                    value="a"
                    onChange={() => handleOptionChange("q5", "a")}
                    checked={optionValues.q5 === "a"}/>
                    Very sensitive, often experiences redness or irritation
                </label>
                <label>
                <input type="radio"
                    name="q5"
                    value="b"
                    onChange={() => handleOptionChange("q5", "b")}
                    checked={optionValues.q5 === "b"}/>
                    Moderately sensitive, occasionally reacts
                </label>
                <label>
                <input type="radio"
                    name="q5"
                    value="c"
                    onChange={() => handleOptionChange("q5", "c")}
                    checked={optionValues.q5 === "c"}/>
                    Not very sensitive, rarely reacts
                </label>
            </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default QuizForm;


