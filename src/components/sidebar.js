'use client'
import GroupLogo from "@/components/group-logo";
import BaseButton from "@/components/base-button";
import styles from "@/styles/sidebar.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import {sidebarLinks, btnIcon} from "@/utils/constants";

function Sidebar() {
    const route = usePathname();

    const [isDarkMode, setDarkMode] = useState(true);
    const [subLinkCollapse, toggleCollapse] = useState(false);

    useEffect(() => {
        if (route.includes('/about')) toggleCollapse(true);
    }, [route])

    return (
        <aside className={styles.sidebarWrapper}>
            <div className={styles.sidebarBgGradient} />

            <div className={styles.sidebarContent}>
                <div className="sidebar-header">
                    <GroupLogo />
                </div>
                <div className={styles.sidebarBody}>
                    <div>
                        <BaseButton
                            type="button"
                            label="Create"
                            hasFullWidth={true}
                            isIconPrepended={true}
                            icon={btnIcon}
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        {sidebarLinks.map((link, index) => {
                            return !link.subLinks ? (
                                <Link key={index} className={`${styles.sidebarLinksGroup} ${route === link.link && styles.sidebarActiveLinksGroup}`} href={link.link}>
                                    <div className="w-6 h-6">{link.icon}</div>
                                    <span>{link.label}</span>
                                </Link>
                            ) : (
                                <div key={index}>
                                    <div
                                        className={`${styles.sidebarLinksGroup} ${subLinkCollapse && styles.sidebarActiveLinksGroup}`}
                                        onClick={() => toggleCollapse(!subLinkCollapse)}
                                    >
                                        <div className="w-6 h-6">{link.icon}</div>
                                        <span>{link.label}</span>
                                        {link.subLinks && (
                                            <svg
                                                className={subLinkCollapse ? '' : 'rotate-180'}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.4211 7.03784H0.578826C0.0657525 7.03784 -0.195625 6.41828 0.17224 6.05042L5.5934 0.629257C5.81605 0.406602 6.18392 0.406602 6.40667 0.629257L11.8278 6.05042C12.1956 6.41828 11.9342 7.03784 11.4211 7.03784Z"
                                                    fill="#C4C4C4"
                                                />
                                            </svg>
                                        )}
                                    </div>

                                    {link.subLinks &&
                                        subLinkCollapse &&
                                        link.subLinks.map((subLink, subIndex) => (
                                            <div key={subLink.link} className="flex flex-col gap-5 ml-14 relative">
                                                <Link href={subLink.link} className={`${styles.sidebarSubLinks} ${route === subLink.link && styles.sidebarActiveSubLinks}`}>
                                                    <span>{subLink.label}</span>
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.sidebarFooter}>
                    {!route.includes('/auth') && <Link href="/auth/login" className={styles.sidebarLinksGroup}>
                        <div className="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19"
                                 fill="none">
                                <path
                                    d="M15 13.75L19 9.75M19 9.75L15 5.75M19 9.75L5 9.75M11 13.75V14.75C11 16.4069 9.65686 17.75 8 17.75H4C2.34315 17.75 1 16.4069 1 14.75V4.75C1 3.09315 2.34315 1.75 4 1.75H8C9.65686 1.75 11 3.09315 11 4.75V5.75"
                                    stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span>Logout</span>
                    </Link>}
                    <div className="px-3">
                        <div className="relative border border-dark rounded-xl text-lg font-bold">
                            <div className={`absolute bg-dark top-0 bottom-0 w-1/2 rounded-xl transition-all duration-300 ${isDarkMode ? 'translate-x-0' : 'translate-x-full'}`} />
                            <div className="flex relative z-[2]">
                                <div onClick={() => setDarkMode(true)} className={`flex gap-2 justify-center items-center py-3 px-4 cursor-pointer ${isDarkMode ? 'text-white' : 'text-light opacity-50'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"
                                         fill="none">
                                        <path
                                            d="M1.03009 11.17C1.39009 16.32 5.76009 20.51 10.9901 20.74C14.6801 20.9 17.9801 19.18 19.9601 16.47C20.7801 15.36 20.3401 14.62 18.9701 14.87C18.3001 14.99 17.6101 15.04 16.8901 15.01C12.0001 14.81 8.00009 10.72 7.98009 5.88996C7.97009 4.58996 8.24009 3.35996 8.73009 2.23996C9.27009 0.999961 8.62009 0.409961 7.37009 0.939961C3.41009 2.60996 0.70009 6.59996 1.03009 11.17Z"
                                            stroke="white" strokeWidth="1.25" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>Dark</span>
                                </div>
                                <div onClick={() => setDarkMode(false)} className={`flex gap-2 justify-center items-center py-3 px-4 cursor-pointer ${!isDarkMode ? 'text-white' : 'text-light opacity-50'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path
                                            d="M12 19.25C13.7239 19.25 15.3772 18.5652 16.5962 17.3462C17.8152 16.1272 18.5 14.4739 18.5 12.75C18.5 11.0261 17.8152 9.37279 16.5962 8.15381C15.3772 6.93482 13.7239 6.25 12 6.25C10.2761 6.25 8.62279 6.93482 7.40381 8.15381C6.18482 9.37279 5.5 11.0261 5.5 12.75C5.5 14.4739 6.18482 16.1272 7.40381 17.3462C8.62279 18.5652 10.2761 19.25 12 19.25Z"
                                            stroke="#C4C4C4" strokeWidth="1.25" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M19.14 19.89L19.01 19.76M19.01 5.74L19.14 5.61M4.86 19.89L4.99 19.76M12 2.83V2.75M12 22.75V22.67M2.08 12.75H2M22 12.75H21.92M4.99 5.74L4.86 5.61"
                                            stroke="#C4C4C4" strokeWidth="1.66667" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>Light</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default function SidebarWrapper({ sidebarVisibility, toggleAction }) {
    return (
        <>
            <div className="hidden lg:block fixed overflow-hidden">
                <Sidebar />
            </div>
            {sidebarVisibility}
            <div className={`block lg:hidden fixed z-20 top-0 left-0 transition ${sidebarVisibility ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex gap-4">
                    <Sidebar />
                    <button className="bg-white border border-light text-black size-12 rounded-[8px] flex justify-center items-center mt-4 focus:bg-lime-dark focus:text-white" onClick={toggleAction}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 1L1 11M1 1L11 11" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
