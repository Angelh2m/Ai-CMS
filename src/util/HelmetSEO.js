import React from 'react'
import { Helmet } from "react-helmet";

export default function HelmetSEO({
    title,
    description, seoUrl,
    image }) {
    const siteName = "LivingWithAnnah.com";

    return (
        <div>
            <Helmet
                title={`${title} | Living With Annah`}
                description={`${description} | Living With Annah`}
                meta={[
                    { description: description },
                    { name: 'author', content: title },

                    { name: 'twitter:site', content: siteName },
                    { name: 'twitter:creator', content: siteName },
                    { name: 'twitter:title', content: title },
                    { name: 'twitter:image', content: image },

                    { property: 'og:title', content: title },
                    { property: 'og:site_name', content: siteName },
                    { property: 'og:type', content: "website" },
                    { property: 'og:url', content: siteName + seoUrl },
                    { property: 'og:description', content: title },
                    { property: 'og:image', content: image },
                    { property: 'og:site_name', content: siteName },
                ]}
            >
            </Helmet>

        </div>
    )
}
