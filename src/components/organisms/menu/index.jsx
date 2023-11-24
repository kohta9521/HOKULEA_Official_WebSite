"use client";
import { useState } from "react";
import Burger from "./burger";
import Stairs from "./Stairs";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";
import Logo from "@/components/atoms/Logo";

export default function Hamburger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      {/* <Logo id={1} link='/' size='medium' color='white' /> */}
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
