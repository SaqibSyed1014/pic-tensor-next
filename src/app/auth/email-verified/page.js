import styles from "@/styles/auth-forms.module.css";
import BaseButton from "@/components/base-button";
import Link from "next/link";
import UserProfile from "@/components/UserProfile";
import GenerateImagePrompt from "@/components/GenerateImagePrompt";

export default function EmailVerifiedPage() {
    return (
        <div>
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Email Is verified
                </h1>

                <div className="flex flex-col items-center gap-5">
                    <p className="text-center">
                        Congratulation!! Your email is verified. Start generating now.
                    </p>

                    <UserProfile />

                    <GenerateImagePrompt />

                </div>
            </div>
        </div>
    )
}
