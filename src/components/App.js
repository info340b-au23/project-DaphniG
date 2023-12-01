import React from 'react';
import NavBar from './NavBar.js';
import {ProductPage} from './ProductPage';
import {QuizForm} from './quiz.js';
import { ProfileContainer } from './profile';
import {ProductContainer } from './product-routine.js';
import {Login} from './login.js'
import { Routes,  Route } from 'react-router-dom';


// export default function App(props) {
    
//     return (
//     <div>
//     <ProfileContainer/>
//     </div> 
//     )
// };

export default function App(props) {
 return (
   <div>
     <NavBar />
     <main>
          <Routes>
          <Route path="/" element={<ProductContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/product" element={<ProductContainer />} />
            <Route path="/quiz" element={<QuizForm />} />
          </Routes>
        </main>
     <footer>
       <p>© 2023 George, Clement, Miranda</p>
     </footer>
   </div>
 );
}




