import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/about",
  "/contacts",
  "/fleet",
  "/services(.*)",
  "/ride(.*)",
  "/api(.*)",
]);

// Define protected routes that require authentication
// Uncomment and customize these when you add admin or user dashboard
// const isProtectedRoute = createRouteMatcher([
//   "/admin(.*)",
//   "/dashboard(.*)",
//   "/reservations",
// ]);

export const proxy = clerkMiddleware(async (auth, request) => {
  // Protect non-public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
