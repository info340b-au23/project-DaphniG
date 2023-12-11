

import React, { useState } from 'react';
import NavBar from './NavBar.js';
import {QuizForm} from './quiz.js';
import { ProfileContainer } from './profile';
import {ProductContainer } from './product-routine.js';
import ProductPage  from './ProductPage.js';
import {Login} from './login.js'
import { Routes,  Route } from 'react-router-dom';


export default function App(props) {
  const [userName, setUserName] = useState('Guest');
 return (
   <div>
     <NavBar />
     <main>
          <Routes>
            <Route path="/" element={<ProductContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileContainer userName={userName}/>} />
            <Route path="/product" element={<ProductContainer />} />
            <Route path="/quiz" element={<QuizForm setUserName={setUserName}/>} />
            <Route path="/ProductPage" element={<ProductPage />} />
          </Routes>
        </main>
     <footer>
       <p>© 2023 George, Clement, Miranda</p>
     </footer>
   </div>
 );
}