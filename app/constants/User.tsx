import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function Menu() {
  

    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }
    const signOut = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/login");
    };

    return (
        <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div>
                            <Button variant="ghost"  className="p-0 rounded-full" >
                                <Avatar>
                                    { user? (
                                    <AvatarImage src='' alt="@vm" />
                                   
                                    ) : (
                                    <AvatarFallback>
                                        <div className="avatar font-bold ">
                                             CN   
                                            </div>
                                            </AvatarFallback>
                                    ) }
                                </Avatar>
                        </Button>
               </div>
                    </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <div>
                            <p>
                                Signed in as
                            </p>
                            <p className="text-sm text-gray-500">
                                { user?.email }
                            </p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite Friends</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>GitHub</DropdownMenuItem>
                <DropdownMenuItem disabled>Support</DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <form action={ signOut }>
                        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                            Logout
                        </button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
