// Step3.js - Multi-Step Form: Doctor Test Report with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { submitFormData, updateDoctorTestReport } from '../store/formSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const Step3 = ({ prevStep }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      testName: '',
      testResult: '',
      testDate: '',
    },
    validationSchema: Yup.object({
      testName: Yup.string().required('Test name is required'),
      testResult: Yup.string().required('Test result is required'),
      testDate: Yup.date().required('Test date is required').nullable(),
    }),
    onSubmit: (values) => {
      dispatch(updateDoctorTestReport(values));
      alert('Form submitted successfully!'); // Temporary feedback for submission
      dispatch(submitFormData())
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', mt: 5 }}
    >
      <Typography variant="h5" textAlign="center">
        Doctor Test Report
      </Typography>
      <TextField
        label="Test Name"
        name="testName"
        value={formik.values.testName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.testName && Boolean(formik.errors.testName)}
        helperText={formik.touched.testName && formik.errors.testName}
        // required
      />
      <TextField
        label="Test Result"
        name="testResult"
        value={formik.values.testResult}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.testResult && Boolean(formik.errors.testResult)}
        helperText={formik.touched.testResult && formik.errors.testResult}
        // required
      />
      <TextField
        label="Test Date"
        name="testDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.testDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.testDate && Boolean(formik.errors.testDate)}
        helperText={formik.touched.testDate && formik.errors.testDate}
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

export default Step3;
