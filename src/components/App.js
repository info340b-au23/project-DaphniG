import React from 'react';
import NavBar from './NavBar.js';
import {ProductPage} from './ProductPage';
//import {QuizForm} from './components/quiz'
import { ProfileContainer } from './profile';

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
     <header className="product-name">
       <h1>Cleanser</h1>
       <h2>Pick a Cleanser</h2>
     </header>
     <main>
       <div className="container">
       <ProductPage />
       
       
       </div>
       {/* <div>
       <ProfileContainer/>
       </div> */}
     </main>
     <footer>
       <p>© 2023 George, Clement, Miranda</p>
     </footer>
   </div>
 );
}




