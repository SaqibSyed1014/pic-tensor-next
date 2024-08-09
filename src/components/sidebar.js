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

    const [subLinkCollapse, toggleCollapse] = useState(false);
    useEffect(() => {
        if (route.includes('/about')) toggleCollapse(true);
    }, [route])

    return (
        <aside className="w-[264px] bg-lime-dark h-svh overflow-auto">
            <div className="absolute z-[0] -top-[500px] -left-[450px] size-[620px] blur-3xl bg-[#6843EC] rounded-full"></div>

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

                    </div>
                </div>
            </div>
        </aside>
    )
}

export default function SidebarWrapper({ sidebarVisibility, toggleAction }) {
    return (
        <>
            <div className="hidden lg:block fixed">
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
