import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import '../Signup/Signup.css';

const ContactSchema = Yup.object().shape({
  message: Yup.string()
    .min(5, 'Too Short!')
    .max(10000, 'Too Long!')
    .required('Required')
});

const Contact = ({submit}:any) => {
  return (
    <div className='form'>
      <Formik
        initialValues={{
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values) => {
          submit(2)
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='Form'>
            <h1>Your Message</h1>
            <Field 
              className='inputBox'
              name='message'
              placeholder='Message...'
            ></Field>
            {
              errors.message && touched.message ? (
                <div style={{ color: '#ff0047' }}>{errors.message}</div>
              ) : null
            }
            <button type="submit" className='sign-btn'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;