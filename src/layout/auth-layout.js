'use client'
import React from "react";
import BaseLayout from "@/layout/base-layout";

export default function AuthLayout({ children }) {
    return (
        <BaseLayout hasTopBar={false}>
            <div className="flex justify-center items-center">
                {children}
            </div>
        </BaseLayout>
    )
}
