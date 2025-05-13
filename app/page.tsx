"use client";

import React, { useState, useEffect } from "react";
import Button from "../components/elements/Button";
import TextBox from "../components/elements/TextBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { login, checkAuth } from "./utils/auth";
import { useUser } from "./context/UserContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const HomePage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

   useEffect(() => {
    const authenticateUser = async () => {
      const { authenticated } = await checkAuth();
      if (authenticated) {
        router.push("/Dashboard");
      } else {
        router.push("/");
      }
    };

    authenticateUser();
  }, []);
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setError("");
      setLoading(true);

      const result = await login(values.email, values.password, setUser);

      if (result.success) {
        router.push("/Dashboard");
      } else {
        setError(result.message);
      }

      setLoading(false);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <div className="text-red-600 mb-2">{error}</div>}

        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-3">
          <div className="relative flex flex-col">
            <TextBox
              labelText="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              type="email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-sm ml-2">{formik.errors.email}</div>
            )}
          </div>
          <div className="relative flex flex-col">
            <TextBox
              labelText="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              type={showPassword ? "text" : "password"}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-sm ml-2">{formik.errors.password}</div>
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex justify-center items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
