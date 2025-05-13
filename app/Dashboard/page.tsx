"use client";

import React, { useEffect  } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";
import Button from "@elements/Button";
import TextBox from "@elements/TextBox"; 
import { logout } from "../utils/auth"; 

const Dashboard = () => {
  const { user, isLoading, setUser } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const res = await logout(setUser);
    if (res.success) {
      router.push("/");
    } else {
      console.error(res.message); 
    }
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/"); 
    }
  }, [isLoading, user, router]);

  if (!user) 
    return null;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-cyan-300 to-sky-600 gap-6 px-4">
      <div className="px-7 py-6 shadow bg-white rounded-md flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-2xl font-bold">Profile</h2>

        <TextBox
          labelText="First Name"
          name="firstName"
          value={user.firstName}
          disabled
        />
        <TextBox
          labelText="Last Name"
          name="lastName"
          value={user.lastName}
          disabled
        />
        <TextBox
          labelText="Email"
          name="email"
          value={user.email}
          disabled
        />
        <TextBox
          labelText="Phone Number"
          name="phoneNumber"
          value={user.phoneNumber}
          disabled
        />
        <TextBox
          labelText="Address"
          name="address"
          value={user.address}
          disabled
        />
      </div>

      <Button type="button" onClick={handleLogout} className="w-full max-w-md">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
