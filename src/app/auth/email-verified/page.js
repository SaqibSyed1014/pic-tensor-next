import styles from "@/styles/auth-forms.module.css";
import UserProfile from "@/components/UserProfile";
import GenerateImagePrompt from "@/components/generate-image-prompt";

export default function EmailVerifiedPage() {
    return (
            <div className={styles.authFormLayout}>
                <h1 className={styles.authFormHeading}>
                    Email Is verified
                </h1>

                <div className="flex flex-col justify-stretch items-center gap-5">
                    <p className="text-center">
                        Congratulation!! Your email is verified. Start generating now.
                    </p>

                    <div className="mx-auto">
                        <UserProfile/></div>

                    <GenerateImagePrompt />

                </div>
            </div>
    )
}
