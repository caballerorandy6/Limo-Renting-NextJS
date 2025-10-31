import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/**
 * Skeleton loader for the RideInfo confirmation page
 * Displays animated placeholders while the page is loading or hydrating
 */
export default function RideInfoSkeleton() {
  return (
    <div className="w-full bg-gray-50 min-h-screen py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 bg-gray-200 rounded-md w-64 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-96 animate-pulse"></div>
        </div>

        {/* Progress Steps Skeleton */}
        <div className="mb-8 flex items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse hidden md:block"></div>
          </div>
          <div className="w-12 md:w-24 h-1 bg-gray-200 animate-pulse"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse hidden md:block"></div>
          </div>
          <div className="w-12 md:w-24 h-1 bg-gray-200 animate-pulse"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse hidden md:block"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Details Card Skeleton */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                        <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="text-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2 animate-pulse"></div>
                        <div className="h-3 bg-gray-200 rounded w-12 mx-auto animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Card Skeleton */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
                <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                    <div className="flex gap-4">
                      <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
                      <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card Skeleton */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
                <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                      <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add-ons Skeleton */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
                <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-48 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="h-5 bg-gray-200 rounded w-12 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-2 border-gray-300 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-gray-200 to-gray-300">
                  <div className="h-6 bg-gray-100 rounded w-32 animate-pulse"></div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 border-t pt-6">
                  <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
