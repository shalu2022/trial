// BasicDetails.js - Multi-Step Form: Patient Details with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updatePatientDetails } from '../store/formSlice';
import { TextField, Button, Box } from '@mui/material';

const BasicDetails = ({ nextNestedStep }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      age: Yup.number().required('Age is required').min(1, 'Age must be a positive number'),
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
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        // required
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
        // required
      />
      <TextField
        label="Gender"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
        // required
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </Box>
  );
};

export default BasicDetails;
