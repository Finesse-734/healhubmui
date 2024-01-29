import { Box, Button, TextField, Typography, Divider, MenuItem, FormControl, Select, InputLabel} from '@mui/material';
import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialValues = {
    address:"",
    gender:"",
    age:"",
}


const addDetailSchema = yup.object().shape({
    address: yup.string().required("required"),
    age: yup.string().required("required"),
    gender: yup.string().required("required")
  });
  
const AddDetails = () => {
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
                Additional Details Required
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <Box>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues = {initialValues}
                    validationSchema={addDetailSchema}
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
                                <Box sx = {{gridColumn:"span 3"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Address
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.address}
                                    name = "address"
                                    error={!!touched.address && !!errors.address}
                                    helperText={touched.address}
                                    sx = {{gridColumn:"span 3", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);"}}
                                />
                                </Box>
                                <Box sx = {{gridColumn:"span 3" }}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Gender
                                </Typography>
                                {/* <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Gender"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.gender}
                                    name = "gender"
                                    error={!!touched.gender && !!errors.gender}
                                    helperText={touched.gender}
                                    sx = {{gridColumn:"span 3", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                /> */}
                                <FormControl fullWidth sx={{ gridColumn: "span 3", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}>
                                
                                <Select
                                    labelId="gender-label"
                                    id="gender"
                                    name="gender"
                                    label="Gender"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.gender}
                                    error={!!touched.gender && !!errors.gender}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                                </FormControl>
                                </Box>
                                <Box sx = {{gridColumn:"span 3"}}>
                                <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2}}>
                                    Age
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="age"
                                    label="Age"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.age}
                                    name = "age"
                                    error={!!touched.age && !!errors.age}
                                    helperText={touched.age}
                                    inputProps={{
                                        maxLength: 2,
                                        pattern: '[0-9]*', 
                                    }}
                                    sx = {{gridColumn:"span 3", borderRadius: "6px", boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11);" }}
                                />
                                </Box>
                            </Box>
                                    <Button type="submit" size="large" variant="contained" sx={{width:"100%", marginTop:"10%"}}>
                                        Finish
                                    </Button>
                        </form>
                        
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default AddDetails;