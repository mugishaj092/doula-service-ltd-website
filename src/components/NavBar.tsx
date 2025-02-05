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
        router.push('/book-now');
    };
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/service" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Became a doula    ", href: "/became-a-doula" },
    ];  

    useEffect(() => {
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
                    <div className="flex flex-col justify-center gap-0 h-10">
                        <span className="text-primary font-semibold text-3xl">
                            Doula
                        </span>
                        <span className="text-primary font-semibold text-lg">
                            NYINAWUMUNTU
                        </span>
                    </div>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {navItems.map((item) => (
                    <NavbarItem key={item.href} isActive={isActive === item.href}>
                        <Link
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive(item.href);
                                router.push(item.href);
                            }}
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
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive(item.href);
                                router.push(item.href); 
                                setIsMenuOpen(false);
                            }}
                            className={`text-black dark:text-white ${isActive === item.href ? "!text-primary" : ""}`}
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
