import Sidebar from "@/components/sidebar";
import React from "react";
import TopBar from "@/components/top-bar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-full items-stretch">
            <Sidebar></Sidebar>
            <main className="content-area flex-1 ml-[264px] h-full w-full">
                <div className="px-6 mb-10 flex flex-col">
                    <TopBar/>
                    {children}
                </div>
            </main>
        </div>
    )
}
