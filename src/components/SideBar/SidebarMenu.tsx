import {
  Settings,
  Newspaper,
  PackageSearch,
  ShoppingBasket,
  Package,
  Truck,
  Gem,
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
    url: "add-products",
    icon: PackageSearch,
  },
  {
    title: "All Products",
    url: "all-products",
    icon: ShoppingBasket,
  },
  {
    title: "Home page Promotion",
    url: "promotion-home-page",
    icon: Gem,
  },
  {
    title: "News Details page Promotion",
    url: "promotion-news-details-page",
    icon: Gem,
  },
  {
    title: "Oders",
    url: "orders",
    icon: Package,
  },
  {
    title: "Deliver History",
    url: "delivery-history",
    icon: Truck,
  },
  {
    title: "Settings",
    url: "settings",
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
