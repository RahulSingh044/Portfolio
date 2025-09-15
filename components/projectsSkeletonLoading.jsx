import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MoveRight } from "lucide-react";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-6 lg:px-20 md:px-10 px-4 gap-y-4 mb-4 md:mt-10 mt-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="md:w-64 w-48">
          <div className="w-full">
            <Skeleton className="h-[200px] w-full rounded-xl" />
          </div>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>
                <Skeleton className="h-6 w-3/4" />
              </CardTitle>
              <Skeleton className="size-6 rounded-md" />
            </div>
            <CardDescription>
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-12 rounded-full" />
                <Skeleton className="h-5 w-14 rounded-full" />
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-end'>
            <Skeleton className="h-5 w-24" />
            <MoveRight className="ml-2" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LoadingSkeleton;