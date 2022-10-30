import React,{useState,useEffect} from 'react'
import Profile from './Profile'

function HomePage() {

const [title,setTitle] = useState("Quotes")
const [quoteOne,setQuoteOne] = useState('')
const [quoteTwo,setQuoteTwo] = useState('')
const [urlOne,setUrlOne] = useState('https://images.unsplash.com/photo-1627008119193-58dc96b6c1a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')
const [urlTwo,SetUrlTwo] = useState('https://images.unsplash.com/photo-1618603817351-f1634ddfd67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxqZG18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')


useEffect(()=>{
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(res=>res.json())
    .then(response=>{
       setQuoteOne(response.data[0].quoteText)
       setQuoteTwo(response.data[3].quoteText)
    })
    .catch(err=>console.log(err))
},[])



  return (
    <div className='homepage-container'>
        <h1>{title}</h1>
        <Profile title={title} setTitle={setTitle} quote={quoteOne} url={urlOne}/>
        <Profile title={title} setTitle={setTitle} quote={quoteTwo} url={urlTwo}/>
    </div>
  )
}

export default HomePage