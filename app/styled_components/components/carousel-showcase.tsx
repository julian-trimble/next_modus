import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Card as ShowcaseCard,
  CardContent as ShowcaseCardContent,
  CardHeader as ShowcaseCardHeader,
  CardTitle as ShowcaseCardTitle,
} from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function CarouselShowcase() {
  return (
    <ShowcaseCard>
      <ShowcaseCardHeader className="flex flex-row items-center justify-between">
        <ShowcaseCardTitle>Default</ShowcaseCardTitle>
        <CopyButton text="Default" />
      </ShowcaseCardHeader>
      <ShowcaseCardContent className="flex justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ShowcaseCardContent>
    </ShowcaseCard>
  );
}
