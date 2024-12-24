// FormNavigation.js - Multi-Step Form Navigation with MUI Linear Stepper
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Stepper, Step, StepLabel, Box, Button, Typography } from '@mui/material';
import FirstStep from './FirstStep';

const steps = ['Patient Details', 'Assign Resources', 'Doctor Test Report'];

const FormNavigation = () => {
  const [activeStep, setActiveStep] = useState(0);
  console.log("fomNav",  activeStep)

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstStep nextStep={nextStep} />;
      case 1:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <Step3 prevStep={prevStep} />;
      default:
        return <FirstStep nextStep={nextStep} />;
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
      <Typography variant="body1" fontSize={24} textAlign="center" sx={{mb:3, color:'#7E7E7E'}}>
              Register a new patient
      </Typography>
      <Stepper activeStep={activeStep} nonLinear  >
        {steps.map((label, index) => (
          <Step  key={index} sx={{backgroundColor: activeStep == index && '#848D5E', borderRadius:'20px', paddingY:'8px'}}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Box sx={{ mt: 3 }}>{renderStepContent(activeStep)}</Box>
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        {activeStep > 0 && (
          <Button variant="outlined" onClick={prevStep}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 && (
          <Button variant="contained" color="primary" onClick={nextStep}>
            {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
          </Button>
        )}
      </Box> */}
    </Box>
  );
};

export default FormNavigation;
