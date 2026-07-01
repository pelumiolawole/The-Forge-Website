import type { Metadata } from "next";
import { OrderConfirmedClient } from "@/components/book/OrderConfirmedClient";

export const metadata: Metadata = {
  title: "Confirm Your Order | Pelumi Olawole",
  description: "Submit your delivery details to complete your Nigeria book order.",
  robots: { index: false, follow: false },
};

export default function OrderConfirmedPage() {
  return <OrderConfirmedClient />;
}
