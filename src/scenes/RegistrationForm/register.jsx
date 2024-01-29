import React from 'react'
import RegNavBar from '../Navbars/registrationNavBar'
import Form from '../RegistrationForm/index.jsx'
import OtpVerify from './OtpVerify.jsx'
import AddDetails from './additionalDetails.jsx'
import UserLogin from './userLogin.jsx'
import { Box, Avatar } from '@mui/material'

const Register = () => {
  return (
    <Box>
      <RegNavBar/>
      <Box display="flex" flexDirection="row">
        <Box
        display="flex"
        width= "45%"
        height="auto"
        >
        <img alt="Logo" src="./images/bg-overlay.png" width={"100%"} height={"115%"} margin={"0"}/>
        </Box>
        <Box
            display="flex"
            width= "55%"
            height="auto"
        >
        {/* <Form/> */}
        {/* <OtpVerify/> */}
        {/* <AddDetails/> */}
        {/* <UserLogin/> */}
        </Box>
        
      </Box>
    </Box>
  )
}

export default Register;
