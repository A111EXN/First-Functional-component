import React,{useState} from 'react'

function Header() {

const [username,setUsername] = useState("Bobby Chan");
const [imageUrl,setImageUrl] = useState("https://images.unsplash.com/photo-1627008119193-58dc96b6c1a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")

const changeUser=()=>{
    setUsername("Billy Bob")
    setImageUrl("https://images.unsplash.com/photo-1618603817351-f1634ddfd67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxqZG18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")


}


  return (
    <div className='header-container'>
        <div className='header-profile'>
        <p>{username}</p>
        <img className='profile-img' src={imageUrl}/>
        </div>
        <button onClick={changeUser}>Change User</button>


    </div>
  )
}

export default Header