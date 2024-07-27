import React from 'react';
import DashboardLayout from "@/layout/dashboard-layout";

export default function DashboardPagesLayout({ children }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}
