// Redux slice for managing form data
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  patientDetails: {
    basicDetails:{
        name: '',
        age: '',
        gender: '',
    },
    legalDocuments:{
        idType: '',
        idNo: ''
    },
    demographics:{
        dob:'',
        email:''
    }
   
  },
  assignResources: {
    resourceType: '',
    resourceCount: '',
  },
  doctorTestReport: {
    testName: '',
    testResult: '',
    testDate: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePatientDetails: (state, action) => {
        const { section, values } = action.payload;
        if (state.patientDetails[section]) {
            state.patientDetails[section] = {
              ...state.patientDetails[section],
              ...values,
            };
          }
    },
    updateAssignResources: (state, action) => {
      state.assignResources = action.payload;
    },
    updateDoctorTestReport: (state, action) => {
      state.doctorTestReport = action.payload;
    },
    resetForm: () => initialState,
    submitFormData: (state) => {
        // Here you send the entire state to your backend
        const formData = {
          patientDetails: state.patientDetails,
          assignResources: state.assignResources,
          doctorTestReport: state.doctorTestReport,
        };

        // Sending the form data to the backend (using axios)
        fetch('/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Data submitted successfully:', data);
            })
            .catch((error) => {
              console.error('Error submitting data:', error);
            });
      },
  },
});

export const {
  updatePatientDetails,
  updateAssignResources,
  updateDoctorTestReport,
  resetForm,
  submitFormData
} = formSlice.actions;

export default formSlice.reducer;
