import BaseButton from "@/components/base-button";
import { btnIcon } from "@/utils/constants";

export default function GenerateImagePrompt() {
    return (
        <div className="relative max-w-[740px] flex-1">
            <input type="text" placeholder="Write a prompt to generate image" className="w-full h-[52px] md:h-16 text-sm md:text-base placeholder:text-light bg-lime-dark border-0 outline-0 py-2 px-3 md:px-5 rounded-[800px]" />
            <BaseButton
                classes="absolute top-1/2 -translate-y-1/2 right-2 md:right-3"
                label="Generate"
                hasFullWidth={false}
                type="button"
                isIconPrepended={true}
                icon={btnIcon}
            />
        </div>
    )
}
