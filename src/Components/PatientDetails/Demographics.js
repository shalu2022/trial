// Demographics.js - Multi-Step Form: Doctor Test Report with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateDoctorTestReport, updatePatientDetails } from '../store/formSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const Demographics = ({ prevStep, nextStep }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      dob: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('email name is required'),
      dob: Yup.date().required('DOB is required').nullable(),
    }),
    onSubmit: (values) => {dispatch(updatePatientDetails({section: 'demographics', values}));    
    alert('Form submitted successfully!'); // Temporary feedback for submission
      nextStep();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', mt: 5 }}
    >
      <TextField
        label="D.O.B"
        name="dob"
        type="date"
        value={formik.values.dob}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.dob && Boolean(formik.errors.dob)}
        helperText={formik.touched.dob && formik.errors.dob}
        // required
      />
      <TextField
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        // required
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={prevStep}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Demographics;
