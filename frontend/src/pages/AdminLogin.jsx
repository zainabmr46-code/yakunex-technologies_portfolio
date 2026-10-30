import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <section className="w-full max-w-md rounded-2xl boarder border-slate-800 bg-slate-900 p-8">
          <Link to="/" className="text-sm text-slate-400 hover:text-gold">
            &larr; Back to website
          </Link>

          <p className="mt-8 text-sm tracking-widest text-gold">
            Yakunex Technologies
          </p>

          <h1 className="mt-3 text-3xl font-bold">Admin Login</h1>

          <p className="mt-3 text-sm text-slate-400">
            Sign in to manage website enquiries.
          </p>

          {error && (
            <p
              role="alert"
              className="mt-4 rounded-lg bg-red-950 p-3 text-red-300"
            >
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="admin-email" className="mb-2 block">
                Email address
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg boarder boarder-slate-700 bg-slate-950 px-4 py-3"
              />
            </div>
            
<div>
  <label htmlFor="admin-password" className="mb-2 block">
    Password
  </label>

  <input
    id="admin-password"
    type="password"
    autoComplete="current-password"
    required
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3"
    placeholder="Enter your password"
  />
</div>


            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer rounded-lg bg-gold px-4 py-3 font-semibold text-slate-950 disabled:opacity-60 hover:bg-gold/80"
            >
                  {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default AdminLogin;
