import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';


import SavedProducts from "./SavedProducts";
import Progresssquares from './progress';
// import TodoInput from './Calendar';
import TodoList from './ToDoList';

//images//
import userprofile from "./img/profilepic.webp";
import progress1 from "./img/progress1.jpg";
import progress2 from "./img/progress2.jpg";
import progress3 from "./img/progress3.jpg";
import cleanserImage from './img/cleanser1.png';
import cleanserImage2 from './img/cleanser2.png';
import cleanserImage3 from './img/cleanser3.png';
import cleanserImage4 from './img/cleanser4.png';



export function ProfileContainer({ userName }) {
    const [skinType, setSkinType] = useState('Unknown');
    useEffect(() => {
        // Fetch user's skin type from Firebase when the component mounts
        const auth = getAuth();
        const user = auth.currentUser;
    
        if (user) {
          const userId = user.uid;
          const database = getDatabase();
          const userRef = ref(database, `users/${userId}`);
    
          get(userRef).then((snapshot) => {
            const userData = snapshot.val();
            if (userData && userData.skinType) {
              setSkinType(userData.skinType);
            }
          }).catch((error) => {
            console.error('Error fetching user data:', error);
          });
        }
      }, [userName]);

    return (
        <div>

            <ProfileHeader userName={userName} skinType={skinType}/>
            <SkinProgress />
            <SkinCalender />
            <SavedDataProducts />

        </div>
    )
};

function ProfileHeader({ userName,  skinType  }) {
    return (
        <header>
            <div className="flex-container center-container">
                <section className="flex-item">

                    <div>
                        <img className='imgself'
                            src={userprofile} alt="girl looking into the camera" />

                    </div>

                    <div className='headertxt'>
                        <h1> Hello {userName}! </h1>
                        <p> Skin Type:{skinType}</p>
                        <p> Skin Concerns: Dryness, Blemishes</p>

                    </div>
                </section>
            </div>
        </header>
    )
};
function SkinProgress(props) {
    const skinprogressinfo = [
        { url: progress1, alt: 'pic of cleanser', date: "02/11/2023" },
        { url: progress2, alt: 'pic of cleanser', date: "02/11/2023" },
        { url: progress3, alt: 'pic of cleanser', date: "02/11/2023" },
    ]


    return (
        <div>
            {/* Render the SavedProducts component and pass the productsavedlist as a prop */}
            <Progresssquares skinprogressinfo={skinprogressinfo} />
            {/* Additional content or components can be added here */}
        </div>
    );
}


function SkinCalender(props) {
    const [todos1] = useState([]);
    const [todos2] = useState([]);
    const [todos3] = useState([]);
    const [todos4] = useState([]);

    // const handleAddTodo = (newTodo, setTodos) => {
    //     setTodos((prevTodos)=>[...prevTodos, newTodo]);
    // };
    return(
    <div className='todo-flexrow scrollmenu'>
        <div className="todo-container">
            <h2>Day 1</h2>
            <TodoList todos={todos1} />
        </div>
             {/* Second set of TodoInput and TodoList */}
        <div className="todo-container">
        <h2>Day 2</h2>
            {/* <TodoInput onAddTodo={(newTodo) => handleAddTodo(newTodo, setTodos2)} /> */}
            <TodoList todos={todos2} />
        </div>
        <div className="todo-container">
        <h2>Day 3</h2>
            {/* <TodoInput onAddTodo={(newTodo) => handleAddTodo(newTodo, setTodos3)} /> */}
            <TodoList todos={todos3} />
        </div>
        <div className="todo-container">
        <h2>Day 4</h2>
            {/* <TodoInput onAddTodo={(newTodo) => handleAddTodo(newTodo, setTodos4)} /> */}
            <TodoList todos={todos4} />
        </div>
      
        </div>

    )
};


function SavedDataProducts(props) {
    const productsavedlist = [
        { url: cleanserImage, alt: 'pic of cleanser' },
        { url: cleanserImage2, alt: 'pic of cleanser' },
        { url: cleanserImage3, alt: 'pic of cleanser' },
        { url: cleanserImage4, alt: 'pic of cleanser' },
        { url: cleanserImage2, alt: 'pic of cleanser' },
    ];


    return (
        <div className='scrollmenu'>
            <h2 className="profile-tool-titles">Saved Products</h2>
            {/* Render the SavedProducts component and pass the productsavedlist as a prop */}
            <SavedProducts productsavedlist={productsavedlist} />
            {/* Additional content or components can be added here */}
        </div>
    );
}