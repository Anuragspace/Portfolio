
import { memo } from 'react';

interface MetaHeadProps {
  title?: string;
  description?: string;
}

const MetaHead = memo(({ 
  title = "Anurag Adarsh - UI/UX Designer", 
  description = "Portfolio of Anurag Adarsh, a UI/UX Designer with a passion for creating user-centered digital experiences."
}: MetaHeadProps) => {
  // Update document title
  if (typeof document !== 'undefined') {
    document.title = title;
  }

  return (
    <>
      {/* These meta tags would normally go into the document head */}
      {/* In a non-SSR React app, we'll use effects to update the head */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#3E40EF" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="light" />
        
        {/* Performance meta tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </div>
    </>
  );
});

MetaHead.displayName = 'MetaHead';

export default MetaHead;
