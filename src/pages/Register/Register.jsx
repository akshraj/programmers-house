import React, { useState } from 'react'
import './Register.css';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import arrow from '../../assets/arrow.png'
import telephone from '../../assets/telephone.png'
import flag from '../../assets/flag.png';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUsername from '../Steps/StepUsername/StepUsername';

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername
}

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const updateStep = () => {
    setStep(prev => prev + 1);
  }
  console.log(step);
  return (
    <div className="register">
      <Step updateStep={updateStep} />
    </div>
  )
}

export default Register