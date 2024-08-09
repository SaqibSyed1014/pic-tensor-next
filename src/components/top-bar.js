'use client'
import BaseButton from "@/components/base-button";
import UserProfile from "@/components/UserProfile";
import GenerateImagePrompt from "@/components/GenerateImagePrompt";

export default function TopBar() {
    return (
        <section className="border-b border-light mb-10">
            <div className="flex lg:justify-between gap-20 mt-8 mb-4">
                <GenerateImagePrompt />

                <div className="max-lg:hidden">
                    <UserProfile/>
                </div>
            </div>
        </section>
    )
}
