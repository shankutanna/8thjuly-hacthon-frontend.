import { useGetTasksQuery, useGetWorkflowsQuery } from "../../../api/operationsApi";

const OperationsDashboard = () => {
    const { data: workflows = [] } = useGetWorkflowsQuery();
    const { data: tasks = [] } = useGetTasksQuery();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Operations Dashboard</h1>

            <div className="grid grid-cols-3 gap-4">
                <div className="card bg-base-100 p-4 shadow">
                    Active Workflows: {workflows.length}
                </div>

                <div className="card bg-base-100 p-4 shadow">
                    Pending Tasks: {tasks.filter((t) => t.status === "PENDING").length}
                </div>

                <div className="card bg-base-100 p-4 shadow">
                    Exceptions: {workflows.filter((w) => w.status === "EXCEPTION").length}
                </div>
            </div>
        </div>
    );
};

export default OperationsDashboard;
