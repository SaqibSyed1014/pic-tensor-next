import BaseButton from "@/components/base-button";

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

                <div className="flex gap-3 items-center w-[170px] shrink-0">
                    <div className="size-11 overflow-hidden border border-light rounded-full">
                        <img className="w-full h-full object-cover" src="/images/avatar/user.png" alt="User" />
                    </div>
                    <p className="text-sm text-nowrap">Abdul Wahab</p>
                </div>
            </div>

        </section>
    )
}
