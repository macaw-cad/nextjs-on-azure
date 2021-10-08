import { Configuration, Me } from 'ordercloud-javascript-sdk';
import { useEffect } from 'react';

export const Category: React.FC = () => {
  async function getAndSetProducts() {
    const clientId = process.env.NEXT_PUBLIC_OC_CLIENT_ID || '';
    const baseApiUrl = process.env.NEXT_PUBLIC_OC_BASE_API_URL;

    Configuration.Set({
      clientID: clientId,
      baseApiUrl: baseApiUrl,
      cookieOptions: { prefix: 'hds-nextjs', path: '/' },
    });

    try {
      const response = await Me.ListProducts({
        filters: {
          'xp.Facets.Color': 'white',
        },
      });
      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getAndSetProducts();
  }, []);

  return (
    <div>
      <h1>Ordercloud category!</h1>
    </div>
  );
};
