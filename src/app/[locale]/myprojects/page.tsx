import { getPosts } from '@/app/utils';
import { Flex, Heading } from '@/once-ui/components';
import { FeaturedProjects } from '@/components/myprojects/FeaturedProjects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {

    const t = await getTranslations();
    const { myprojects } = renderContent(t);

    const title = myprojects.title;
    const description = myprojects.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/myprojects/`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function myprojects(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person, myprojects } = renderContent(t);

    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: myprojects.title,
                        description: myprojects.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        }
                    }),
                }}
            />
            <Flex
                fillWidth
                direction="column"
                gap="xl">
                <FeaturedProjects locale={locale} />
            </Flex>
        </Flex>
    );
}