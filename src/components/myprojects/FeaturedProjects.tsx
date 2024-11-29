"use client";

import { Flex } from '@/once-ui/components';
import { ProjectCard } from '@/components';
import { Heading, Text } from '@/once-ui/components';
import { useEffect, useState } from 'react';

// Dummy featured projects data
const featuredProjects = [
    {
        id: 1,
        title: "Vezeeta Healthcare Campaign",
        category: "Social Media Designs",
        image: "/projects/vezeeta-campaign.jpg",
        publishedAt: "2024-01-15",
        href: "/myprojects/vezeeta-campaign"
    },
    {
        id: 2,
        title: "Brand Identity Redesign",
        category: "Branding",
        image: "/projects/brand-identity.jpg",
        publishedAt: "2024-01-10",
        href: "/myprojects/brand-identity"
    },
    {
        id: 3,
        title: "Product Launch Video",
        category: "Motion Videos",
        image: "/projects/product-launch.jpg",
        publishedAt: "2024-01-05",
        href: "/myprojects/product-launch"
    },
    {
        id: 4,
        title: "Corporate Event Coverage",
        category: "Video Editing",
        image: "/projects/corporate-event.jpg",
        publishedAt: "2024-01-01",
        href: "/myprojects/corporate-event"
    }
];

interface FeaturedProjectsProps {
    locale: string;
}

export function FeaturedProjects({ locale }: FeaturedProjectsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (!isPaused) {
            intervalId = setInterval(() => {
                setIsTransitioning(false);
                setActiveIndex((current) => (current + 1) % featuredProjects.length);
                setIsTransitioning(true);
            }, 3000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPaused]);

    const handleDotClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setActiveIndex(index);
            setIsTransitioning(true);
        }
    };

    const currentProject = featuredProjects[activeIndex];

    return (
        <Flex
            fillWidth
            direction="column"
            gap="l"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}>
            <Flex direction="column" gap="s">
                <ProjectCard
                    key={currentProject.id}
                    href={currentProject.href}
                    images={[currentProject.image]}
                    title=""
                    content=""
                    description=""
                    avatars={[]}
                    category={currentProject.category}
                />
                <Flex
                    gap="4"
                    paddingX="s"
                    fillWidth
                    maxWidth={32}
                    justifyContent="center">
                    {featuredProjects.map((_, index) => (
                        <Flex
                            key={index}
                            onClick={() => handleDotClick(index)}
                            style={{
                                background: activeIndex === index
                                    ? 'var(--neutral-on-background-strong)'
                                    : 'var(--neutral-alpha-medium)',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                                height: '2px',
                            }}
                            fillWidth />
                    ))}
                </Flex>
            </Flex>
            <Flex
                direction="column"
                gap="xs"
                paddingX="s">
                <Heading
                    as="h2"
                    wrap="balance"
                    variant="display-strong-xs">
                    {currentProject.title}
                </Heading>
                <Text
                    variant="body-default-xs"
                    onBackground="neutral-weak">
                    {new Date(currentProject.publishedAt).toLocaleDateString()}
                </Text>
            </Flex>
        </Flex>
    );
}
