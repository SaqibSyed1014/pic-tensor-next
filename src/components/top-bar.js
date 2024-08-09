'use client'
import UserProfile from "@/components/UserProfile";
import GenerateImagePrompt from "@/components/generate-image-prompt";

export default function TopBar() {
    return (
        <section className="border-b border-light mb-5 md:mb-10">
            <div className="flex lg:justify-between gap-20 mt-5 md:mt-8 mb-4">
                <GenerateImagePrompt />

                <div className="max-lg:hidden">
                    <UserProfile/>
                </div>
            </div>
        </section>
    )
}
