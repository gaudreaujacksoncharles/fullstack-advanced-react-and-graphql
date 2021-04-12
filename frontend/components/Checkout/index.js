import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { CheckoutFormStyles, CheckoutButton } from './styles'
import { useState } from 'react';
import nProgress from 'nprogress';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const stripe = useStripe(false)
    const elements = useElements()

    async function handleSubmit(e) {
        // 1. Stop the form from submiting and turn the loader on
        e.preventDefault();
        setLoading(true)
        console.log('We gotta do some work..');
        // 2. Start the page transition
        nProgress.start()
        // 3. Create the payment method via stripe (token comes back here if successful)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        console.log(paymentMethod)
        // 4. Handle any errors from stripe
        if (error) {
            setError(error)
        }
        // 5. Send the token from step 3 to our keystone server, via a custom mutation

        // 6. Change the page to view the order

        // 7. Cose the cart

        // 8. Turn the loader off
        setLoading(false)
        nProgress.done()
    }
    return (
        <CheckoutFormStyles onSubmit={handleSubmit}>
            { error && <p>{error.message}</p> }
            <CardElement />
            <CheckoutButton>Check Out Now</CheckoutButton>
        </CheckoutFormStyles>
    );
}

function Checkout() {
    return (
        <Elements stripe={stripeLib}>
            <CheckoutForm/>
        </Elements>
    )
}

export { Checkout };