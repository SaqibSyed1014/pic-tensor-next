export default function BaseButton({ type, hasFullWidth, label, isIconPrepended, icon }) {
    return (
        <button type={type} className={`flex justify-center items-center gap-2 bg-primary py-3 rounded-3xl text-black font-medium hover:opacity-80 ${hasFullWidth?'w-full':''}`}>
            {isIconPrepended && icon}
            {label}
        </button>
    )
}
