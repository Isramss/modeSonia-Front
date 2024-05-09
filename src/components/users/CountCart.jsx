// Composant CountCart
import React, { useState, useEffect } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { Flex } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";

function CountCart() {
  const { cart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartItemCount(cart.length);
    }
  }, [cart]);

  return (
    <Flex>
      <FaBagShopping />
      {cartItemCount > 0 && (
        <span style={{ marginLeft: 5 }}>{cartItemCount}</span>
      )}
    </Flex>
  );
}

export default CountCart;
