export default function ImageBgHoverEffect({ children }) {
    return (
        <div className="rounded-[10px] p-1 bg-transparent hover:bg-gradient-to-b hover:from-primary hover:to-white/0 hover:to-[125%] transition">
            {children}
        </div>
    )
}
