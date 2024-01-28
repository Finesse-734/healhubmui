import React from 'react'
import UserNavPreLogin from '../Navbars/UserNavPreLogin'
import Carousel1 from './Carousel1'
import Info from './Info'
import Footer from '../../components/Footer'

const Landing = () => {
  return (
    <div>
      <UserNavPreLogin/>
      <Carousel1/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default Landing
