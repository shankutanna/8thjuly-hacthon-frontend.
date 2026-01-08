import CreateWorkflowModal from "../components/CreateWorkflowModel";
import WorkflowCard from "../components/WorkflowCard";
import { useGetWorkflowsQuery } from "../../../api/operationsApi";

import { useState } from "react";

const WorkflowsPage = () => {
    const { data: workflows = [], isLoading } = useGetWorkflowsQuery();
    const [open, setOpen] = useState(false);

    if (isLoading) return <div className="loading loading-spinner" />;

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold">My Workflows</h1>
                <button className="btn btn-primary" onClick={() => setOpen(true)}>
                    + Create Workflow
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {workflows.map((wf) => (
                    <WorkflowCard key={wf.id} workflow={wf} />
                ))}
            </div>

            {open && <CreateWorkflowModal onClose={() => setOpen(false)} />}
        </div>
    );
};

export default WorkflowsPage;
