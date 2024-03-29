"use client";

import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import {
  Settings,
  LayoutDashboard,
  Users,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";
import { Button } from "./button";

type Props = {};

function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  const mobileWidth = windowWidth < 768;
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            icon: Users,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />
    </div>
  );
}

export default SideNavbar;
