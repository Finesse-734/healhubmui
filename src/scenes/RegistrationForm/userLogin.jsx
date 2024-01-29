import { Box, Button, TextField, Typography, Divider, Checkbox, FormControlLabel} from '@mui/material';
import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialValues = {
    emailAddress:"",
    password:"",
    mobileNumber:""
}

const phoneRegExp = /^(\d{1,4}[ -]?|\(\d{2,3}\)[ -]?)?\d{7,10}$/;

const userLoginSchema = yup.object().shape({
    emailAddress: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required").min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password must contain at least one uppercase letter, one lowercase letter, and one digit"),
    mobileNumber: yup.string().matches(phoneRegExp, "Invalid mobile number").required("required"),
  });
  
const UserLogin = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const handleFormSubmit = (values) =>{
        console.log(values);
    }
    return(
        <Box m="20px">
            <Box marginBottom={"20px"}>
            <Typography 
            variant='h1'
            style={{
                fontWeight: 700,
            }}
            >
                User Login
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <Box>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues = {initialValues}
                    validationSchema={userLoginSchema}
                >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Box 
                                display="grid" 
                                gap="1.5rem" 
                                gridTemplateColumns="repeat(4, 75%)"
                                sx = {{
                                    "& > div": {gridColumn: isNonMobile ? undefined: "span 2"}
                                }}
                            >
                                <Box sx = {{gridColumn:"span 4" }}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Email Address
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email Address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.emailAddress}
                                    name = "emailAddress"
                                    error={!!touched.emailAddress && !!errors.emailAddress}
                                    helperText={touched.emailAddress}
                                    sx = {{gridColumn:"span 4", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 4"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="password"
                                    label="Enter Password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.password}
                                    name = "password"
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password}
                                    sx = {{gridColumn:"span 4", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 4"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Mobile number
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Mobile Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.mobileNumber}
                                    name = "mobileNumber"
                                    error={!!touched.mobileNumber && !!errors.mobileNumber}
                                    helperText={touched.mobileNumber}
                                    sx = {{gridColumn:"span 4", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                            </Box>
                            <Box alignItems="center">
                                    <Button type="submit" size="large" variant="contained" sx={{width:"200%", marginTop:"20%"}}>
                                        Finish
                                    </Button>
                            </Box>
                        </form>
                        
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default UserLogin;