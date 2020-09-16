import React from 'react'
import '../Signup/Signup.css';
import { savedValues } from '../../Stepper/Stepper';

interface Props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>],
  handleBack: () => void
}

const Submit: React.FC<Props> = ({savedValues, handleBack}) => {
  console.log(savedValues[0]);
  return (
    <div className='form'>
      <div className='Form'>
        <h1>Thanks for your Query</h1>
        <p style={{color: '#c7c7c7'}}>Name: {savedValues[0].firstName} {savedValues[0].lastName}</p>
        <p style={{color: '#c7c7c7'}}>Email: {savedValues[0].email} </p>

        <h1>Your Message</h1>
        <p style={{color: '#c7c7c7'}}>Message: {savedValues[0].message}</p>
        <button type="submit" className='sign-btn'>Submit</button>
        <button onClick={handleBack} type="button" className='sign-btn'>Back</button>
      </div>
    </div>
  )
}

export default Submit;