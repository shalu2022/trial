# Project Name Shalu

## Overview
This is a React.js application designed as per the provided requirements. The app uses **Create React App (CRA)** for setup, **Redux Toolkit** for state management, and **Material UI** for styling. The application includes a top navigation bar, multi-step forms, and proper validation for form inputs.

## Features
- Top menu bar with dropdowns for specific sections.
- Multi-step forms for data entry.
  - Patient Details with sub-steps: Basic Details, Legal Documents, and Demographics.
  - Assign Resources.
  - Doctor Test Report.
- Input validation using Formik and Yup.
- State management with Redux Toolkit.
- Responsive UI styled with Material UI.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shalu2022/trial.git
   cd trial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Build for Production
To create a production build, run:
```bash
npm run build
```
The build files will be generated in the `build` folder.

### Linting
To check for linting issues, run:
```bash
npm run lint
```

## Approach

### Application Structure
- **Create React App (CRA)**: Provides a simple and robust setup for React projects.
- **Redux Toolkit**: Manages global state, including form data across steps.
- **Formik & Yup**: Simplify form handling and input validation.
- **React Router DOM**: Provides navigation and routing.
- **Material UI**: Ensures a responsive and visually appealing design.

### Component-Based Design
The application is broken into reusable components:
- `Navbar`: Handles top navigation with dropdown menus.
- `MultiStepForm`: Contains steps for data entry.
- `PatientDetails`: Includes sub-steps for Basic Details, Legal Documents, and Demographics.

### State Management
- Redux Toolkit is used to store and manage form data.
- Each form step updates the state, allowing seamless navigation with data persistence.

### Validation
- Formik with Yup ensures each input field is validated for correctness.
- Errors are displayed inline, enhancing user experience.

### Styling
- Material UI provides utility-first styling for rapid development.
- Components are responsive and adhere to modern design principles.


## Deployment
The app can be easily deployed using services like Netlify or Vercel. For example:
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your hosting provider.

---

Thank you for reviewing this project! Let me know if you have any questions or feedback.
