import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

function LoginForm() {
  const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (e:any) => {
  //   e.preventDefault();
  //   setEmail("");
  //   setPassword("");
  //   console.log(email, password);

  //   alert("Anasayfaya yönlendiriliyor.")
  // }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
});
const formOptions = { resolver: yupResolver(validationSchema) };
console.log(formOptions);
// get functions to build form with useForm() hook
const { register, reset, formState } = useForm(formOptions);
const { errors } = formState;

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  
}
// function onSubmit(data: any) {
//     // display form data on success
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//     return false;


  return (
        <div className="w-full max-w-sm">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline {`form-control ${errors.password ? 'is-invalid' : ''}`}"
              id="email"
              type="email"
              placeholder="Email"
              {...register('email')}   
            />
            <div className="invalid-feedback">{errors.email?.message?.toString()}</div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
              {`form-control ${errors.password ? 'is-invalid' : ''}`}"
              id="password"
              type="password"
              {...register('password')}
              // placeholder="******************"  
            />
            <div className="invalid-feedback">{errors.email?.message?.toString()}</div>
            
            {/* <p className="text-red-500 text-xs italic">
              Please enter a password.
            </p> */}
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Beni hatırla
            </label>
          </div>
         
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'
              onClick={() => router.push('/Home')}
              
            >
              Giriş Yap
            </button>
  
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
  );
}

export default LoginForm;

