import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormInputs = {
  name: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().nullable().required("Name is required"),
  lastname: Yup.string().nullable().required("Lastname is required"),
  phoneNumber: Yup.string().required("Phone number is required")
  .length(10, "Please enter a valid mobile number."),
  email: Yup.string().nullable().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[^a-z0-9]+/i, "password must be alphanumeric")
    .max(20, "password must be no more than 20 characters"),
  passwordConfirm: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')  
});

function RegisterForm() {

  const router = useForm();
  const { register, formState, handleSubmit } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log({ email: data.email, password: data.password });


  // const router = useRouter();
  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [phoneNum, setPhoneNum] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   setName("");
  //   setLastname("");
  //   setPhoneNum("");
  //   setEmail("");
  //   setPassword("");
  //   setPasswordConfirm("");
  //   console.log(name, lastname,phoneNum, email, password);

  //   alert("Başarıyla kaydedildi..");
  };

  return (
    <div className="w-full max-w-sm">
      <form
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            {...register("name")}
            autoComplete="off"
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.name?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Lastname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Lastname"
            {...register("lastname")}
            autoComplete="off"
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.lastname?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            autoComplete="off"
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.phoneNumber?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
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
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="****************"
            {...register("password")}
            autoComplete="off"
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.password?.message}
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordConfirm"
          >
            Password Confirm
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="****************"
            {...register("passwordConfirm")}
            autoComplete="off"
          />
          <p className="text-red-500 text-xs italic">
            {formState.errors.passwordConfirm?.message}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // onClick={() => router.push("/Home")}
          >
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
