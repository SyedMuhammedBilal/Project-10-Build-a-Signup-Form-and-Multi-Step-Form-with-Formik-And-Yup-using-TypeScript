import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Signup from '../Components/Signup/Signup';
import Contact from '../Components/Contact/Contact';
import Submit from '../Components/Submit/Submit';

export interface savedValues {
  firstName: string,
  lastName: string,
  email: any,
  message: string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Your Info', 'Your Message', 'Sent  '];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const savedValues = React.useState({ firstName: '', lastName: '', email: '', message: '' });
  console.log(savedValues[0]);

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <Signup savedValues={savedValues} handleNext={handleNext} />;
      case 1:
        return <Contact savedValues={savedValues}  handleNext={handleNext} handleBack={handleBack} />;
      case 2: 
        return <Submit savedValues={savedValues} handleBack={handleBack} />
      default:
        return 'Error ';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper style={{background: '#131419'}} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        getStepContent(activeStep)
      }
    </div>
  );
};