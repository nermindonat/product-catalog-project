import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";

function loginForm() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <Input />
        <div className="flex items-center justify-between">
          <Link
            className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            href={""}
            onClick={() => router.push("/Home")}
          >
            Giriş Yap
          </Link>

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

export default loginForm;
