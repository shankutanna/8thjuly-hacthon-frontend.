// import { baseApi } from "./baseApi";

// export const operationsApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         // getWorkflows: builder.query({
//         //     query: () => "/operations/workflows",
//         //     providesTags: ["Workflows"],
//         // }),
//         getWorkflows: builder.query({
//             query: () => "/workflows",
//             providesTags: ["Workflows"],
//         }),

//         createWorkflow: builder.mutation({
//             query: (data) => ({
//                 url: "/operations/workflows",
//                 method: "POST",
//                 body: data,
//             }),
//             invalidatesTags: ["Workflows"],
//         }),

//         getTasks: builder.query({
//             query: () => "/tasks",
//             providesTags: ["Tasks"],
//         }),


//         // getTasks: builder.query({
//         //     query: () => "/operations/tasks",
//         //     providesTags: ["Tasks"],
//         // }),

//         updateTaskStatus: builder.mutation({
//             query: ({ taskId, status }) => ({
//                 url: `/operations/tasks/${taskId}`,
//                 method: "PATCH",
//                 body: { status },
//             }),
//             invalidatesTags: ["Tasks"],
//         }),
//     }),
// });

// export const {
//     useGetWorkflowsQuery,
//     useCreateWorkflowMutation,
//     useGetTasksQuery,
//     useUpdateTaskStatusMutation,
// } = operationsApi;

import { baseApi } from "./baseApi";

export const operationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWorkflows: builder.query({
            query: () => "/workflows",   // ✅ FIXED
            providesTags: ["Workflows"],
        }),

        createWorkflow: builder.mutation({
            query: (data) => ({
                url: "/workflows",        // ✅ FIXED
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Workflows"],
        }),

        getTasks: builder.query({
            query: () => "/tasks",      // ✅ FIXED
            providesTags: ["Tasks"],
        }),

        updateTaskStatus: builder.mutation({
            query: ({ taskId, status }) => ({
                url: `/tasks/${taskId}`,  // ✅ FIXED
                method: "PATCH",
                body: { status },
            }),
            invalidatesTags: ["Tasks"],
        }),
    }),
});

export const {
    useGetWorkflowsQuery,
    useCreateWorkflowMutation,
    useGetTasksQuery,
    useUpdateTaskStatusMutation,
} = operationsApi;


