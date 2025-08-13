import React,{useState, useEffect} from 'react'

const Home = () => {

    const [state, setState] = useState(2);
const [data, setData] = useState([]);
useEffect(() => {
      async function getData(){
        const get= await fetch(`https://dummyjson.com/users?limit=${state}&skip=0`);

        let res = await get.json();
        setData(res.users);
        console.log(res.users);
      }
      getData()
}, [state])


  return (
    <div className='home'>
       <button className='btn1' onClick={() => setState(state+2)}><h3>click me{state}</h3></button>
    {
     data.map((element, index) => {
        return (
            <div className='data1' key={index}>
          <h4>{element.firstName}</h4>
          <h4>{element.lastName}</h4>
          <h4>{element.age}</h4>
        </div>
     
        )
      })
    }
    </div>
  )
}

export default Home
