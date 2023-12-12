import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, push, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import 'firebase/auth';
    const firebaseConfig = {
        apiKey: "AIzaSyDOw9fYVylR__dqfyLExXOe_nv015ILk-k",
        authDomain: "info340naishla.firebaseapp.com",
        projectId: "info340naishla",
        storageBucket: "info340naishla.appspot.com",
        messagingSenderId: "39116129578",
        appId: "1:39116129578:web:37c3ef372d2ce0236e8a53"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function QuizForm({ userId }) {
    console.log("I got it:", userId);
    const [username, setUsername] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();

    const answers = {
      q1: parseInt(document.querySelector('input[name="q1"]:checked').value),
      q2: parseInt(document.querySelector('input[name="q2"]:checked').value),
      q3: parseInt(document.querySelector('input[name="q3"]:checked').value),
      q4: parseInt(document.querySelector('input[name="q4"]:checked').value),
      q5: parseInt(document.querySelector('input[name="q5"]:checked').value),
    };

    const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
    let skinType = 'Unknown';

    if (totalScore <= 7) {
      skinType = 'Dry';
    } else if (totalScore <= 12) {
      skinType = 'Normal';
    } else {
      skinType = 'Oily';
    }

    const database = getDatabase();
    const userResultsRef = ref(database, `quizResults/${uId}`);

    try {
      await push(userResultsRef, {
        username,
        answers,
        skinType,
        timestamp: Date.now(),
      });

      console.log('Quiz results saved to Firebase');
      // Redirect or perform any action after saving the quiz results
    } catch (error) {
      console.error('Error saving quiz results to Firebase:', error);
    }
  };
  return (
    <form id="skin-quiz" onSubmit={handleSubmit}>
      <div className="quiz-container">
        <div className="profile-tool-titles">
          <label htmlFor="username">
            <b> Name </b>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
                </div>
                <div className="question">
                    <p>1. How does your skin feel after cleansing?</p>
                </div>
                <div className="options">
                    <label For="q1a">
                        <input type="radio" id="q1a" name="q1" value="1" />
                        Tight and dry
                    </label>
                    <label For="q1b">
                        <input type="radio" id="q1b" name="q1" value="2"  />
                        Normal, not too oily or dry
                    </label>
                    <label For="q1c">
                        <input type="radio" id="q1c" name="q1" value="3" />
                        Oily
                    </label>
                </div>
                <div className="question">
                    <p>2. How often do you get shiny or greasy skin?</p>
                </div>
                <div className="options">
                    <label For="q2a">
                        <input type="radio" id="q2a" name="q2" value="1" />
                        Rarely or never
                    </label>
                    <label For="q2b">
                        <input type="radio" id="q2b" name="q2" value="2" />
                        Occasionally
                    </label>
                    <label For="q2c">
                        <input type="radio" id="q2c" name="q2" value="3" />
                        Often
                    </label>
                </div>
                <div className="question">
                    <p>3. Do you have visible pores on your face?</p>
                </div>
                <div className="options">
                    <label For="q3a">
                        <input type="radio" id="q3a" name="q3" value="1" />
                        Small or hardly visible
                    </label>
                    <label For="q3b">
                        <input type="radio" id="q3b" name="q3" value="2" />
                        Average-sized
                    </label>
                    <label For="q3c">
                        <input type="radio" id="q3c" name="q3" value="3" />
                        Large and noticeable
                    </label>
                </div>
                <div className="question">
                    <p>4. How does your skin react to sun exposure?</p>
                </div>
                <div className="options">
                    <label For="q4a">
                        <input type="radio" id="q4a" name="q4" value="1" />
                        It burns easily and rarely tans
                    </label>
                    <label For="q4b">
                        <input type="radio" id="q4b" name="q4" value="2" />
                        It tans gradually and rarely burns
                    </label>
                    <label For="q4c">
                        <input type="radio" id="q4c" name="q4" value="3" />
                        It tans quickly and rarely burns
                    </label>
                </div>
                <div className="question">
                    <p>5. How sensitive is your skin to skincare products or makeup?</p>
                </div>
                <div className="options">
                    <label For="q5a">
                        <input type="radio" id="q5a" name="q5" value="1" />
                        Very sensitive, often experiences redness or irritation
                    </label>
                    <label For="q5b">
                        <input type="radio" id="q5b" name="q5" value="2" />
                        Moderately sensitive, occasionally reacts
                    </label>
                    <label For="q5c">
                        <input type="radio" id="q5c" name="q5" value="3" />
                        Not very sensitive, rarely reacts
                    </label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}



export default QuizForm;


