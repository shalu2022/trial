// Step1.js - Multi-Step Form: Patient Details with Nested Stepper
import React, { useState } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography } from '@mui/material';
import BasicDetails from '../../Components/PatientDetails/BasicDetails';
import LegalDocuments from '../../Components/PatientDetails/LegalDocuments';
import Demographics from '../../Components/PatientDetails/Demographics';

const nestedSteps = ['Basic Details', 'Legal Documents', 'Demographics'];

const FirstStep = ({ nextStep }) => {
  const [activeNestedStep, setActiveNestedStep] = useState(0);

  const nextNestedStep = () => setActiveNestedStep((prev) => prev + 1);
  const prevNestedStep = () => setActiveNestedStep((prev) => prev - 1);
  console.log("firstStep",  activeNestedStep)

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
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
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
      <Box sx={{ mt: 3 }}>{renderNestedStepContent(activeNestedStep)}</Box>
    </Box>
  );
};

export default FirstStep;
