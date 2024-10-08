'use client'
import React from "react";
import BaseLayout from "@/layout/base-layout";

export default function DashboardLayout({ children }) {
    return (
        <BaseLayout hasTopBar={true}>
            <div className="mb-10 flex flex-col">
                {children}
            </div>
        </BaseLayout>
    )
}
