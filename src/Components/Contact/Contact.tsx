import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import '../Signup/Signup.css';
import { savedValues } from '../../Stepper/Stepper';

interface Props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>],
  handleNext: () => void
}

const ContactSchema = Yup.object().shape({
  message: Yup.string()
    .min(5, 'Too Short!')
    .max(10000, 'Too Long!')
    .required('Required')
});

const Contact:React.FC<Props> = ({ savedValues, handleNext }) => {
  return (
    <div className='form'>
      <Formik
        initialValues={{
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values) => {
          savedValues[1]({
            ...savedValues[0],
            message: values.message
          })
          handleNext()
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