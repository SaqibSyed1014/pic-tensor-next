import React from 'react';
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <main className="content-area flex-1 border border-blue-500 ml-[264px]">{children}</main>
        </div>
    );
}
