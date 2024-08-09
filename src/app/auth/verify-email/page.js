import styles from "@/styles/auth-forms.module.css";
import {generatedAvatars} from "@/utils/constants";
import BaseButton from "@/components/base-button";
import ImageBgHoverEffect from "@/components/image-bg-hover-effect";
import Link from "next/link";

export default function VerifyEmailPage() {
    return (
            <div className={styles.authFormLayout}>
                <h1 className={`${styles.authFormHeading} !text-4xl`}>
                    Congratulations!
                </h1>

                <div className="flex flex-col gap-5 md:w-[600px] mx-auto">
                    <p className="text-center">For security reasons, please help us by verifying your email address.</p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {generatedAvatars.map((avatar, index) => {
                            return <ImageBgHoverEffect>
                                <div className="w-[87px] h-[97px] lg:w-32 lg:h-36 overflow-hidden rounded-[10px]" key={index}>
                                    <img src={avatar} alt="Avatars" className="object-cover w-full h-full"/>
                                </div>
                            </ImageBgHoverEffect>
                        })}
                    </div>
                    <Link href="/auth/email-verified"><BaseButton label="Verify Your Email" hasFullWidth={true}/></Link>
                </div>
            </div>
    )
}
