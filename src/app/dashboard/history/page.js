'use client'
import styles from '@/styles/home.module.css';
import {useEffect, useState} from "react";
import ImageGallery from "@/components/image-gallery";
import { filterOptions, images } from "@/utils/constants";

export default function HomePage() {
    const [selectedFilter, selectFilter] = useState('new');
    let [filteredImages, setImageList] = useState(images);

    useEffect(() => {
        setImageList(images.filter(image => {
            if (selectedFilter === 'new') return image.isNew;
            else if (selectedFilter === 'best') return image.isBest;
            else if (selectedFilter === 'favourite') return image.isFavourite;
        }));
    }, [selectedFilter]);


    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-4">
                {filterOptions.map((option, index) => (
                    <FilterOption
                        key={index}
                        label={option.label}
                        isActive={selectedFilter === option.value}
                        selectFilter={() => selectFilter(option.value)}
                    />
                ))}
            </div>

            <ImageGallery generatedImageList={filteredImages} />
        </div>
    )
}

function FilterOption({ label, isActive, selectFilter }) {
    return (
        <div className={`${styles.filterOption} ${isActive && styles.activeFilter}`} onClick={selectFilter}>
            {label}
        </div>
    )
}
