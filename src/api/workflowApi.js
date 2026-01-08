import { baseApi } from "./baseApi";

export const workflowApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWorkflowById: builder.query({
            query: (id) => `/workflows/${id}`,
        }),

        transitionWorkflow: builder.mutation({
            query: ({ workflowId, action }) => ({
                url: `/workflows/${workflowId}/transition`,
                method: "POST",
                body: { action },
            }),
            invalidatesTags: ["Workflows"],
        }),
    }),
});

export const {
    useGetWorkflowByIdQuery,
    useTransitionWorkflowMutation,
} = workflowApi;
