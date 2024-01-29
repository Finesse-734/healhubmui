import { Box, Button, TextField, Typography, Divider, Checkbox, FormControlLabel} from '@mui/material';
import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialValues = {
    otp: ""
}
const otpSchema = yup.object().shape({
    otp : yup.string().required("required"),
  });
  
const OtpVerify = () => {
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
                OTP Verification
            </Typography>
            <Typography
                variant='h7'
                sx={{marginTop:"20px"}}
            >
                For the purpose of security OTP verification is required.
                <br></br>
Enter the 6-digit code sent to your Email and your Mobile no.
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <Box>
                { <Formik
                    onSubmit={handleFormSubmit}
                    initialValues = {initialValues}
                    validationSchema={otpSchema}
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
                                    Enter the OTP*
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="OTP"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.otp}
                                    name="otp"
                                    error={!!touched.otp && !!errors.otp}
                                    helperText={touched.otp}
                                    inputProps={{
                                        maxLength: 6,
                                        pattern: '[0-9]*', 
                                    }}
                                    sx={{
                                        gridColumn: "span 2",
                                        borderRadius: "6px",
                                        boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)",
                                    }}
                                    />

                                </Box>
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="center" mt="20px" ml="40%"sx={{gridColumnStart:"2", width:"100%"}}>
                                    <Button type="submit" size="large" variant="contained" sx={{width:"100%"}}>
                                        Continue
                                    </Button>
                                </Box>
                        </form>
                        
                    )}
                </Formik>}
            </Box>
        </Box>
    )
}

export default OtpVerify;