// Step1.js - Multi-Step Form: Patient Details with Nested Stepper
import React, { useState } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography, Paper } from '@mui/material';
import BasicDetails from '../PatientDetails/BasicDetails';
import LegalDocuments from '../PatientDetails/LegalDocuments';
import Demographics from '../PatientDetails/Demographics';

const nestedSteps = ['Basic Details', 'Legal Documents', 'Demographics'];

const Step1 = ({ nextStep }) => {
  const [activeNestedStep, setActiveNestedStep] = useState(0);

  const nextNestedStep = () => setActiveNestedStep((prev) => prev + 1);
  const prevNestedStep = () => setActiveNestedStep((prev) => prev - 1);

  const renderNestedStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicDetails nextNestedStep={nextNestedStep} />;
      case 1:
        return <LegalDocuments nextNestedStep={nextNestedStep} prevNestedStep={prevNestedStep} />;
      case 2:
        return <Demographics prevNestedStep={prevNestedStep} nextStep={nextStep}/>;
      default:
        return <BasicDetails nextNestedStep={nextNestedStep} />;
    }
  };

  return (
    <Paper>
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 2 , p:3}}>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Patient Details
      </Typography>
      <Stepper activeStep={activeNestedStep} alternativeLabel>
        {nestedSteps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 1 }}>{renderNestedStepContent(activeNestedStep)}</Box>
    </Box>
      </Paper>
  );
};

export default Step1;
