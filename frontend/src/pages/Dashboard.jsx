import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/api";

function Dashboard() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkBackend() {
      try {
        const data = await getHealthStatus();
        setHealth(data);
      } catch (err) {
        setError("Backend API is unavailable.");
      } finally {
        setLoading(false);
      }
    }

    checkBackend();
  }, []);

  return (
    <main className="page">
      <h1>LifeLoop Dashboard</h1>

      <p>
        Welcome to the central control center of your
        LifeLoop-AI ecosystem.
      </p>

      <div className="dashboard-grid">
        <div className="card">
          <h2>🤖 AI Assistant</h2>
          <p>Your intelligent digital companion.</p>
        </div>

        <div className="card">
          <h2>📋 Tasks</h2>
          <p>Manage your daily priorities.</p>
        </div>

        <div className="card">
          <h2>🎯 Goals</h2>
          <p>Track your long-term objectives.</p>
        </div>

        <div className="card">
          <h2>🌌 Space Edition</h2>
          <p>Explore future aerospace capabilities.</p>
        </div>
      </div>

      <section className="card system-status">
        <h2>System Status</h2>

        {loading && <p>🔄 Checking LifeLoop-AI backend...</p>}

        {health && (
          <>
            <p>🟢 Backend API: Online</p>
            <p>Project: {health.project}</p>
            <p>Service: {health.service}</p>
          </>
        )}

        {error && <p>🔴 {error}</p>}
      </section>
    </main>
  );
}

export default Dashboard;
