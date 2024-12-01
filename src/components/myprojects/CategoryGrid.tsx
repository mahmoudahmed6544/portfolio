"use client";

import { Flex, Heading, SmartImage, SmartLink } from '@/once-ui/components';
import Masonry from 'react-masonry-css';
import styles from './CategoryGrid.module.scss';

interface Category {
    id: number;
    title: string;
    image: string;
    href: string;
}

const categories: Category[] = [
    {
        id: 1,
        title: "Branding\nProjects",
        image: "/images/categories/branding-category.jpg",
        href: "/myprojects/category/branding"
    },
    {
        id: 2,
        title: "Social Media\nDesigns",
        image: "/images/categories/social-media-category.jpg",
        href: "/myprojects/category/social-media"
    },
    {
        id: 3,
        title: "Motion &\nEditing Videos",
        image: "/images/categories/motion-category.jpg",
        href: "/myprojects/category/motion"
    },
    {
        id: 4,
        title: "3D\nDesigns",
        image: "/images/categories/3d-category.jpg",
        href: "/myprojects/category/3d"
    }
];

const breakpointColumns = {
    default: 2, // 2 columns by default
    1024: 2,    // 2 columns on tablets
    768: 1      // 1 column on mobile
};

export function CategoryGrid() {
    return (
        <Flex
            fillWidth
            direction="column"
            className={styles.container}>
            <Heading
                variant="display-strong-m"
                className={styles.heading}>
                Project Categories
            </Heading>
            <Masonry
                breakpointCols={breakpointColumns}
                className={styles.masonryGrid}
                columnClassName={styles.masonryColumn}>
                {categories.map((category) => (
                    <SmartLink
                        key={category.id}
                        href={category.href}
                        className={styles.link}>
                        <Flex
                            direction="column"
                            className={styles.categoryCard}>
                            <SmartImage
                                src={category.image}
                                alt={category.title}
                                aspectRatio="16/9"
                                className={styles.image}
                            />
                            <Heading
                                variant="display-strong-xs"
                                className={styles.title}>
                                {category.title}
                            </Heading>
                        </Flex>
                    </SmartLink>
                ))}
            </Masonry>
        </Flex>
    );
}
