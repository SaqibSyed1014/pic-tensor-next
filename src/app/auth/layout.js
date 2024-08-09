import React from 'react';
import AuthLayout from "@/layout/auth-layout";

export default function AuthFormsLayout({ children }) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
