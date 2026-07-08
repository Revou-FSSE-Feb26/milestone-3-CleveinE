import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  // Call FakeStoreAPI for auth
  const authRes = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (!authRes.ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const { token } = await authRes.json();

  // Get user details from FakeStoreAPI
  const usersRes = await fetch("https://fakestoreapi.com/users");
  const users = await usersRes.json();
  const user = users.find(u => u.username === username);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  // Create session cookie (httpOnly)
  const response = NextResponse.json({ user });
  response.cookies.set("session", JSON.stringify({ user, token }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 // 1 day
  });

  return response;
}
