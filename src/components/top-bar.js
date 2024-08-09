'use client'
import BaseButton from "@/components/base-button";
import UserProfile from "@/components/UserProfile";

export default function TopBar() {
    return (
        <section className="border-b border-light mb-10">
            <div className="flex justify-between gap-20 mt-8 mb-4">
                <div className="flex items-center gap-10 xl:gap-40 py-2">
                    <p className="text-sm">Cybernetic tools, robots, software, networks, biopunk colourful design,Cybernetic.</p>
                    <div>
                        <BaseButton label="Generate" hasFullWidth={false} type="button" />
                    </div>
                </div>

                <div className="max-lg:hidden">
                    <UserProfile/>
                </div>
            </div>
        </section>
    )
}
