"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AppSidebar from "@/components/layout/app-sidebar";
import Topbar from "@/components/layout/app-topbar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc", overflowX: "hidden" }}>
      {/* Sidebar dengan transisi geser yang smooth */}
      <div
        style={{
          width: "260px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 50,
        }}
      >
        <AppSidebar />
      </div>

      {/* Konten Utama yang otomatis bergeser mengikuti sidebar */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
          marginLeft: isSidebarOpen ? "260px" : "0px",
          transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Topbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <main style={{ padding: "32px", flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}\]