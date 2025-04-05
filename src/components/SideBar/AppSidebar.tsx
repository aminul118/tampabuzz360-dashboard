import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import SidebarMenuContent from "./SidebarMenu";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <img src="/TampaBuzz360.svg" alt="Tampabuz logo" />
          </SidebarGroupLabel>
          {/* Menu item here */}
          <SidebarMenuContent />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
