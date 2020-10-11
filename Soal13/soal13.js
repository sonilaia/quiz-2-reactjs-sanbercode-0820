import React from 'react'
import "../App.css"


export default function Card(){
    const data = [
    {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, 
    {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, 
    {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"}, 
    {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
]

    return(
        <div className="profile">            
            {data.map((profile, index) => (
                <div className="card">
                    <img src= {profile.photo} alt="img"/>
                    <p>
                        {profile.name} <br/>
                        {profile.profession} <br/>
                        {profile.age} years old
                    </p>
                </div>
            ))}
        </div>        
    )
}

// ==============Kode CSS=============
// .profile{
// 	max-width: 50%;
// 	margin: 100px auto;
// 	display: inline-flex;
// }

// .card{
// 	min-width: 40%;
// 	border: 1px solid black;
// 	border-radius: 10px;
// 	padding: 0px;
// 	margin: 30px 30px 30px 0;
// }

// .card p {
// 	padding-left: 10px;
// }

// .card img{
// 	width: 100%;
// 	border-top-left-radius: 10px;
// 	border-top-right-radius: 10px;
// 	height: 200px;
// 	object-fit: cover;
// }