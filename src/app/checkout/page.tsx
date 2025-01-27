"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/cartslice";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Header from "@/components/Header";
import Footer from "../[home]/footer/page";

const stripePromise = loadStripe("pk_test_51QlCGUHbyxbjD1xpCFqEN3uEXqPJyyq0p1Ar9jHpHSEVfPopWTFYkh9fSdSkKi3XZUUS0M0xbhUUO1JsTscO6gdp00tQuJzsI2");

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const createPaymentIntent = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartItems,
            shippingDetails: {
              name: `${formData.firstName} ${formData.lastName}`,
              address: formData.address,
              city: formData.city,
              state: formData.state,
              zip: formData.zip,
            },
          }),
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setClientSecret(data.clientSecret);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error creating payment intent:", error.message);
          setErrorMessage(error.message);
        } else {
          console.error("Unexpected error:", error);
          setErrorMessage("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (cartItems.length > 0) createPaymentIntent();
  }, [cartItems, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    const cardElement = elements.getElement(CardElement);

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement!,
            billing_details: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              phone: formData.phone,
            },
          },
        }
      );

      if (error) {
        throw new Error(error.message);
      }

      if (paymentIntent?.status === "succeeded") {
        setSuccessMessage("Payment successful!");
        dispatch(clearCart());
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Payment failed:", error.message);
        setErrorMessage(error.message);
      } else {
        console.error("Unexpected error:", error);
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-6 max-w-7xl flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-lg">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  ${item.discountedPrice * item.quantity}
                </p>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <p className="text-lg font-semibold">
                Total: $
                {cartItems
                  .reduce(
                    (total, item) =>
                      total + item.discountedPrice * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>

          {/* Right Column: Checkout Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Checkout Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">
                  Contact Information
                </h3>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Billing Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md my-4"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mt-4"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Payment Options</h3>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": { color: "#aab7c4" },
                      },
                      invalid: { color: "#9e2146" },
                    },
                  }}
                  className="border p-2 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#14a2f5] text-white font-medium rounded-md hover:bg-[#399ed9]"
                disabled={!stripe || loading}
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
            </form>

            {errorMessage && (
              <div className="mt-4 text-red-500 font-medium">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="mt-4 text-green-500 font-medium">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CheckoutPageWrapper = () => (
  <Elements stripe={stripePromise}>
    <CheckoutPage />
  </Elements>
);

export default CheckoutPageWrapper;
