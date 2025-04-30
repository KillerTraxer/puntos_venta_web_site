import { handleWebhookEvent } from '../../utils/stripe';

export async function post({ request }) {
  try {
    // Get the Stripe signature from headers
    const signature = request.headers.get('stripe-signature');
    
    if (!signature) {
      return new Response(
        JSON.stringify({ error: 'Missing stripe-signature header' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Get the raw body of the request
    const body = await request.text();
    
    // In a real implementation, you would verify the webhook signature here
    // const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    
    // For demo purposes, we'll just parse the JSON
    const event = JSON.parse(body);
    
    // Handle the webhook event
    const result = await handleWebhookEvent(event);
    
    // Return success
    return new Response(
      JSON.stringify(result),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in webhook handler:', error);
    
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