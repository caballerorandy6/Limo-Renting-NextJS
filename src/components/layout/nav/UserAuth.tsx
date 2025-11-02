"use client";

import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Shield } from "lucide-react";

type UserAuthProps = {
  variant?: "default" | "mobile";
};

const UserAuth = ({ variant = "default" }: UserAuthProps) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  // Check if user is admin
  const isAdmin = user?.publicMetadata?.role === "admin";

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
    // Mobile variant when signed in
    if (variant === "mobile") {
      return (
        <div className="flex flex-col gap-3 w-full">
          {/* Admin Dashboard Button - Only visible to admins */}
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-gray-600 bg-black px-4 py-3 font-mono font-bold text-white hover:bg-gray-800 transition-colors w-full"
            >
              <Shield className="h-5 w-5" />
              Admin Dashboard
            </Link>
          )}

          <div className="flex items-center justify-center">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-12 w-12",
                },
              }}
            />
          </div>
        </div>
      );
    }

    // Default variant when signed in
    return (
      <div className="flex items-center gap-2">
        {/* Admin Dashboard Button - Only visible to admins */}
        {isAdmin && (
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-1.5 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-white hover:text-black hover:border-white transition-all duration-200"
          >
            <Shield className="h-3.5 w-3.5" />
            Admin
          </Link>
        )}

        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8 ring-1 ring-gray-700 hover:ring-white transition-all",
            },
          }}
        />
      </div>
    );
  }

  // Mobile variant - NOT signed in
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-3 w-full">
        <SignInButton mode="modal">
          <button className="rounded-lg border-2 border-red-600 bg-black px-6 py-3 font-mono font-bold text-white hover:bg-red-600 transition-all duration-200 w-full">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="rounded-lg border-2 border-red-600 bg-red-600 px-6 py-3 font-mono font-bold text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 transition-all duration-200 w-full">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    );
  }

  // Default variant - navbar buttons (NOT signed in)
  return (
    <div className="flex items-center gap-2">
      <SignInButton mode="modal">
        <button className="rounded-md px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/10 transition-all duration-200">
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="rounded-md border border-gray-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white hover:text-black hover:border-white transition-all duration-200">
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
};

export default UserAuth;
