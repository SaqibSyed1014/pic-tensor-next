import React, {useEffect, useState} from "react";
import SidebarWrapper from "@/components/sidebar";
import MobileNavigationBar from "@/components/mobile-navigation-bar";
import TopBar from "@/components/top-bar";
import {usePathname} from "next/navigation";

export default function BaseLayout({ children, hasTopBar }) {
    const route = usePathname();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebarAction(showSidebar) {
        setIsSidebarOpen(showSidebar);
    }

    useEffect(() => setIsSidebarOpen(false), [route])
    return (
        <div className="flex h-screen items-stretch">
            <SidebarWrapper
                sidebarVisibility={isSidebarOpen}
                toggleAction={() => toggleSidebarAction(false)}
            />

            <main className="content-area flex-1 ml-0 lg:!ml-[264px] h-full w-full">
                <MobileNavigationBar toggleAction={() => toggleSidebarAction(true)} />
                <div className="container h-full">
                    {hasTopBar && <TopBar />}
                    {children}
                </div>
            </main>
        </div>
    )
}
