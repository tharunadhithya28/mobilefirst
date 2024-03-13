import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [items,setItems] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
        const fetchJokes = async () => {
            const response = await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
            const data = await response.json()
            const {jokes} = data 
            console.log(jokes)
            setItems(jokes)
        }

        fetchJokes()
    },[])

    const logoutClicked = () => {
        navigate("/")
    }

  return (
    <>
    <h1 className='text-center mt-5'> Laughter is the Best Medicine </h1>
    <div >
    <table class="table mt-5 mx-2">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category </th>
      <th scope="col">Joke </th>
    </tr>
  </thead>
  <tbody>
   {items.map((eachItem) => {
    const idNum = items.indexOf(eachItem) + 1
    return (
<tr>
      <th> {idNum} </th>
      <td> {eachItem.category} </td>
      <td> {eachItem.joke}</td>
    </tr>
    )
   }   
)}
  </tbody>
</table>
<div className='m-5'>
  <button className='btn btn-primary' onClick={logoutClicked}> Logout </button>
</div>
    </div>
    </>
  )
}

export default Home