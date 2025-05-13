import api from "./api";
import { ProfileData } from "../types/user";
import { useUser } from "../context/UserContext";

// Login function
const login = async (
  email: string,
  password: string,
  setUser: (user: ProfileData | null) => void
) => {
  try {
    const res = await api.post("/login", { email, password });

    if (res.status === 200) {
      const profile = await fetchProfile();
      if (profile) {
        setUser(profile);
      }

      return { success: true, data: res.data };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message || "Login failed. Please try again.",
    };
  }
};

// Fetch profile function
const fetchProfile = async (): Promise<ProfileData | null> => {
  try {
    const res = await api.get("/authenticated/profile");

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Failed to fetch profile data");
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Failed to fetch profile data");
  }
};

// Save User to UserContext 
const saveUser = async (setUser: (user: ProfileData | null) => void) => {
  try {
    const profile = await fetchProfile();
    if (profile) {
      setUser(profile); 
    }
  } catch (err) {
    console.error("Failed to save user profile:", err);
  }
};

// Logout function
const logout = async (setUser: (user: ProfileData | null) => void) => {
  try {
    const res = await api.post("/authenticated/logout");

    if (res.status === 200) {
      setUser(null);
      return { success: true, message: res.data.message };
    } else {
      return { success: false, message: "Logout failed" };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || "Logout failed. Please try again.",
    };
  }
};

export { login, logout, fetchProfile, saveUser };