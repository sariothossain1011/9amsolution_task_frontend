import React from 'react'
import LoginForm from '../../components/form/LoginForm'

const SignInPage = () => {
  return (
    <>
      <div className=" bg-gray-200 font-sans min-h-[100vh] text-gray-700">
        <div className="container mx-auto p-10 ">
          <div className=" max-w-lg w-full mx-auto">
            <h1 className="text-4xl text-center mb-12 font-medium">9AM SOLUTION</h1>
            <LoginForm/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage