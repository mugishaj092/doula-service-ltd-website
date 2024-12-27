'use client'
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { AlignLeft, AlignRight } from "lucide-react";

export default function HeaderComponent() {
    const [isActive, setIsActive] = useState("./");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "./" },
        { label: "Services", href: "/service" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "./#contact" },
    ];  

    return (
        <Navbar
            isBordered
            className="bg-white backdrop-blur-md h-20 flex gap-24"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarBrand>
                <Link className="font-bold text-inherit" color="foreground" href="./">
                    <span className="text-primary font-semibold p-2 text-4xl">
                        Doula
                    </span>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {navItems.map((item) => (
                    <NavbarItem key={item.href} isActive={isActive === item.href}>
                        <Link
                            onClick={() => setIsActive(item.href)}
                            color="foreground"
                            href={item.href}
                            className={`${isActive === item.href ? "!text-primary" : ""}`}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant='solid' className="rounded-md">
                        Book Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden !justify-end">
                <NavbarMenuToggle
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    icon={
                        isMobileMenuOpen ? (
                            <AlignLeft size={32} strokeWidth="4px" className="text-primary" />
                        ) : (
                            <AlignRight
                                size={32}
                                strokeWidth="4px"
                                className="text-primary"
                            />
                        )
                    }
                />
            </NavbarContent>

            <NavbarMenu className="mt-4">
                {navItems.map((item) => (
                    <NavbarMenuItem key={item.href}>
                        <Link
                            onClick={() => {
                                setIsActive(item.href);
                                setIsMenuOpen(false);
                            }}
                            className="text-black dark:text-white"
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}