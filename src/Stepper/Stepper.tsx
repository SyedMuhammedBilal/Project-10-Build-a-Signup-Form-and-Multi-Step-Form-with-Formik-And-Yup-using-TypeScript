import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Signup from '../Components/Signup/Signup';
import Contact from '../Components/Contact/Contact';

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
        
  function getStepContent(stepIndex: number, setStep: any) {
          switch (stepIndex) {
            case 0:
              return <Signup submit={setStep} />;
            case 1:
              return <Contact submit={setStep} />;
            case 2:
              return 'This is the bit I really care about!';
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
        getStepContent(activeStep, setActiveStep)
      }
    </div>
  );
};