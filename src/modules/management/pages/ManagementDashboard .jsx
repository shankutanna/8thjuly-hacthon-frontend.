import { useGetPendingApprovalsQuery } from "../managementApi";

const ManagementDashboard = () => {
    const { data: approvals = [] } = useGetPendingApprovalsQuery();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Management Dashboard</h1>

            <div className="grid grid-cols-3 gap-4">
                <div className="card bg-base-100 p-4 shadow">
                    Pending Approvals: {approvals.length}
                </div>

                <div className="card bg-base-100 p-4 shadow">
                    Team Workflows: {approvals.filter(a => a.team).length}
                </div>

                <div className="card bg-base-100 p-4 shadow">
                    Escalations: {approvals.filter(a => a.status === "ESCALATED").length}
                </div>
            </div>
        </div>
    );
};

export default ManagementDashboard;
