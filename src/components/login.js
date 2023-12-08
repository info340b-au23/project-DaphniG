import React from 'react';

export function Login(){

    return(
        <form id="user-login">
            <div className='logincontainer'>
            <div className='header-container'>
                <div className='userloginwelcome'>
                    <h1> Login </h1>
                </div>
            
            <div className='infofillcontainer'>
                <label for="usrname"><b> Username </b></label>
                <input type="text" placeholder='Username' name="usrname" required></input>

                <label for="passwrd"><b> Password </b></label>
                <input type="text" placeholder='Passward' name="passwrd" required></input>

            </div>
            <button type="submit">Login</button>
            </div>
            </div>

        </form>
        

    );
}


export default Login;