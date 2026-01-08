import { baseApi } from "../../api/baseApi";

export const auditApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAuditLogs: builder.query({
        //     query: () => "/auditLogs",   // ✅ FIXED
        //     providesTags: ["Audits"],
        // }),
        getAuditLogs: builder.query({
            query: () => "/auditLogs",   // ✅ flat, no pagination
            providesTags: ["Audits"],
        }),


        logAudit: builder.mutation({
            query: (data) => ({
                url: "/auditLogs",        // ✅ FIXED
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetAuditLogsQuery, useLogAuditMutation } = auditApi;