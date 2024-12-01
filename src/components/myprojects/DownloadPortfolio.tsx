"use client";

import { Button, Flex, Heading } from '@/once-ui/components';
import { Background } from '@/once-ui/components/Background';
import { mailchimp } from '@/app/resources';
import styles from './DownloadPortfolio.module.scss';

export function DownloadPortfolio() {
    const handleDownload = () => {
        try {
            // Create URL for the PDF
            const pdfPath = '/files/portfolio.pdf';
            
            // Use window.open for direct download
            window.open(pdfPath, '_blank');
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    return (
        <Flex
            style={{overflow: 'hidden'}}
            position="relative"
            fillWidth
            padding="l"
            radius="l"
            marginBottom="m"
            direction="column"
            alignItems="center"
            align="center"
            background="surface"
            border="neutral-medium"
            borderStyle="solid-1"
            className={styles.container}>
            <Background
                position="absolute"
                gradient={mailchimp.effects.gradient}
                dots={mailchimp.effects.dots}
                lines={mailchimp.effects.lines}/>
            <Heading
                style={{position: 'relative'}}
                variant="display-strong-m"
                marginBottom="l"
                className={styles.heading}>
                Curious to See More?{'\n'}
                Grab My Full Portfolio!
            </Heading>
            <Button
                variant="secondary"
                size="l"
                className={styles.button}
                onClick={handleDownload}>
                Download My Portfolio Now
            </Button>
        </Flex>
    );
}
