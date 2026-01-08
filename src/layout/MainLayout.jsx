import Sidebar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-base-200 min-h-screen">{children}</div>
    </div>
  );
};

export default MainLayout;
