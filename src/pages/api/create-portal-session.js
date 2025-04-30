import { createPortalSession } from '../../utils/stripe';

export async function post({ request }) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract the customer ID
    const { customerId } = body;
    
    if (!customerId) {
      return new Response(
        JSON.stringify({ error: 'Missing customer ID' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Set the return URL
    const returnUrl = new URL('/', request.url).toString();
    
    // Create the portal session
    const { url } = await createPortalSession({
      customerId,
      returnUrl,
    });
    
    // Return the portal URL to the client
    return new Response(
      JSON.stringify({ url }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in create-portal-session:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}