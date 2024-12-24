// BasicDetails.js - Multi-Step Form: Patient Details with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updatePatientDetails } from '../store/formSlice';
import { TextField, Button, Box, FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material';

const BasicDetails = ({ nextNestedStep }) => {
  const dispatch = useDispatch();
  const basicDtl = useSelector(state=>state.form?.patientDetails?.basicDetails)

  const formik = useFormik({
    initialValues: basicDtl,
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').matches(/^[A-Za-z ]+$/i, "Name should contain alphabets only", { excludeEmptyString: true }),
      age: Yup.number().required('Age is required').min(1, 'Age must be a positive number').max(150, 'Enter a valid age'),
      gender: Yup.string().required('Gender is required'),
    }),
    onSubmit: (values) => {
      dispatch(updatePatientDetails({section: 'basicDetails',
        values}));
      nextNestedStep();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', mt: 5 }}
    >      
      <TextField
        label="Name*"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        label="Age*"
        name="age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      />
     <FormControl
        fullWidth
        error={formik.touched.gender && Boolean(formik.errors.gender)}
      >
        <InputLabel id="gender-select-label">Gender*</InputLabel>
        <Select
          labelId="gender-select-label"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Gender"
          // required
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </Box>
  );
};

export default BasicDetails;
