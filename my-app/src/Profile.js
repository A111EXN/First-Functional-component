import React,{useState} from 'react'

function Profile({title,setTitle,quote,url}) {

const [myTitle,setMyTitle]=useState(title)





const changeTitle=()=>{
    setTitle("My Quotes")
}
const changeMyTitle=()=>{
    setMyTitle("My Quotes")
}



  return (
    <div className='profile-container'>
        <h1>{myTitle}</h1>
        <img src={url}/>
        <p>{quote}</p>
        <button onClick={changeTitle}>Change Parent's Title</button>
        <button onClick={changeMyTitle}>Change Own Title</button>
    </div>
  )
}

export default Profile