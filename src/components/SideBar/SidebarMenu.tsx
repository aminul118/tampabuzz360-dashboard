import {
  Settings,
  Newspaper,
  PackageSearch,
  ShoppingBasket,
  Package,
  Truck,
} from "lucide-react";
import { SiGooglenews } from "react-icons/si";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Add News",
    url: "add-news",
    icon: Newspaper,
  },
  {
    title: "All News",
    url: "all-news",
    icon: SiGooglenews,
  },

  {
    title: "Add Products",
    url: "#",
    icon: PackageSearch,
  },
  {
    title: "All Products",
    url: "#",
    icon: ShoppingBasket,
  },
  {
    title: "Oders",
    url: "#",
    icon: Package,
  },
  {
    title: "Deliver History",
    url: "#",
    icon: Truck,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const SidebarMenuContent = () => {
  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link to={item.url} className="font-semibold">
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};

export default SidebarMenuContent;
