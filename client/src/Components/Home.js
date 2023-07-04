import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import "../Assets/Styles/home.scss"
const Home = () => {
  const userData = useSelector(state => state.userData);
  console.log(userData)
  return (
    <div className='home'>
      <div className='imgSection'>

      </div>
      <div className='infoSection'>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
      </div>
    </div>
  )
}

export default Home