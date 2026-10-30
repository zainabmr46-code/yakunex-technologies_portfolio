
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const request = useCallback(async (path, options = {}) => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      throw new Error("Please sign in first.");
    }

    const response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...options.headers,
      },
    });

    const data = await response.json().catch(() => ({}));

    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
      throw new Error("Session expired or access denied.");
    }

    if (!response.ok) {
      throw new Error(data.message || "Request failed.");
    }

    return data;
  }, [navigate]);

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await request("/admin/enquiries");
      setEnquiries(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    loadEnquiries();
  }, [loadEnquiries]);

  async function updateStatus(id, status) {
    try {
      await request(`/admin/enquiries/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      await loadEnquiries();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteEnquiry(id) {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await request(`/admin/enquiries/${id}`, { method: "DELETE" });
      await loadEnquiries();
    } catch (err) {
      setError(err.message);
    }
  }

  async function logout() {
    try {
      await request("/admin/logout", { method: "POST" });
    } catch {
      // Clear the local token even if logout cannot reach the API.
    } finally {
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-gold">
              Yakunex Technologies
            </p>
            <h1 className="mt-2 text-3xl font-bold">Admin Dashboard</h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={loadEnquiries}
              className="rounded-lg border border-slate-700 px-4 py-2"
            >
              Refresh
            </button>
            <button
              onClick={logout}
              className="rounded-lg bg-gold px-4 py-2 font-semibold text-slate-950"
            >
              Log out
            </button>
          </div>
        </header>

        {error && (
          <p role="alert" className="mt-5 rounded-lg bg-red-950 p-3 text-red-300">
            {error}
          </p>
        )}

        <section className="mt-8 grid gap-4 sm:grid-cols-3 sm:grid-cols-2 ">
          {[
            ["Total", enquiries.length],
            ["New", enquiries.filter((e) => (e.status || "New") === "New").length],
            ["Replied", enquiries.filter((e) => e.status === "Replied").length],
          ].map(([label, count]) => (
            <article key={label} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-slate-400">{label} enquiries</p>
              <p className="mt-2 text-3xl font-bold">{count}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">Enquiries</h2>

          {loading ? (
            <p className="mt-4 text-slate-400">Loading...</p>
          ) : enquiries.length === 0 ? (
            <p className="mt-4 text-slate-400">No enquiries found.</p>
          ) : (
            <div className="mt-5 space-y-5">
              {enquiries.map((item) => (
                <article key={item.id} className="rounded-lg border border-slate-800 p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>

                  <a
                    href={`mailto:${item.email}`}
                    className="break-all text-gold hover:underline"
                  >
                    {item.email}
                  </a>

                  {item.company && <p className="mt-2">Company: {item.company}</p>}
                  {item.phone && <p>Phone: {item.phone}</p>}

                  <p className="mt-3">
                    <strong>Need:</strong> {item.need}
                  </p>
                  <p className="mt-2 whitespace-pre-wrap break-words">
                    <strong>Message:</strong> {item.message}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Submitted: {item.created_at ? new Date(item.created_at).toLocaleString() : "Unknown"}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <label htmlFor={`status-${item.id}`}>Status</label>
                    <select
                      id={`status-${item.id}`}
                      value={item.status || "New"}
                      onChange={(event) => updateStatus(item.id, event.target.value)}
                      className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Replied">Replied</option>
                    </select>

                   

                    <button
                      onClick={() => deleteEnquiry(item.id)}
                      className="rounded-lg border border-red-500 px-3 py-2 text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
