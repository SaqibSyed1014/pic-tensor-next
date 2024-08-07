import React from 'react';
import Sidebar from "@/components/sidebar";

export default function AuthLayout({ children }) {
    return (
        <div className="flex h-full items-stretch">
            <Sidebar></Sidebar>
            <main className="content-area flex-1 ml-[264px] flex justify-center items-center h-full w-full">
                <div className="">
                    {children}
                </div>
            </main>
        </div>
    );
}
