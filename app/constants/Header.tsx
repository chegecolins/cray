
import React from "react";
import { Navbar,Button, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { createClient } from "@/utils/supabase/server";
import { FaBars, FaSearch } from "react-icons/fa";
import { redirect } from "next/navigation";
import Menu from "./User";
import Cart from "../pages/product/cart";
import { ModeToggle } from "./Theme_Toggle";



export default async function Header() {
    const isAuthenticated = async () => {
        return true;
    
    }
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <Navbar isBordered>
            <div>
                <NavbarContent justify="start">
                    <NavbarBrand className="mr-4">

                        <p className="hidden sm:block font-bold text-inherit">Venity Mall</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-3">
                        <NavbarItem>
                            <Link className="text-gray-900 dark:text-gray-50" href="/pages/home">
                                Home
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="/pages/shop" aria-current="page" color="primary">
                                Shop
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/pages/vendors">
                                Vendors
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#/pages/about">
                                About Us
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/pages/contact">
                                Contact
                            </Link>
                        </NavbarItem>
                        
                    </NavbarContent>
                </NavbarContent>


                <NavbarContent justify="start" className=" md:hidden  mx-0 px-0 justify-between">
                    <Popover placement="bottom-start" offset={ 20 } showArrow>
                        <PopoverTrigger>
                            <Button>
                                <FaBars />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2 flex flex-col">
                                <Link href="/pages/home" className=" py-1 px-2 hover:bg-slate-300 rounded-lg ">
                                    {/* <HomeIcon className="mr-2" /> */}
                                    Home
                                </Link>
                                <Link href="/pages/shop" className=" py-1 px-2 hover:bg-slate-300 rounded-lg ">
                                    {/* <HomeIcon className="mr-2" /> */}
                                    Shop
                                </Link>
                                <Link href="/pages/vendors" className=" py-1 px-2 hover:bg-slate-300 rounded-lg ">
                                    {/* <HomeIcon className="mr-2" /> */}
                                    Vendors
                                </Link>
                                <Link href="/pages/about" className=" py-1 px-2 hover:bg-slate-300 rounded-lg ">
                                    {/* <HomeIcon className="mr-2" /> */}
                                    About Us
                                </Link>
                                <Link href="/pages/contact" className=" py-1 px-2 hover:bg-slate-300 rounded-lg ">
                                    {/* <HomeIcon className="mr-2" /> */}
                                    Contact
                                </Link>

                            </div>
                        </PopoverContent>
                    </Popover>
                </NavbarContent>

           </div>
            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={ {
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    } }
                    placeholder="Type to search..."
                    size="sm"
                    startContent={ <FaSearch /> }
                    type="search"
                />
                <ModeToggle />
                <Cart />
                <div>
                    { user ? (
                        <div className="flex ">
                            <Menu />
                            
                        </div>
                    ) : (
                            <Link
                                href="/login"
                                className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                                Login
                            </Link>
                        )
   
                        }
                </div>
            </NavbarContent>
        </Navbar>
    );
}


function MoreHorizontalIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}

function HomeIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}
