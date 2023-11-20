import React from 'react';



export function ProfileContainer(props){

    return(
        <div>
            <p> hello</p>
            <ProfileHeader/>
            <SkinProgress/>
            <SkinCalender/>
        </div>
    )
};

function ProfileHeader(props){
    return(
        <div className="flex-container">
        <section className="flex-item">

        <div>
        <img className='imgself' src="project\img\cleanser2.png" alt="girl looking into the camera"/>

        </div>

        <div>
        <h1> Hello Jane Doe!</h1>
        <p> Skin Type: Dry Combination</p>
        <p> Skin Concerns: Dryness, Blemishes</p>

        </div>
        </section>
        </div>
    )
};
function SkinProgress(props){

    return(
        <main className="flex-main">

    <div className="flexrows">
        <h2> Skin Progress</h2>
    <section className="flex-item">
        <div className="flexcard">
            <img className="imgself" src="img/progress 1.jpg" alt="girl washing face"/>
        <p> July 13, 2022</p>
        </div>
        <div className="flexcard">
        <img className="imgself" src="img/progress2.jpg" alt="girl wiping face with cotten round"/>
        <p> January 23, 2023</p>
        </div>
        <div className="flexcard">
            <img className="imgself" src="img/progress3.jpg" alt="girl smiling at camera and applying products to face"/>
        <p> July 13, 2022</p>
        </div>
        <div className="flexcard">
            <img className="imgself" src="img/progress4.webp" alt="girl with acne"/>
        <p> December 13, 2021 </p>
        </div>
    </section>
    </div>
    </main>
    )
};

function SkinCalender(props){

    return(
        <h1>
            hi
        </h1>
    )
};