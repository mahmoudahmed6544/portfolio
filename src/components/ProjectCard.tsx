"use client";

import { AvatarGroup, Button, Flex, Heading, RevealFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
    category?: string;
    publishedAt?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars,
    category,
    publishedAt
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const t = useTranslations();

    const handleImageClick = () => {
        if(images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);

        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setActiveIndex(index);
            setIsTransitioning(true);
        }
    };

    return (
        <Flex
            fillWidth gap="m"
            direction="column">
            <Flex
                direction="column"
                gap="m">
                {category && (
                    <Button
                        variant="tertiary"
                        size="s"
                        style={{
                            width: 'fit-content',
                            pointerEvents: 'none'
                        }}>
                        {category}
                    </Button>
                )}
                <Flex onClick={handleImageClick} position="relative">
                    <RevealFx
                        style={{width: '100%'}}
                        trigger={isTransitioning}
                        speed="fast">
                        <SmartImage
                            tabIndex={0}
                            radius="l"
                            alt={title}
                            aspectRatio="16 / 9"
                            src={images[activeIndex]}
                            style={{
                                border: '1px solid var(--neutral-alpha-weak)',
                                ...(images.length > 1 && {
                                    cursor: 'pointer',
                                }),
                            }}/>
                    </RevealFx>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                gap="xs"
                paddingX="s">
                {title && (
                    <Heading
                        as="h2"
                        wrap="balance"
                        variant="display-strong-xs">
                        {title}
                    </Heading>
                )}
                {publishedAt && (
                    <Text
                        variant="body-default-xs"
                        onBackground="neutral-weak">
                        {new Date(publishedAt).toLocaleDateString()}
                    </Text>
                )}
            </Flex>
            {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
                <Flex
                    flex={7} direction="column"
                    gap="s">
                    {avatars?.length > 0 && (
                        <AvatarGroup
                            avatars={avatars}
                            size="m"
                            reverseOrder/>
                    )}
                    {description?.trim() && (
                        <Text
                            wrap="balance"
                            variant="body-default-s"
                            onBackground="neutral-weak">
                            {description}
                        </Text>
                    )}
                    {content?.trim() && (
                        <SmartLink
                            suffixIcon="chevronRight"
                            style={{margin: '0', width: 'fit-content'}}
                            href={href}>
                                <Text
                                    variant="body-default-s">
                                   {t("projectCard.label")}
                                </Text>
                        </SmartLink>
                    )}
                </Flex>
            )}
        </Flex>
    );
};
