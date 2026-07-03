"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("revoshop-user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(null);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        localStorage.setItem("revoshop-user", JSON.stringify(user));
      } else {
        localStorage.removeItem("revoshop-user");
      }
    }
  }, [user, isLoaded]);

  async function login(username, password) {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();

      const userRes = await fetch(`https://fakestoreapi.com/users`);
      const users = await userRes.json();
      const foundUser = users.find(u => u.username === username);

      if (foundUser) {
        setUser({ ...foundUser, token: data.token });
        return { success: true };
      }
      throw new Error("User not found");
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoaded,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
