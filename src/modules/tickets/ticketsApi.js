import { baseApi } from "../../api/baseApi";

export const ticketsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTickets: builder.query({
            query: () => "/tickets",
            providesTags: ["Tickets"],
        }),

        createTicket: builder.mutation({
            query: (data) => ({
                url: "/tickets",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Tickets"],
        }),

        updateTicket: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tickets/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Tickets"],
        }),
    }),
});

export const {
    useGetTicketsQuery,
    useCreateTicketMutation,
    useUpdateTicketMutation,
} = ticketsApi;
