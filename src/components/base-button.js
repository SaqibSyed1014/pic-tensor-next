export default function BaseButton({ type, hasFullWidth, label, classes, isIconPrepended, icon, disabled }) {
    return (
        <button type={type} disabled={disabled} className={`flex justify-center items-center gap-2 bg-primary py-2 md:py-3 px-4 md:px-5 rounded-3xl text-black font-medium hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${hasFullWidth?'w-full':''} ${classes}`}>
            {isIconPrepended && icon}
            {label}
        </button>
    )
}
