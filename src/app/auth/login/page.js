'use client'
import styles from '@/styles/auth-forms.module.css'
import BaseButton from "@/components/base-button";
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault();
        router.push('/home')
    }
    return (
        <>
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Sign in to Your Account
                </h1>

                <div className={styles.authForm}>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className={styles.authFormInputGroup}>
                            <label htmlFor="email" className={styles.authFormLabel}>Email Address</label>
                            <input required={true} type="email" id="email" placeholder="Your Email Address" className={styles.authFormInput} />
                        </div>
                        <div className={styles.authFormInputGroup}>
                            <label htmlFor="password" className={styles.authFormLabel}>Password</label>
                            <div className="relative">
                                <input required={true} type="password" id="password" placeholder="Your Password"
                                      className={styles.authFormInput}/>

                                <div className={styles.authFormInputAppendIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                                        <path d="M23.9011 8.34694C23.8607 8.26913 22.8889 6.42204 20.9597 4.56721C15.6698 -0.518969 8.33752 -0.525835 3.04028 4.56721C1.11108 6.42204 0.139343 8.26913 0.098877 8.34694C-0.032959 8.60062 -0.032959 8.89938 0.098877 9.15306C0.139343 9.23087 1.11108 11.078 3.04028 12.9328C8.33038 18.019 15.6625 18.0258 20.9597 12.9328C22.8889 11.078 23.8607 9.23087 23.9011 9.15306C24.033 8.89938 24.033 8.60062 23.9011 8.34694ZM19.6339 11.658C15.1604 15.959 9.03882 16.1161 4.40643 11.6966C3.18494 10.5313 2.38092 9.34918 2.01086 8.74903C2.37451 8.15787 3.16022 7.00141 4.36615 5.84197C8.82953 1.55064 14.952 1.37512 19.5938 5.80341C20.8154 6.96884 21.6194 8.15135 21.9891 8.75079C21.6255 9.34196 20.8398 10.4986 19.6339 11.658ZM12 4.30331C9.44971 4.30331 7.37494 6.2981 7.37494 8.74991C7.37494 11.2019 9.44971 13.1967 12 13.1967C14.5503 13.1967 16.6251 11.2019 16.6251 8.74991C16.6251 6.2981 14.5503 4.30331 12 4.30331ZM12 11.394C10.4837 11.394 9.24994 10.2078 9.24994 8.74991C9.24994 7.29207 10.4837 6.10604 12 6.10604C13.5163 6.10604 14.7501 7.29207 14.7501 8.74991C14.7501 10.2079 13.5163 11.394 12 11.394Z" fill="#C4C4C4"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-end text-sm text-primary">Forgot Password?</p>
                        </div>

                        <BaseButton type="submit" label="Sign In" hasFullWidth={true} classes="mt-4" />
                    </form>

                    <p className={styles.authFormFooterText}>
                        Don’t have an account? &nbsp;
                        <Link href="/auth/signup" className="text-primary underline">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
