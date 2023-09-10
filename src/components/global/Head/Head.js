import React from 'react';
import {Helmet} from 'react-helmet';

function Head({keyword, ogKeyword, title, ogTitle, description, ogDescription}) {
    return (
        <Helmet>

            <title>{title}</title>
            <meta property="og:title"
                  content={ogTitle} />

            <meta name="description"
                  content={description} />

            <meta property="og:description"
                  content={ogDescription} />

            <meta name="keyword"
                  content={keyword} />

            <meta property="og:Keyword"
                  content={ogKeyword} />
        </Helmet>
    );
}

 export default Head;
