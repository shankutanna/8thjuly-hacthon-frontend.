import { useUpdateTaskStatusMutation } from "../../../api/operationsApi";

const TaskCard = ({ task }) => {
    const [updateStatus] = useUpdateTaskStatusMutation();

    const handleComplete = () => {
        updateStatus({ taskId: task.id, status: "COMPLETED" });
    };

    return (
        <div className="card bg-base-100 p-4 shadow">
            <h2 className="font-bold">{task.title}</h2>
            <p>Status: <span className="badge">{task.status}</span></p>

            {task.status === "PENDING" && (
                <button className="btn btn-success mt-3" onClick={handleComplete}>
                    Mark Complete
                </button>
            )}
        </div>
    );
};

export default TaskCard;
