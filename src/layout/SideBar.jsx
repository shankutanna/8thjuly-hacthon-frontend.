import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROLES } from "../utils/roles";

const Sidebar = () => {
  const { role } = useSelector((state) => state.auth);

  return (
    <div className="w-64 bg-base-100 shadow-md min-h-screen">
      <div className="p-4 text-xl font-bold">IEODP</div>

      <ul className="menu p-2">
        {role === ROLES.OPERATIONS && (
          <>
            <li><NavLink to="/operations/dashboard">Dashboard</NavLink></li>
            <li>
              <NavLink to="/operations/requests">Raise Request</NavLink>
            </li>
            <li><NavLink to="/operations/workflows">Workflows</NavLink></li>
            <li><NavLink to="/operations/tasks">My Tasks</NavLink></li>
          </>
        )}

        {role === ROLES.MANAGEMENT && (
          <>
            <li><NavLink to="/management/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/management/approvals">Approvals</NavLink></li>
            <li>
              <NavLink to="/management/actions">Take Actions</NavLink>
            </li>
          </>
        )}

        {role === ROLES.LEADERSHIP && (
          <>
            <li><NavLink to="/leadership/dashboard">Dashboard</NavLink></li>
            <li>
              <NavLink to="/leadership/reviews">Review Requests</NavLink>
            </li>
            <li><NavLink to="/leadership/insights">AI Insights</NavLink></li>
          </>
        )}

        {role === ROLES.AUDITORS && (
          <>
            <li><NavLink to="/audits/logs">Audit Logs</NavLink></li>
            <li>
              <NavLink to="/auditors/decision">Final Decisions</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
