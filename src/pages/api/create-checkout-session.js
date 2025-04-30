import { createCheckoutSession } from '../../utils/stripe';

export async function post({ request }) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract relevant information
    const { plan, billingInterval } = body;
    
    // Set success and cancel URLs
    const successUrl = new URL('/success', request.url).toString();
    const cancelUrl = new URL('/checkout', request.url).toString();
    
    // Create Stripe checkout session
    const { sessionId } = await createCheckoutSession({
      plan,
      billingInterval,
      successUrl,
      cancelUrl,
    });
    
    // Return the session ID to the client
    return new Response(
      JSON.stringify({ sessionId }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in create-checkout-session:', error);
    
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