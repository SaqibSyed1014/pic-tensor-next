import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function GallerySkeleton() {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1280: 4}}>
            <Masonry gutter="24px 16px">
                {Array.from({ length: 15 }).map((_, index) => (
                    <ImageBoxSkeleton key={index} />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

function ImageBoxSkeleton() {
    return (
        <div>

        </div>
    )
}
