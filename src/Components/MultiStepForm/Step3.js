// Step3.js - Multi-Step Form: Doctor Test Report with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { submitFormData, updateDoctorTestReport, resetForm} from '../store/formSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const Step3 = ({ prevStep }) => {
  const dispatch = useDispatch();
  const doctorTestReportDtl = useSelector(state=>state.form?.doctorTestReport)

  const formik = useFormik({
    initialValues: doctorTestReportDtl,
    enableReinitialize: true,
    validationSchema: Yup.object({
      testName: Yup.string().required('Test name is required'),
      testResult: Yup.string().required('Test result is required'),
      testDate: Yup.date().required('Test date is required'),
      remark: Yup.string().nullable(),
    }),
    onSubmit: (values) => {
      dispatch(updateDoctorTestReport(values));
      alert('Form submitted successfully!'); // Temporary feedback for submission
      dispatch(submitFormData())
      dispatch(resetForm())
      formik.resetForm();
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
       <TextField
        label="Remark"
        name="remark"
        value={formik.values.remark}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.remark && Boolean(formik.errors.remark)}
        helperText={formik.touched.remark && formik.errors.remark}
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
