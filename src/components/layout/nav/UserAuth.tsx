"use client";

import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

type UserAuthProps = {
  variant?: "default" | "mobile";
};

const UserAuth = ({ variant = "default" }: UserAuthProps) => {
  const { isSignedIn, isLoaded } = useAuth();

  // Don't render anything until Clerk is loaded
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-700" />
      </div>
    );
  }

  // If user is signed in, show UserButton
  if (isSignedIn) {
    return (
      <div className="flex items-center">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-9 w-9",
            },
          }}
        />
      </div>
    );
  }

  // Mobile variant - black and red buttons with font-mono
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-3 w-full">
        <SignInButton mode="modal">
          <button className="rounded-md border-2 border-red-600 bg-black px-4 py-3 font-mono font-bold text-white hover:bg-red-600 transition-colors w-full">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="rounded-md border-2 border-red-600 bg-red-600 px-4 py-3 font-mono font-bold text-white hover:bg-red-700 transition-colors w-full">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    );
  }

  // Default variant - navbar buttons
  return (
    <div className="flex items-center gap-3">
      <SignInButton mode="modal">
        <button className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="rounded-lg border-2 border-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
};

export default UserAuth;
