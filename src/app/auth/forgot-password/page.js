'use client'
import styles from '@/styles/auth-forms.module.css'
import BaseButton from "@/components/base-button";
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault();
        router.push('/auth/auth-code');
    }
    return (
        <>
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Forgot your Password
                </h1>

                <div className={styles.authForm}>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className={styles.authFormInputGroup}>
                            <label htmlFor="email" className={styles.authFormLabel}>Email</label>
                            <input required={true} type="email" id="email" placeholder="Your Email" className={styles.authFormInput} />
                        </div>
                        <div className="flex max-md:flex-col items-stretch gap-3 h-full text-light">
                            <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                            <hr className="block md:h-[100px] border border-light/20"/>
                            <p>For security reasons, we do not store your password. So we will send you an autenhtication code to verify.</p>
                        </div>

                        <BaseButton type="submit" label="Send Reset Instructions" hasFullWidth={true} classes="mt-4" />
                    </form>

                    <p className={styles.authFormFooterText}>
                        Remember your password? &nbsp;
                        <Link href="/auth/login" className="text-primary underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
