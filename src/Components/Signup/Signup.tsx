import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Signup.css';
import { savedValues } from '../../Stepper/Stepper';

interface Props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>],
  handleNext: () => void
};

const SignupSchema = Yup.object().shape({
  
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Signup:React.FC<Props> = ({ savedValues, handleNext }) => {
  return (
    <div className='form'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: ''
        }}
        
        validationSchema={SignupSchema}
        
        onSubmit={(values) => {
          savedValues[1]({
            ...savedValues[0],
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          })
          handleNext()
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete='off' className='Form'>
            <h1>Signup</h1>
            <Field
              name="firstName"
              className='inputBox'
              placeholder='First Name'
            />
            {
              errors.firstName && touched.firstName ? (
                <div style={{ color: '#ff0047' }}>{errors.firstName}</div>
              ) : null
            }
            <Field
              name="lastName"
              className='inputBox'
              placeholder='Last Name'
            />
            {
              errors.lastName && touched.lastName ? (
                <div style={{ color: '#ff0047' }}>{errors.lastName}</div>
              ) : null
            }
            <Field
              name="email"
              type="email"
              className='inputBox'
              placeholder='Email'
            />
            {
              errors.email && touched.email ? <div style={{ color: '#ff0047' }}>{errors.email}</div> : null
            }
            <button type="submit" className='sign-btn'>Signup</button>
            <p className='forget'>Forgot Password? <i>Click here</i></p>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default Signup;