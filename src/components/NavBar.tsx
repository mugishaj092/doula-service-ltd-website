'use client'
import React, { useState, useEffect } from "react";
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
import { AlignLeft, AlignRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { images } from "@/utils/constant/images";
import Image from "next/image";

export default function HeaderComponent() {
    const [isActive, setIsActive] = useState<string>("./");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/book-now');  // Navigate to the "book-now" page
    };
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/service" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];  

    useEffect(() => {
        // Update active state based on the current path
        const currentPath = window.location.pathname;
        setIsActive(currentPath);
    }, []);

    return (
        <Navbar
            isBordered
            className="bg-white backdrop-blur-md h-20 flex gap-24"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarBrand>
                <Link className="font-bold text-inherit" color="foreground" href="./">
                <Image width={80} src={images.logo} alt="logo" />
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
                    <Button as={Link} onClick={handleButtonClick} color="primary" href="#" variant='solid' className="rounded-md">
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
