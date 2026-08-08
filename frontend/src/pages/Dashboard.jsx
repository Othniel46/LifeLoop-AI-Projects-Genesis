function Dashboard() {
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
    </main>
  );
}

export default Dashboard;
