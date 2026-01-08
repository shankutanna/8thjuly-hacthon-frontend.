import Login from "../auth/Login";
import ProtectedRoute from "../layout/ProtectedRoutes";
import MainLayout from "../layout/MainLayout";
import OperationsDashboard from "../modules/operations/pages/OperationsDashboard ";
import ManagementDashboard from "../modules/management/pages/ManagementDashboard ";
import LeadershipDashboard from "../modules/leadership/pages/LeadershipDashboard ";
import AuditLogsPage from "../modules/audits/page/AuditLogsPage ";
import WorkflowsPage from "../modules/operations/pages/WorkflowsPage";
import TasksPage from "../modules/operations/pages/TaskPage";
import ApprovalsPage from "../modules/management/pages/ApprovalsPage";
import AiInsightsPage from "../modules/leadership/pages/AiInsightsPage";
import HomePage from "../pages/home-page/HomePage";
import TicketsPage from "../modules/tickets/pages/TicketPage";
import Unauthorized from "../layout/Unathorized";

export {
    Login,
    ProtectedRoute,
    MainLayout,
    OperationsDashboard,
    ManagementDashboard,
    LeadershipDashboard,
    AuditLogsPage,
    WorkflowsPage,
    TasksPage,
    ApprovalsPage,
    AiInsightsPage,
    HomePage,
    TicketsPage,
    Unauthorized,
};
    
    

