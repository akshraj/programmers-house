import React, { useState } from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'

const steps = {
  1: StepPhoneEmail,
  2: StepOtp
}

const Signin = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step]
  const updateStep = () => {
    setStep(prev => prev + 1);
  }
  return (
    <div>
      <Step updateStep={updateStep} />
    </div>
  )
}

export default Signin