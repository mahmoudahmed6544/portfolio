"use client";

import { Flex, Heading, SmartImage, SmartLink } from '@/once-ui/components';
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
        image: "/projects/branding-category.jpg",
        href: "/myprojects/category/branding"
    },
    {
        id: 2,
        title: "Social Media\nDesigns",
        image: "/projects/social-media-category.jpg",
        href: "/myprojects/category/social-media"
    },
    {
        id: 3,
        title: "Motion &\nEditing Videos",
        image: "/projects/motion-category.jpg",
        href: "/myprojects/category/motion"
    },
    {
        id: 4,
        title: "3D\nDesigns",
        image: "/projects/3d-category.jpg",
        href: "/myprojects/category/3d-designs"
    }
];

export function CategoryGrid() {
    return (
        <Flex
            fillWidth
            direction="column"
            className={styles.container}>
            <Heading
                variant="display-strong-m"
                marginBottom="m"
                className={styles.heading}>
                Project Categories
            </Heading>
            <Flex
                fillWidth
                wrap
                className={styles.grid}>
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
                                aspectRatio="9/7"
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
            </Flex>
        </Flex>
    );
}
