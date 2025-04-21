// components/MetaHead.tsx
import { Helmet } from 'react-helmet';

interface MetaHeadProps {
  title?: string;
  description?: string;
}

const MetaHead = ({ 
  title = "Anurag Adarsh - UI/UX Designer", 
  description = "Portfolio of Anurag Adarsh, a UI/UX Designer with a passion for creating user-centered digital experiences."
}: MetaHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3E40EF" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="color-scheme" content="light" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Helmet>
  );
};

export default MetaHead;
