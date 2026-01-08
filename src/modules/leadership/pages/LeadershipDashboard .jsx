import { useGetAiInsightsQuery } from "../leadershipApi";

const LeadershipDashboard = () => {
  // const { data, isLoading } = useGetLeadershipOverviewQuery();
  const { data } = useGetAiInsightsQuery()
  // if (isLoading) return <div className="loading loading-spinner" />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Leadership Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="card bg-base-100 p-4 shadow">
          Org Health: {data?.orgHealth || "N/A"}
        </div>

        <div className="card bg-base-100 p-4 shadow">
          Active Risks: {data?.activeRisks || 0}
        </div>

        <div className="card bg-base-100 p-4 shadow">
          Critical Workflows: {data?.criticalWorkflows || 0}
        </div>
      </div>
    </div>
  );
};

export default LeadershipDashboard;
