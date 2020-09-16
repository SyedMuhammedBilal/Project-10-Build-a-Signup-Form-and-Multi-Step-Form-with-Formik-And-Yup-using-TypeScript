import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Signup.css';


const SignupSchema = Yup.object().shape({
  
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
    password: Yup.string()
    .min(8, 'Password must be 8 characters long!')
    .max(50, 'Too long!')
    .required('Required'),
  
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Signup = (submit: any) => {
  return (
    <div className='form'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          password: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          submit(1)
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