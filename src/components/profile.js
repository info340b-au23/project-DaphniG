import React, { useState }  from 'react';


import  SavedProducts  from "./SavedProducts";
import Progresssquares from './progress';
// import TodoInput from './Calendar';
import TodoList from './ToDoList';



export function ProfileContainer(props){

    return(
        <div>
     
            <ProfileHeader/>
            <SkinProgress/>
            <SkinCalender/>
            <SavedDataProducts />

        </div>
    )
};

function ProfileHeader(props){
    return(
        <header> 
        <div className="flex-container center-container">
        <section className="flex-item">
        
        <div>
        <img className='imgself' 
        src="https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png" alt="girl looking into the camera"/>

        </div>

        <div className='headertxt'>
        <h1> Hello Jane Doe!</h1>
        <p> Skin Type: Dry Combination</p>
        <p> Skin Concerns: Dryness, Blemishes</p>

        </div>
        </section>
        </div>
        </header>
    )
};
function SkinProgress(props){
    const skinprogressinfo = [
        { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt:'pic of cleanser', date:"02/11/2023" },
        { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt:'pic of cleanser', date:"02/11/2023" },
        { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt:'pic of cleanser', date:"02/11/2023" },
    ]

        return (
            <div>
              {/* Render the SavedProducts component and pass the productsavedlist as a prop */}
              <Progresssquares skinprogressinfo={skinprogressinfo} />
              {/* Additional content or components can be added here */}
            </div>
          );
        }


function SkinCalender(props){
    const [todos1] = useState([]);
    const [todos2] = useState([]);
    const [todos3] = useState([]);
    const [todos4] = useState([]);

    // const handleAddTodo = (newTodo, setTodos) => {
    //     setTodos((prevTodos)=>[...prevTodos, newTodo]);
    // };
    return(
    <div className='flexrow'>
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
    //     <div class="flexrows">
    //     <h2> Skin Cycling Calender</h2>
    // <section class="flex-item">
    //     <div class="flexcal">
    //     <p> Day 1</p>
    //         <ul>
    //             <li>cleanser</li>
    //             <li>Toner</li> 
    //             <li>Vitamin C Serum</li> 
    //             <li>Moisturizer</li> 
    //             <li>Sunscreen</li> 
    //             <li>Cleanser</li> 
    //             <li>Exfoliation</li>
    //             <li>Toner</li>  
    //             <li>Eye Cream</li> 
    //             <li>Moisturizer</li> 
    //         </ul> 
    //     </div>
    //     <div class="flexcal">
    //     <p> Day 2</p>
    //     <ul><li>cleanser</li>
    //         <li>Toner</li> 
    //         <li>Vitamin C Serum</li> 
    //         <li>Moisturizer</li> 
    //         <li>Sunscreen</li> 
    //         <li>Cleanser</li> 
    //         <li>Exfoliation</li>
    //         <li>Toner</li>  
    //         <li>Eye Cream</li> 
    //         <li>Moisturizer</li> 
    //     </ul> 
    //     </div>

    //     <div class="flexcal">
    //     <p> Day 3</p>
    //     <ul>
    //         <li>cleanser</li>
    //         <li>Toner</li> 
    //         <li>Vitamin C Serum</li> 
    //         <li>Moisturizer</li> 
    //         <li>Sunscreen</li> 
    //     </ul> 
    //     </div>
    //     <div class="flexcal">
    //         <p> Day 4</p>
    //         <ul><li> Rest</li> </ul> 
    //     </div>
    // </section>
    // </div>
    )
};


function SavedDataProducts(props) {
    const productsavedlist = [
      { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt:'pic of cleanser' },
      { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt: 'Alt text 2' },
      { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt: 'Alt text 3' },
      { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt: 'Alt text 2' },
      { url: 'https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png', alt: 'Alt text 3' },
    ];


    return (
      <div>
        <h2 className="profile-tool-titles">Saved Products</h2>
        {/* Render the SavedProducts component and pass the productsavedlist as a prop */}
        <SavedProducts productsavedlist={productsavedlist} />
        {/* Additional content or components can be added here */}
      </div>
    );
  }