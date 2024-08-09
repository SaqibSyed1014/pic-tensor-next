'use client'
import React, { useEffect, useState } from "react";
import styles from "@/styles/auth-forms.module.css";
import BaseButton from "@/components/base-button";
import Link from "next/link";

export default function AuthCodePage() {
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft === 0) {
                clearInterval(intervalId);
                return;
            }
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.length > 1) {
            event.target.value = value.slice(0, 1);
        }
    };

    return (
        <div>
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Enter your Auth Code
                </h1>

                    <div className={styles.authForm}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <p>6 digit Auth Code</p>
                                    <p>Haven't received? &nbsp;
                                        <span className="text-primary">
                                            { timeLeft > 0 ? <span>Send again in ({timeLeft}s)</span> : <span className="cursor-pointer" onClick={() => setTimeLeft(10)}>Resend Code</span> }
                                        </span>
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <input type="number" className={styles.codeDigitInput} onInput={handleInputChange} />
                                    <input type="number" className={styles.codeDigitInput} onInput={handleInputChange} />
                                    <input type="number" className={styles.codeDigitInput} onInput={handleInputChange} />
                                    <input type="number" className={styles.codeDigitInput} onInput={handleInputChange} />
                                    <input type="number" className={styles.codeDigitInput} onInput={handleInputChange} />
                                    <input type="number" className={styles.codeDigitInput} onInput={handleInputChange} />
                                </div>
                            </div>

                            <p>For security reasons, we do not store your password. So we have sent you an authentication code to verify.</p>
                        </div>
                        <div className="lg:py-10">
                            <BaseButton label="Reset Password" hasFullWidth={true}/>
                        </div>

                        <p className="text-center">Remember your password? <Link href="/auth/login" className="text-primary underline">Log in</Link></p>
                    </div>
            </div>
        </div>
    )
}
