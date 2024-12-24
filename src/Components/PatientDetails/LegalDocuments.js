// LegalDocuments.js - Multi-Step Form: Assign Resources with Formik
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssignResources, updatePatientDetails } from '../store/formSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const LegalDocuments = ({ nextNestedStep, prevNestedStep }) => {
  const dispatch = useDispatch();
  const legalDocs = useSelector(state=>state.form?.patientDetails?.legalDocuments)

  const formik = useFormik({
    initialValues: legalDocs,
    validationSchema: Yup.object({
      idType: Yup.string().required('Resource type is required'),
      idNo: Yup.number()
        .required('Resource count is required')
        .min(1, 'Resource count must be at least 1'),
    }),
    onSubmit: (values) => {
    dispatch(updatePatientDetails({section: 'legalDocuments', values}));    
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
        label="ID Type"
        name="idType"
        value={formik.values.idType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idType && Boolean(formik.errors.idType)}
        helperText={formik.touched.idType && formik.errors.idType}
        // required
      />
      <TextField
        label="ID No."
        name="idNo"
        type="number"
        value={formik.values.idNo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idNo && Boolean(formik.errors.idNo)}
        helperText={formik.touched.idNo && formik.errors.idNo}
        // required
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={prevNestedStep}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default LegalDocuments;
