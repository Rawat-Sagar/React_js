/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Heading from './Heading';
// import List from './List'
// import App from './App.jsx';
// import food,{myPlace, streetfood} from './Impexp';
import reportWebVitals from './reportWebVitals';


// JSX
// Render : one element only , for multiple jsx elements to use wrap inside it div.
// use in version before 16.0.0.
// Expressions in JSX.
// flow : javascript-->html-->JS{}.
// Template literals.

// const fname = "Sagar";
// const lname = "Rawat";
// const currDate = new Date().toLocaleDateString();
// const currTime  = new Date().toLocaleTimeString();
// const img1 = "https://cdn.pixabay.com/photo/2021/02/18/21/05/woman-6028423_1280.jpg";
// const links = "https://www.youtube.com/"

// React Challenge
// let cDate = new Date();
// cDate = cDate.getHours();
// let greetings = ' ';
// const cssStyle = { };
// if(cDate >=1 && cDate<12)
// {
//     greetings = 'Good Morning';
//     cssStyle.color = 'green';
// }
// else if (cDate>=12 && cDate <16)
// {
//     greetings = 'Good Afternoon' ; 
//     cssStyle.color = 'orange';
// }
// else if(cDate >=17 && cDate<19)
// {
//     greetings = 'Good Evening';
//     cssStyle.color = 'blue';
// }
// else{
//     greetings = 'Good Night';
//     cssStyle.color = 'black';
// }

ReactDOM.render(
<>
{/* <h1>Hello World! Welcome to future</h1>
<h2>Normal way using div tag</h2>
<h3>{fname+ " "+lname} is print using JSX Expressions.</h3>
<h3>{`${fname} ${lname} is print using Template literals`} </h3>
<h3>{Math.random()} is my lucky number.</h3>
<h1>Hii are you and this is so good.</h1>
<h2>I am Good@@@</h2> */}

{/* Challenge Time */}

{/* <h3>Current Time is = {currDate} </h3>
<h3>Current Time is = {currTime} </h3> */}

{/* Html Attributes VS Jsx Attributes*/}

{/* <h1 contentEditable = "true">I am Superhero</h1>
<a href={links} target='_'><img src={img1} /></a> */}

{/* CSS styling in React JS*/}

{/* <h1 className="heading">Css styling</h1>
<div className="img_div">
<img  src="https://picsum.photos/200/320"/>
<img  src="https://picsum.photos/250/320"/>
<img  src="https://picsum.photos/240/320"/>
</div> */}

{/* Inline CSS Styling style={heading} where heading is const and have all property
use kebab case
*/}

{/* <h1 style={{color:'orange',textAlign:'center',margin:'50px',textTransform:'capitalize'}}>Inline CSS Styling</h1> */}

{/* React Challenge */}

{/* <h1>Hello Sir , <span style={cssStyle}>{greetings}</span></h1> */}

{/* React Components */}
{/* <br/>
<>
<Heading/>
<List/>
</> */}

{/* React 2nd Component Challenge */}
{/* <>
<br/><br/><br/>
    <App/>
</> */}

{/* Import Export in React js */}
{/* <>
<li>I like <b>{food}</b> very much</li>
<li>Favourite street food is <b>{streetfood}</b></li>
<li>Favourite Place is <b>{myPlace()}</b></li>
</> */}

</>,
document.getElementById('root')
);



// Another Way of render ...
// ReactDOM.render(
//     [
//     <h1>Hello World! Welcome to future.</h1>,
//     <h2>Array way of element in render.</h2>,
//     ],
//       document.getElementById('root')
//     );

// React Fragment: in console there is no unsusal div seen 
// can also be written as <> .... </> only .
// ReactDOM.render(
//     <React.Fragment>  
//     <h1>Hello World! Welcome to future</h1>
//     <h2>Normal way using React.Fragment tag</h2>
//     </React.Fragment>,
//       document.getElementById('root')
//     );




    
// babel version:
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello World!"), document.getElementById('root'));

// Pure Javascript:
// var h1 = document.createElement("h1");
// h1.innerHTML = "Sagar Rawat";
// document.getElementById('root').appendChild(h1);



// git init
// git add -A
// git commit -m 'Added my project'
// git remote add origin git@github.com:sammy/my-new-project.git
// git push -u -f origin master


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
