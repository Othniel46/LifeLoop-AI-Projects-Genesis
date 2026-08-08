import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-content">

        <header className="dashboard-header">

          <div>
            <p className="eyebrow">
              LIFELOOP CONTROL CENTER
            </p>

            <h1>Welcome to LifeLoop-AI</h1>

            <p>
              Your intelligent digital ecosystem is ready.
            </p>
          </div>

          <div className="ai-status">
            🟢 AI Core Online
          </div>

        </header>

        <section className="dashboard-grid">

          <DashboardCard
            icon="📋"
            title="Tasks"
            value="12"
            description="Active tasks"
          />

          <DashboardCard
            icon="💼"
            title="Projects"
            value="5"
            description="Active projects"
          />

          <DashboardCard
            icon="🎯"
            title="Goals"
            value="8"
            description="Goals in progress"
          />

          <DashboardCard
            icon="🤖"
            title="AI Core"
            value="Online"
            description="System operational"
          />

        </section>

        <section className="ai-panel">

          <h2>🤖 LifeLoop AI Assistant</h2>

          <p>
            Ask your AI assistant about your tasks,
            projects, research, goals, or anything
            you want to accomplish.
          </p>

          <div className="ai-input">

            <input
              type="text"
              placeholder="Ask LifeLoop AI..."
            />

            <button>
              Send
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;
