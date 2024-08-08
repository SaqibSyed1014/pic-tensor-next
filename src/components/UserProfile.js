export default function UserProfile() {
    return (
        <div className="flex gap-3 items-center w-[170px] shrink-0">
            <div className="size-11 overflow-hidden border border-light rounded-full">
                <img className="w-full h-full object-cover" src="/images/avatar/user.png" alt="User" />
            </div>
            <p className="text-sm text-nowrap">Abdul Wahab</p>
        </div>
    )
}
