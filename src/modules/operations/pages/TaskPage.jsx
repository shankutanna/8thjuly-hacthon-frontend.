import { useGetTasksQuery } from "../../../api/operationsApi";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
    const { data: tasks = [], isLoading } = useGetTasksQuery();

    if (isLoading) return <div className="loading loading-spinner" />;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

            <div className="grid grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksPage;
