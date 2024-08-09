import React, {useState} from "react";
import SidebarWrapper from "@/components/sidebar";
import MobileNavigationBar from "@/components/mobile-navigation-bar";
import TopBar from "@/components/top-bar";

export default function BaseLayout({ children, hasTopBar }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebarAction(showSidebar) {
        setIsSidebarOpen(showSidebar);
    }
    return (
        <div className="flex h-screen items-stretch">
            <SidebarWrapper
                sidebarVisibility={isSidebarOpen}
                toggleAction={() => toggleSidebarAction(false)}
            />

            <main className="content-area flex-1 ml-0 lg:!ml-[264px] h-full w-full">
                <MobileNavigationBar toggleAction={() => toggleSidebarAction(true)} />
                <div className="container">
                    {hasTopBar && <TopBar />}
                    {children}
                </div>
            </main>
        </div>
    )
}
