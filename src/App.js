import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [subject,subjectchange] = useState(["CS 1","Python", "ReactJS" ]);
let [like, likechange]= useState(0);

function changesubject(){
  var newArray = [...subject]; 
  newArray[0]="CS 2";
  subjectchange(newArray);
}
  return (
    <div className="App">
      <div className="black-nav">
        <div>CS Blog</div>
      </div>
      <button onClick={changesubject}>change</button>
      <div className="list">
        <h3> {subject[0]} <span onClick={()=>{likechange(like+1)}}>π</span> {like} </h3>
        <p> 3/12 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {subject[1]} </h3>
        <p> 3/13 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {subject[2]} </h3>
        <p> 3/14 </p>
        <hr/>
      </div>
      <Modal/>


    </div>
  );
}
//μ»΄ν¬λνΈ λ§λ€κΈ°: μ μ μ¬ν­ μ΄λ¦μ λκ΄νΈ, return()μμ νλμ νκ·Έλ‘ λ¬ΆκΈ°
function Modal(){
  return(
    <div className='modal'>
        <h2> Title </h2>
        <p>Date</p>
        <p>paragraph</p>
      </div>
  )
}



export default App;
