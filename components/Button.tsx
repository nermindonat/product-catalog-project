import Link from "next/link";
import React from "react";

function Button() {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        passHref
      >
        Sign In
      </Link>

      <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  );
}

export default Button;
