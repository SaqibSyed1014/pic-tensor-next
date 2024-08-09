'use client'
import React, { useState } from "react";
import TopBar from "@/components/top-bar";
import MobileNavigationBar from "@/components/mobile-navigation-bar";
import SidebarWrapper from "@/components/sidebar";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebarAction(showSidebar) {
        setIsSidebarOpen(showSidebar);
    }
    return (
        <div className="flex h-full items-stretch">
            <SidebarWrapper
                sidebarVisibility={isSidebarOpen}
                toggleAction={() => toggleSidebarAction(false)}
            />
            <main className="content-area flex-1 ml-0 lg:!ml-[264px] h-full w-full">
                <MobileNavigationBar toggleAction={() => toggleSidebarAction(true)} />
                <div className="container">
                    <div className="mb-10 flex flex-col">
                        <TopBar/>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
