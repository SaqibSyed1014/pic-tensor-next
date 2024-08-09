'use client'
import GroupLogo from "@/components/grouop-logo";

export default function MobileNavigationBar({ toggleAction }) {
    return (
        <div className="bg-lime-dark lg:hidden">
            <div className="container">
                <div className="flex justify-between items-center py-2.5">
                    <GroupLogo />

                    <div className="cursor-pointer" onClick={toggleAction}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                            <path d="M1 13.5H17M1 7.5H17M1 1.5H17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
