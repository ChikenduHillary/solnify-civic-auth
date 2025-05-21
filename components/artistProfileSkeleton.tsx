import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "@/components/ui/avatar";

export function ArtistProfileSkeleton() {
  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="h-[300px] relative">
        <Skeleton className="w-[100vw] h-full absolute top-0 left-0" />
        <div className="absolute -bottom-16 left-4 md:left-8">
          <Avatar className="h-32 w-32 rounded-3xl border-4 border-[#1F1D2B]">
            <Skeleton className="h-32 w-32 rounded-3xl" />
          </Avatar>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Skeleton className="h-10 w-48 mb-4" />
            <div className="flex gap-8 mb-6">
              <div>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-12" />
              </div>
              <div>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-48 rounded-md" />
          </div>
        </div>

        {/* Wallet Address */}
        <div className="mt-4">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>

        <div className="flex gap-4 my-8">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>

        <Skeleton className="h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-2/3 max-w-2xl mt-2" />
      </div>
    </div>
  );
}
