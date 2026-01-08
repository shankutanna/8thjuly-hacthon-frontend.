
import { useSelector } from "react-redux";
import { useGetTicketsQuery } from "../ticketsApi";
import RaiseRequestForm from "../forms/RaiseRequestForm";
import TicketCard from "../components/TicketCard";

const TicketsPage = () => {
    const { role } = useSelector((state) => state.auth);
    const { data: tickets = [], isLoading, isError } = useGetTicketsQuery();

    if (isLoading) return <div className="loading loading-spinner" />;
    if (isError) return <div className="alert alert-error">Failed to load tickets</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Requests / Tickets</h1>

            {/* OPERATIONS can raise new request */}
            {role === "OPERATIONS" && (
                <div className="mb-6">
                    <RaiseRequestForm />
                </div>
            )}

            {/* All roles see tickets list */}
            <div>
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;
