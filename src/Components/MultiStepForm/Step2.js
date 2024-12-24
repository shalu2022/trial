// Step2.js - Multi-Step Form: Assign Resources with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssignResources } from '../store/formSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const Step2 = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const assignResDtl = useSelector(state=>state.form?.assignResources)


  const formik = useFormik({
    initialValues: assignResDtl,
    validationSchema: Yup.object({
      resourceType: Yup.string().required('Resource type is required'),
      resourceCount: Yup.number()
        .required('Resource count is required')
        .min(1, 'Resource count must be at least 1'),
    }),
    onSubmit: (values) => {
      dispatch(updateAssignResources(values));
      nextStep();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', mt: 5 }}
    >
      <Typography variant="h5" textAlign="center">
        Assign Resources
      </Typography>
      <TextField
        label="Resource Type"
        name="resourceType"
        value={formik.values.resourceType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.resourceType && Boolean(formik.errors.resourceType)}
        helperText={formik.touched.resourceType && formik.errors.resourceType}
        // required
      />
      <TextField
        label="Resource Count"
        name="resourceCount"
        type="number"
        value={formik.values.resourceCount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.resourceCount && Boolean(formik.errors.resourceCount)}
        helperText={formik.touched.resourceCount && formik.errors.resourceCount}
        // required
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={prevStep}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
