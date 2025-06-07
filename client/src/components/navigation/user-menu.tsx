import { BoltIcon, LogOutIcon, UserIcon, UserRoundIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  isAuthed?: boolean;
}

export default function UserMenu({ isAuthed = false }: UserMenuProps) {
  return (
    <>
      {isAuthed ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto p-0 hover:bg-transparent"
            >
              <Avatar>
                <AvatarImage
                  src="./avatar.jpg"
                  alt="Profile image"
                />
                <AvatarFallback>GS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="max-w-64"
            align="end"
          >
            <DropdownMenuLabel className="flex min-w-0 flex-col">
              <span className="text-foreground truncate text-sm font-medium">[customer name]</span>
              <span className="text-muted-foreground truncate text-xs font-normal">
                [customer email]
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BoltIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          type="button"
          className="md:text-base"
          variant={"tertiary"}
        >
          <UserRoundIcon />
          Login
        </Button>
      )}
    </>
  );
}
