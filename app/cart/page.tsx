import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { ROUTES } from "@/core/routes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cart | Shopping list",
};

export default async function Cart() {
  const cart = null;
  return (
    <div>
      <Title>Cart</Title>
      {!cart ? (
        <div>
          <p>Your cart is still empty.</p>
          <Button>
            <Link href={ROUTES.static.home} className="bottom-2 bg">
              back to shopping
            </Link>
          </Button>
        </div>
      ) : (
        <p>Your prod list</p>
      )}
    </div>
  );
}
