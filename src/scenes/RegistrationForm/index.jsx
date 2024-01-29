import { Box, Button, TextField, Typography, Divider, Checkbox, FormControlLabel} from '@mui/material';
import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialValues = {
    fullName:"",
    emailAddress:"",
    password:"",
    mobileNumber:"",
    aadharNumber:"",
    confirmPassword:""
}

const phoneRegExp = /^(\d{1,4}[ -]?|\(\d{2,3}\)[ -]?)?\d{7,10}$/;

const userSchema = yup.object().shape({
    fullName: yup.string().required("required"),
    emailAddress: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required").min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password must contain at least one uppercase letter, one lowercase letter, and one digit"),
    mobileNumber: yup.string().matches(phoneRegExp, "Invalid mobile number").required("required"),
    aadharNumber: yup.string().matches(/^[0-9]{12}$/, "Invalid Aadhar number").required("required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("required"),
  });
  
const Form = () => {
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
                Register Account
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <Box>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues = {initialValues}
                    validationSchema={userSchema}
                >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Box 
                                display="grid" 
                                gap="1.5rem" 
                                gridTemplateColumns="repeat(4, 42%)"
                                sx = {{
                                    "& > div": {gridColumn: isNonMobile ? undefined: "span 2"}
                                }}
                            >
                                <Box sx = {{gridColumn:"span 2"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Your fullname*
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Full Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.fullName}
                                    name = "fullName"
                                    error={!!touched.fullName && !!errors.fullName}
                                    helperText={touched.fullName}
                                    sx = {{gridColumn:"span 2", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);"}}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 2" }}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Email Address*
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
                                    sx = {{gridColumn:"span 2", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 2"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Create a Password*
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
                                    sx = {{gridColumn:"span 2", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 2"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Mobile number*
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
                                    sx = {{gridColumn:"span 2", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 2"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Confirm your password*
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Confirm Password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.confirmPassword}
                                    name = "confirmPassword"
                                    error={!!touched.confirmPassword && !!errors.confirmPassword}
                                    helperText={touched.confirmPassword}
                                    sx = {{gridColumn:"span 2", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 2"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Aadhar Number*
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Aadhar Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.aadharNumber}
                                    name = "aadharNumber"
                                    error={!!touched.aadharNumber && !!errors.aadharNumber}
                                    helperText={touched.aadharNumber}
                                    sx = {{gridColumn:"span 2", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                            </Box>

                            <Box>
                                        <FormControlLabel
                                            required control = {<Checkbox/>}
                                            label = "I agree to terms & conditions"
                                        />
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="center" mt="20px" ml="40%"sx={{gridColumnStart:"2", width:"100%"}}>
                                    <Button type="submit" size="large" variant="contained" sx={{width:"100%"}}>
                                        Register Account
                                    </Button>
                                    <Box display="flex" alignItems="center">
                                            <Divider sx={{ flexGrow: 1 }} />
                                            <Typography variant="body1" sx={{ px: 2 }}>
                                            OR
                                            </Typography>
                                            <Divider sx={{ flexGrow: 1 }} />
                                    </Box>
                                    <Button type="submit" size="large" variant="contained" sx={{width:"100%"}}>
                                        Register with Google
                                    </Button>
                                </Box>
                        </form>
                        
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default Form;