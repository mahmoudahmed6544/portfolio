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
    default: 2,
    1024: 2,
    768: 1
};

// Custom styles for masonry-grid
const masonryStyles = {
    display: 'flex',
    marginLeft: '-60px', /* Compensate for gutter size */
    width: 'auto'
};

// Custom styles for masonry-grid_column
const columnStyles = {
    paddingLeft: '60px', /* Gutter size */
    backgroundClip: 'padding-box'
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
            <div style={{ padding: '0 var(--responsive-space-m)' }}>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className={styles.masonryGrid}
                    columnClassName={styles.masonryColumn}
                    style={masonryStyles}>
                    {categories.map((category) => (
                        <div key={category.id} style={{ marginBottom: '60px' }}>
                            <SmartLink
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
                        </div>
                    ))}
                </Masonry>
            </div>
        </Flex>
    );
}
