import BaseButton from "@/components/base-button";

export default function GenerateImagePrompt() {
    const btnIcon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M6.62488 3.37505L7.06238 2.50003L7.9374 2.06253L7.06238 1.62502L6.62488 0.75L6.18737 1.62502L5.31235 2.06253L6.18737 2.50003L6.62488 3.37505ZM2.6873 5.12509L3.4163 3.66681L4.87484 2.93754L3.4163 2.20827L2.6873 0.75L1.9583 2.20827L0.499756 2.93754L1.9583 3.66681L2.6873 5.12509ZM12.3125 8.62515L11.5835 10.0834L10.1249 10.8127L11.5835 11.542L12.3125 13.0002L13.0415 11.542L14.5 10.8127L13.0415 10.0834L12.3125 8.62515ZM14.2435 3.32665L11.9234 1.00649C11.7527 0.835314 11.5288 0.75 11.3048 0.75C11.0809 0.75 10.8569 0.835314 10.686 1.00649L0.756245 10.9363C0.414442 11.2781 0.414442 11.8321 0.756245 12.1736L3.07641 14.4938C3.24731 14.6647 3.47126 14.75 3.69494 14.75C3.91889 14.75 4.14283 14.6647 4.31374 14.4938L14.2435 4.56371C14.5853 4.22245 14.5853 3.66818 14.2435 3.32665ZM10.3287 6.31347L8.93656 4.92137L11.3046 2.55336L12.6967 3.94545L10.3287 6.31347Z" fill="black"/>
    </svg>

    return (
        <div className="relative max-w-[740px] flex-1">
            <input type="text" placeholder="Write a prompt to generate image" className="w-full h-16 placeholder:text-light bg-lime-dark border-0 outline-0 py-2 px-5 rounded-[800px]" />
            <BaseButton
                classes="absolute top-1/2 -translate-y-1/2 right-3"
                label="Generate"
                hasFullWidth={false}
                type="button"
                isIconPrepended={true}
                icon={btnIcon}
            />
        </div>
    )
}
