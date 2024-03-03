import React from "react";
import { FaBars } from "react-icons/fa";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link, User } from "@nextui-org/react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function MobileNav() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <FaBars size={24} />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <Link href="/pages/home">
                            <p className="font-bold">
                                Home
                            </p>
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <Link href="/pages/shop">
                            <p className="font-bold">
                                Shop
                            </p>
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <Link href="/pages/vendors">
                            <p className="font-bold">
                                Vendors
                            </p>
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">
                        Help & Feedback
                    </DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
