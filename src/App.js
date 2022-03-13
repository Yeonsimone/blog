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
        <h3> {subject[0]} <span onClick={()=>{likechange(like+1)}}>👍</span> {like} </h3>
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
//컴포넌트 만들기: 유의 사항 이름은 대괄호, return()안에 하나의 태그로 묶기
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
