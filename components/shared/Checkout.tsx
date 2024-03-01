import { iEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: iEvent; userId: string }) => {
  const onCheckout = async () => {
    console.log("checkout");
  };
  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
