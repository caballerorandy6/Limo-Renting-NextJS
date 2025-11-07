"use client";

import { UserButton, SignInButton, SignUpButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Shield, LogOut } from "lucide-react";
import { useOpenMenuStore } from "@/stores/openMenuStore";

type UserAuthProps = {
  variant?: "default" | "mobile";
};

const UserAuth = ({ variant = "default" }: UserAuthProps) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const { setIsOpen } = useOpenMenuStore();

  // Check if user is admin
  const isAdmin = user?.publicMetadata?.role === "admin";

  const handleClose = () => setIsOpen(false);

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
          {/* User Info Display */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
            {user?.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="User avatar"
                className="h-12 w-12 rounded-full ring-1 ring-gray-700 "
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-lg">
                {user?.firstName?.charAt(0) || user?.username?.charAt(0) || "U"}
              </div>
            )}
            <div className="flex-1">
              <p className="font-sans font-semibold text-white text-sm">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="font-mono text-xs text-gray-400">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>

          {/* Admin Dashboard Button - Only visible to admins */}
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-600 bg-black px-4 py-3 font-mono font-bold text-white hover:bg-gray-700 transition-colors w-full"
            >
              <Shield className="h-5 w-5" />
              Admin Dashboard
            </Link>
          )}

          {/* Sign Out Button */}
          <SignOutButton>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-red-600 bg-black px-4 py-3 font-mono font-bold text-white hover:bg-red-600 transition-all duration-200 w-full">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </SignOutButton>
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
              avatarBox: "h-8 w-8 ring-1 ring-black hover:ring-white transition-all",
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
