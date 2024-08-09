'use client'
import SidebarWrapper from "@/components/sidebar";
import React from "react";

export default function SideBarLayout({ children }) {
    return (
        <div className="flex h-full items-stretch">
            <SidebarWrapper />
            <main className="content-area border-4 border-red-400 flex-1 lg:ml-[264px] flex justify-center items-center h-full w-full">
                <div className="">
                    {children}
                </div>
            </main>
        </div>
    )
}
