import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateTicketMutation } from "../ticketsApi";
import { auditorDecisionSchema } from "../validation/ticketSchema";


const AuditorDecisionForm = ({ ticket }) => {
    const [updateTicket] = useUpdateTicketMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(auditorDecisionSchema),
    });

    const onSubmit = async (data) => {
        await updateTicket({
            id: ticket.id,
            data: {
                auditorDecision: data.auditorDecision,
                status: "CLOSED",
            },
        });

        alert("Final decision recorded");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 p-4 shadow">
            <h3 className="font-bold mb-2">Auditor Decision</h3>

            <select
                id="auditor-decision"
                data-testid="auditor-decision-select"
                className="select select-bordered w-full mb-2"
                {...register("auditorDecision")}
            >
                <option value="">Select decision</option>
                <option value="APPROVED">Approve</option>
                <option value="REJECTED">Reject</option>
            </select>
            <p className="text-error text-sm">{errors.auditorDecision?.message}</p>
            <button
                id="auditor-finalize"
                data-testid="auditor-finalize-button"
                className="btn btn-error btn-sm"
            >
                Finalize
            </button>
        </form>
    );
};

export default AuditorDecisionForm;
