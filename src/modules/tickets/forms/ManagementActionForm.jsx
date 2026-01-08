import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateTicketMutation } from "../ticketsApi";
import { managementActionSchema } from "../validation/ticketSchema";


const ManagementActionForm = ({ ticket }) => {
    const [updateTicket] = useUpdateTicketMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(managementActionSchema),
    });

    const onSubmit = async (data) => {
        await updateTicket({
            id: ticket.id,
            data: {
                managementAction: data.managementAction,
                status: "ACTION_TAKEN",
            },
        });

        alert("Action recorded, sent to auditor");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 p-4 shadow">
            <h3 className="font-bold mb-2">Management Action</h3>

            <textarea
                id="management-action"
                data-testid="management-action-textarea"
                className="textarea textarea-bordered w-full mb-2"
                placeholder="Describe action taken"
                {...register("managementAction")}
            />
            <p className="text-error text-sm">{errors.managementAction?.message}</p>

            <textarea
                id="management-action"
                data-testid="management-action-textarea"
                className="textarea textarea-bordered w-full mb-2"
                placeholder="Describe action taken"
                {...register("managementAction")}
            />
        </form>
    );
};

export default ManagementActionForm;
