// App.js - Main Application Component
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
// import MultiStepForm from './Components/MultiStepForm/Step1'; // Adjust the import based on form navigation
import FormNavigation from './Components//MultiStepForm/FormNavigation';
import { Container } from '@mui/material';

const App = () => {
  return (
    <div  style={{backgroundColor:'#F4F2F0', height:'100vh'}}>
      <Navbar />
      <Container maxWidth="lg" >
      <Routes>
        <Route path="/" element={<div>Welcome to the Dashboard</div>} />
        <Route path="/patient-register" element={<FormNavigation />} />
        {/* <Route path="/patient-register" element={<MultiStepForm />} /> */}
        <Route path="/patient-data" element={<div>Patient Data Page</div>} />
        <Route path="/operation-theater" element={<div>Operation Theater Page</div>} />
        <Route path="/reports" element={<div>Reports Page</div>} />
      </Routes>
      </Container>

    </div>
  );
};

export default App;
