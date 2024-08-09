import styles from "@/styles/auth-forms.module.css";
import {generatedAvatars} from "@/utils/constants";
import BaseButton from "@/components/base-button";
import ImageBgHoverEffect from "@/components/image-bg-hover-effect";
import Link from "next/link";

export default function VerifyEmailPage() {
    return (
        <div>
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Congratulations !!
                </h1>

                <div className="flex flex-col gap-5 w-[600px] mx-auto">
                    <p className="text-center">For security reasons, please help us by verifying your email address.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {generatedAvatars.map((avatar, index) => {
                            return <ImageBgHoverEffect>
                                <div className="w-32 h-36 overflow-hidden rounded-[10px]" key={index}>
                                    <img src={avatar} alt="Avatars" className="object-cover w-full h-full"/>
                                </div>
                            </ImageBgHoverEffect>
                        })}
                    </div>
                    <Link href="/auth/email-verified"><BaseButton label="Verify Email" hasFullWidth={true}/></Link>
                </div>
            </div>
        </div>
    )
}
