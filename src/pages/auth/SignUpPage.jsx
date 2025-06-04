import React from 'react'
import RegistrationForm from '../../components/form/RegistrationForm'

const SignUpPage = () => {
  return (
      <div className="bg-gray-200 w-ful min-h-[100vh] font-sans text-gray-700">
        <div className="container mx-auto p-10 flex">
          <div className="max-w-lg w-full mx-auto my-auto">
           <h1 className="text-4xl text-center mb-12 font-medium">9AM SOLUTION</h1>
            <RegistrationForm/>
          </div>
        </div>
      </div>
  )
}

export default SignUpPage