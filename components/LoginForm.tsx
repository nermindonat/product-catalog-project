import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import loginImage from "../assets/logo.png"
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

//   Access-Control-Allow-Origin: *

type FormInputs = {
  email: string;
  password: string;
};
const basePath = "https://assignment-api.piton.com.tr/api/v1/user/login";
// const loginApi = '/api/v1/user/login'
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lcm1pbkB0ZXN0LmNvbSIsImlhdCI6MTY2NzIxMzM2MiwiZXhwIjoxNjkzMTMzMzYyfQ.q8L1W7aKQZp_cGLY5l1y7-awjvxqC2Y5IWS-wFEVdtM";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    // .matches(/[^a-z0-9]+/i, "password must be alphanumeric")
    .max(20, "password must be no more than 20 characters"),
});

function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log({ email: data.email, password: data.password });
  };

  axios
    .post(basePath, {
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": '*',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });

  const handleChange = (e: any, data: any) => {
    data[e.target.id] = e.target.value;
  };

  // const handleClick = (e:any) => {
  //   e.preventDefault();
  //   router.push('/Home')
  // }

  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center justify-center">
        <Image src={loginImage} className="object-cover h-20 w-40" alt="" />
      </div>
      <form
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e, login);
            }}
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.email?.message}
          </p>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register("password")}
            placeholder="***************"
            onChange={(e) => {
              handleChange(e, login);
            }}
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.password?.message}
          </p>
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
            className="bg-[#4F46E5] hover:bg-blue-700 text-white font-bold py-2 px-4 
            rounded focus:outline-none focus:shadow-outline"
            type="submit"
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
