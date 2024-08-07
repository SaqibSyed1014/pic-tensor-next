'use client'
import {useState} from "react";
import GallerySkeleton from "@/components/gallery-skeleton";
import ImageGallery from "@/components/image-gallery";
import {images} from "@/utils/constants";

export default function GeneratePage() {
    const [showLoader, setLoader] = useState(true);
    const [showImagesLoader, setImagesLoader] = useState(true);

    setTimeout(() => setLoader(false), 3000);
    setTimeout(() => setImagesLoader(false), 7000);
    return (
        <div className="generate-page">
            {showLoader ? <div className="h-[calc(100vh_-_200px)] flex justify-center items-center">
                <div className="text-center">
                    <img src="/images/loader.gif" alt="Loader"/>
                    <p>Generating...</p>
                </div>
            </div> : <ImageGallery generatedImageList={images} isLoading={showImagesLoader} />
            }
        </div>
    )
}
