import AppSidebar from "@/components/SideBar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>

      <Outlet />
    </>
  );
};

export default MainLayout;
