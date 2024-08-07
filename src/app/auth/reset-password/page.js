'use client'
import React, { useState } from 'react';
import styles from '@/styles/auth-forms.module.css'
import BaseButton from "@/components/base-button";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function SignUp() {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [formValidationStatus, setValidationStatus] = useState(true);
    const [showNewPassword, setNewPasswordVisibility] = useState(false);
    const [showPassword, setPasswordVisibility] = useState(false);

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'email') {
            if (value.includes('@')) {
                setValidationStatus(false);
            } else setValidationStatus(true);
        }
        if (name === 'password') {
            if (value.length > 8 && /[A-Z]/.test(value) && /\d/.test(value)) {
                setValidationStatus(false);
            } else setValidationStatus(true);
        }
    };

    const handleSubmit = (e) => {
        if (formValidationStatus) return;
        e.preventDefault();
        router.push('/auth/login');
    };

    return (
        <>
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Reset your Password
                </h1>

                <div className={styles.authForm}>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className={styles.authFormInputGroup}>
                            <label htmlFor="newPassword" className={styles.authFormLabel}>New Password</label>
                            <div className="relative">
                                <input type={showNewPassword ? 'text' : 'password'} id="newPassword" name="newPassword" placeholder="Enter a Strong Password"
                                       className={styles.authFormInput} onChange={handleChange}/>

                                <div className={styles.authFormInputAppendIcon}>
                                    <svg onClick={() => setNewPasswordVisibility(!showNewPassword)} xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                                        <path d="M23.9011 8.34694C23.8607 8.26913 22.8889 6.42204 20.9597 4.56721C15.6698 -0.518969 8.33752 -0.525835 3.04028 4.56721C1.11108 6.42204 0.139343 8.26913 0.098877 8.34694C-0.032959 8.60062 -0.032959 8.89938 0.098877 9.15306C0.139343 9.23087 1.11108 11.078 3.04028 12.9328C8.33038 18.019 15.6625 18.0258 20.9597 12.9328C22.8889 11.078 23.8607 9.23087 23.9011 9.15306C24.033 8.89938 24.033 8.60062 23.9011 8.34694ZM19.6339 11.658C15.1604 15.959 9.03882 16.1161 4.40643 11.6966C3.18494 10.5313 2.38092 9.34918 2.01086 8.74903C2.37451 8.15787 3.16022 7.00141 4.36615 5.84197C8.82953 1.55064 14.952 1.37512 19.5938 5.80341C20.8154 6.96884 21.6194 8.15135 21.9891 8.75079C21.6255 9.34196 20.8398 10.4986 19.6339 11.658ZM12 4.30331C9.44971 4.30331 7.37494 6.2981 7.37494 8.74991C7.37494 11.2019 9.44971 13.1967 12 13.1967C14.5503 13.1967 16.6251 11.2019 16.6251 8.74991C16.6251 6.2981 14.5503 4.30331 12 4.30331ZM12 11.394C10.4837 11.394 9.24994 10.2078 9.24994 8.74991C9.24994 7.29207 10.4837 6.10604 12 6.10604C13.5163 6.10604 14.7501 7.29207 14.7501 8.74991C14.7501 10.2079 13.5163 11.394 12 11.394Z" fill="#C4C4C4"/>
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <div className={styles.authFormInputGroup}>
                            <label htmlFor="confirmPassword" className={styles.authFormLabel}>Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" placeholder="Enter the same Password"
                                       className={styles.authFormInput} onChange={handleChange}/>

                                <div className={styles.authFormInputAppendIcon}>
                                    <svg onClick={() => setPasswordVisibility(!showPassword)} xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                                        <path d="M23.9011 8.34694C23.8607 8.26913 22.8889 6.42204 20.9597 4.56721C15.6698 -0.518969 8.33752 -0.525835 3.04028 4.56721C1.11108 6.42204 0.139343 8.26913 0.098877 8.34694C-0.032959 8.60062 -0.032959 8.89938 0.098877 9.15306C0.139343 9.23087 1.11108 11.078 3.04028 12.9328C8.33038 18.019 15.6625 18.0258 20.9597 12.9328C22.8889 11.078 23.8607 9.23087 23.9011 9.15306C24.033 8.89938 24.033 8.60062 23.9011 8.34694ZM19.6339 11.658C15.1604 15.959 9.03882 16.1161 4.40643 11.6966C3.18494 10.5313 2.38092 9.34918 2.01086 8.74903C2.37451 8.15787 3.16022 7.00141 4.36615 5.84197C8.82953 1.55064 14.952 1.37512 19.5938 5.80341C20.8154 6.96884 21.6194 8.15135 21.9891 8.75079C21.6255 9.34196 20.8398 10.4986 19.6339 11.658ZM12 4.30331C9.44971 4.30331 7.37494 6.2981 7.37494 8.74991C7.37494 11.2019 9.44971 13.1967 12 13.1967C14.5503 13.1967 16.6251 11.2019 16.6251 8.74991C16.6251 6.2981 14.5503 4.30331 12 4.30331ZM12 11.394C10.4837 11.394 9.24994 10.2078 9.24994 8.74991C9.24994 7.29207 10.4837 6.10604 12 6.10604C13.5163 6.10604 14.7501 7.29207 14.7501 8.74991C14.7501 10.2079 13.5163 11.394 12 11.394Z" fill="#C4C4C4"/>
                                    </svg>
                                </div>
                            </div>
                            {formData.confirmPassword && <div className="flex flex-col gap-2.5 pt-2">
                                <div className="flex items-center gap-2">
                                    {formData.confirmPassword.length > 8 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                         fill="none">
                                        <path
                                            d="M12.0364 6.21155C12.2805 6.45569 12.2805 6.85144 12.0364 7.09546L7.84351 11.2885C7.59937 11.5325 7.20374 11.5325 6.95959 11.2885L4.96362 9.29236C4.71948 9.04834 4.71948 8.65259 4.96362 8.40857C5.20764 8.16443 5.60339 8.16443 5.84741 8.40857L7.40149 9.96265L11.1525 6.21155C11.3966 5.96753 11.7924 5.96753 12.0364 6.21155ZM16.5 8.75C16.5 13.172 12.9214 16.75 8.5 16.75C4.078 16.75 0.5 13.1714 0.5 8.75C0.5 4.328 4.07861 0.75 8.5 0.75C12.922 0.75 16.5 4.32861 16.5 8.75ZM15.25 8.75C15.25 5.01892 12.2306 2 8.5 2C4.76892 2 1.75 5.01941 1.75 8.75C1.75 12.4811 4.76941 15.5 8.5 15.5C12.2311 15.5 15.25 12.4806 15.25 8.75Z"
                                            fill="#D2FF3A"/>
                                    </svg> :  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                                   fill="none">
                                            <path
                                                d="M15.9155 5.7404C15.5256 4.77546 14.9395 3.87078 14.1593 3.09065C13.3791 2.31037 12.4744 1.72431 11.5094 1.33441C10.5444 0.944375 9.51908 0.75 8.49423 0.75C7.47089 0.75 6.44752 0.945281 5.48452 1.33575C4.52162 1.72609 3.61912 2.31212 2.84068 3.09068C2.06209 3.86915 1.47606 4.77168 1.08575 5.73465C0.695281 6.69761 0.5 7.72099 0.5 8.74442C0.5 9.76923 0.694437 10.7945 1.08441 11.7596C1.47431 12.7245 2.06037 13.6292 2.84065 14.4093C3.62078 15.1895 4.52546 15.7756 5.4904 16.1655C6.45546 16.5555 7.48071 16.7499 8.50552 16.75C9.52889 16.75 10.5523 16.5547 11.5154 16.1643C12.4783 15.774 13.3808 15.188 14.1593 14.4093C14.9379 13.6309 15.5239 12.7283 15.9143 11.7654C16.3047 10.8023 16.5 9.77895 16.5 8.75552C16.5 7.73071 16.3055 6.70546 15.9155 5.7404ZM14.9253 11.3644C14.5872 12.1982 14.081 12.9784 13.4047 13.6547C12.7284 14.331 11.9482 14.8371 11.1144 15.1753C10.2807 15.5134 9.3932 15.6828 8.50552 15.6828C7.61561 15.6828 6.72593 15.5139 5.89027 15.1762C5.05452 14.8383 4.27277 14.3322 3.59524 13.6548C2.91781 12.9772 2.41168 12.1954 2.07384 11.3597C1.73609 10.524 1.56715 9.6343 1.56719 8.74439C1.56715 7.85674 1.73665 6.96933 2.07468 6.13558C2.41284 5.30174 2.919 4.52159 3.59528 3.84524C4.27162 3.169 5.05174 2.66284 5.88555 2.32465C6.71924 1.98659 7.60664 1.81709 8.4943 1.81709C9.38423 1.81709 10.274 1.986 11.1096 2.32375C11.9454 2.66159 12.7272 3.16771 13.4048 3.84518C14.0822 4.52274 14.5883 5.30446 14.9262 6.14021C15.2639 6.97586 15.4329 7.86555 15.4329 8.75545C15.4328 9.64317 15.2634 10.5306 14.9253 11.3644Z"
                                                fill="#FF3A3A"/>
                                            <path
                                                d="M9.23718 8.75006L11.8213 6.16591C12.0252 5.962 12.0252 5.63147 11.8213 5.42756C11.6175 5.22369 11.2869 5.22369 11.083 5.42756L8.49884 8.01175L5.91469 5.4276C5.71078 5.22372 5.38025 5.22372 5.17634 5.4276C4.97247 5.63147 4.97247 5.96203 5.17634 6.16594L7.76049 8.75009L5.17634 11.3342C4.97247 11.5381 4.97247 11.8687 5.17634 12.0726C5.38025 12.2765 5.71078 12.2765 5.91469 12.0726L8.49884 9.4884L11.083 12.0726C11.2869 12.2764 11.6174 12.2764 11.8213 12.0726C12.0252 11.8687 12.0252 11.5381 11.8213 11.3342L9.23718 8.75006Z"
                                                fill="#FF3A3A"/>
                                        </svg>
                                    }
                                    <span>At least 8 characters</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    { /[A-Z]/.test(formData.confirmPassword) ? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path
                                            d="M12.0364 6.21155C12.2805 6.45569 12.2805 6.85144 12.0364 7.09546L7.84351 11.2885C7.59937 11.5325 7.20374 11.5325 6.95959 11.2885L4.96362 9.29236C4.71948 9.04834 4.71948 8.65259 4.96362 8.40857C5.20764 8.16443 5.60339 8.16443 5.84741 8.40857L7.40149 9.96265L11.1525 6.21155C11.3966 5.96753 11.7924 5.96753 12.0364 6.21155ZM16.5 8.75C16.5 13.172 12.9214 16.75 8.5 16.75C4.078 16.75 0.5 13.1714 0.5 8.75C0.5 4.328 4.07861 0.75 8.5 0.75C12.922 0.75 16.5 4.32861 16.5 8.75ZM15.25 8.75C15.25 5.01892 12.2306 2 8.5 2C4.76892 2 1.75 5.01941 1.75 8.75C1.75 12.4811 4.76941 15.5 8.5 15.5C12.2311 15.5 15.25 12.4806 15.25 8.75Z"
                                            fill="#D2FF3A"/>
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M15.9155 5.7404C15.5256 4.77546 14.9395 3.87078 14.1593 3.09065C13.3791 2.31037 12.4744 1.72431 11.5094 1.33441C10.5444 0.944375 9.51908 0.75 8.49423 0.75C7.47089 0.75 6.44752 0.945281 5.48452 1.33575C4.52162 1.72609 3.61912 2.31212 2.84068 3.09068C2.06209 3.86915 1.47606 4.77168 1.08575 5.73465C0.695281 6.69761 0.5 7.72099 0.5 8.74442C0.5 9.76923 0.694437 10.7945 1.08441 11.7596C1.47431 12.7245 2.06037 13.6292 2.84065 14.4093C3.62078 15.1895 4.52546 15.7756 5.4904 16.1655C6.45546 16.5555 7.48071 16.7499 8.50552 16.75C9.52889 16.75 10.5523 16.5547 11.5154 16.1643C12.4783 15.774 13.3808 15.188 14.1593 14.4093C14.9379 13.6309 15.5239 12.7283 15.9143 11.7654C16.3047 10.8023 16.5 9.77895 16.5 8.75552C16.5 7.73071 16.3055 6.70546 15.9155 5.7404ZM14.9253 11.3644C14.5872 12.1982 14.081 12.9784 13.4047 13.6547C12.7284 14.331 11.9482 14.8371 11.1144 15.1753C10.2807 15.5134 9.3932 15.6828 8.50552 15.6828C7.61561 15.6828 6.72593 15.5139 5.89027 15.1762C5.05452 14.8383 4.27277 14.3322 3.59524 13.6548C2.91781 12.9772 2.41168 12.1954 2.07384 11.3597C1.73609 10.524 1.56715 9.6343 1.56719 8.74439C1.56715 7.85674 1.73665 6.96933 2.07468 6.13558C2.41284 5.30174 2.919 4.52159 3.59528 3.84524C4.27162 3.169 5.05174 2.66284 5.88555 2.32465C6.71924 1.98659 7.60664 1.81709 8.4943 1.81709C9.38423 1.81709 10.274 1.986 11.1096 2.32375C11.9454 2.66159 12.7272 3.16771 13.4048 3.84518C14.0822 4.52274 14.5883 5.30446 14.9262 6.14021C15.2639 6.97586 15.4329 7.86555 15.4329 8.75545C15.4328 9.64317 15.2634 10.5306 14.9253 11.3644Z" fill="#FF3A3A"/>
                                        <path d="M9.23718 8.75006L11.8213 6.16591C12.0252 5.962 12.0252 5.63147 11.8213 5.42756C11.6175 5.22369 11.2869 5.22369 11.083 5.42756L8.49884 8.01175L5.91469 5.4276C5.71078 5.22372 5.38025 5.22372 5.17634 5.4276C4.97247 5.63147 4.97247 5.96203 5.17634 6.16594L7.76049 8.75009L5.17634 11.3342C4.97247 11.5381 4.97247 11.8687 5.17634 12.0726C5.38025 12.2765 5.71078 12.2765 5.91469 12.0726L8.49884 9.4884L11.083 12.0726C11.2869 12.2764 11.6174 12.2764 11.8213 12.0726C12.0252 11.8687 12.0252 11.5381 11.8213 11.3342L9.23718 8.75006Z" fill="#FF3A3A"/>
                                    </svg>
                                    }
                                    <span>At least one capital letter</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    { /\d/.test(formData.confirmPassword) ? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path
                                            d="M12.0364 6.21155C12.2805 6.45569 12.2805 6.85144 12.0364 7.09546L7.84351 11.2885C7.59937 11.5325 7.20374 11.5325 6.95959 11.2885L4.96362 9.29236C4.71948 9.04834 4.71948 8.65259 4.96362 8.40857C5.20764 8.16443 5.60339 8.16443 5.84741 8.40857L7.40149 9.96265L11.1525 6.21155C11.3966 5.96753 11.7924 5.96753 12.0364 6.21155ZM16.5 8.75C16.5 13.172 12.9214 16.75 8.5 16.75C4.078 16.75 0.5 13.1714 0.5 8.75C0.5 4.328 4.07861 0.75 8.5 0.75C12.922 0.75 16.5 4.32861 16.5 8.75ZM15.25 8.75C15.25 5.01892 12.2306 2 8.5 2C4.76892 2 1.75 5.01941 1.75 8.75C1.75 12.4811 4.76941 15.5 8.5 15.5C12.2311 15.5 15.25 12.4806 15.25 8.75Z"
                                            fill="#D2FF3A"/>
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M15.9155 5.7404C15.5256 4.77546 14.9395 3.87078 14.1593 3.09065C13.3791 2.31037 12.4744 1.72431 11.5094 1.33441C10.5444 0.944375 9.51908 0.75 8.49423 0.75C7.47089 0.75 6.44752 0.945281 5.48452 1.33575C4.52162 1.72609 3.61912 2.31212 2.84068 3.09068C2.06209 3.86915 1.47606 4.77168 1.08575 5.73465C0.695281 6.69761 0.5 7.72099 0.5 8.74442C0.5 9.76923 0.694437 10.7945 1.08441 11.7596C1.47431 12.7245 2.06037 13.6292 2.84065 14.4093C3.62078 15.1895 4.52546 15.7756 5.4904 16.1655C6.45546 16.5555 7.48071 16.7499 8.50552 16.75C9.52889 16.75 10.5523 16.5547 11.5154 16.1643C12.4783 15.774 13.3808 15.188 14.1593 14.4093C14.9379 13.6309 15.5239 12.7283 15.9143 11.7654C16.3047 10.8023 16.5 9.77895 16.5 8.75552C16.5 7.73071 16.3055 6.70546 15.9155 5.7404ZM14.9253 11.3644C14.5872 12.1982 14.081 12.9784 13.4047 13.6547C12.7284 14.331 11.9482 14.8371 11.1144 15.1753C10.2807 15.5134 9.3932 15.6828 8.50552 15.6828C7.61561 15.6828 6.72593 15.5139 5.89027 15.1762C5.05452 14.8383 4.27277 14.3322 3.59524 13.6548C2.91781 12.9772 2.41168 12.1954 2.07384 11.3597C1.73609 10.524 1.56715 9.6343 1.56719 8.74439C1.56715 7.85674 1.73665 6.96933 2.07468 6.13558C2.41284 5.30174 2.919 4.52159 3.59528 3.84524C4.27162 3.169 5.05174 2.66284 5.88555 2.32465C6.71924 1.98659 7.60664 1.81709 8.4943 1.81709C9.38423 1.81709 10.274 1.986 11.1096 2.32375C11.9454 2.66159 12.7272 3.16771 13.4048 3.84518C14.0822 4.52274 14.5883 5.30446 14.9262 6.14021C15.2639 6.97586 15.4329 7.86555 15.4329 8.75545C15.4328 9.64317 15.2634 10.5306 14.9253 11.3644Z" fill="#FF3A3A"/>
                                        <path d="M9.23718 8.75006L11.8213 6.16591C12.0252 5.962 12.0252 5.63147 11.8213 5.42756C11.6175 5.22369 11.2869 5.22369 11.083 5.42756L8.49884 8.01175L5.91469 5.4276C5.71078 5.22372 5.38025 5.22372 5.17634 5.4276C4.97247 5.63147 4.97247 5.96203 5.17634 6.16594L7.76049 8.75009L5.17634 11.3342C4.97247 11.5381 4.97247 11.8687 5.17634 12.0726C5.38025 12.2765 5.71078 12.2765 5.91469 12.0726L8.49884 9.4884L11.083 12.0726C11.2869 12.2764 11.6174 12.2764 11.8213 12.0726C12.0252 11.8687 12.0252 11.5381 11.8213 11.3342L9.23718 8.75006Z" fill="#FF3A3A"/>
                                    </svg>
                                    }
                                    <span>Contains a number</span>
                                </div>
                            </div>
                            }
                        </div>

                        <BaseButton type="submit" label="Sign Up" hasFullWidth={true} disabled={formValidationStatus} classes="mt-4" />
                    </form>

                    <p className={styles.authFormFooterText}>
                        Already have an account? &nbsp;
                        <Link href="/auth/login" className="text-primary underline">Log in</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
