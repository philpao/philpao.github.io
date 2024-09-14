import * as React from "react";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { data } from "../../../_data/db";

export async function generateStaticParams() {
  //const posts = await fetch("https://.../posts").then((res) => res.json());

  return data.projects.map((exhibit) => ({
    exhibit: exhibit.slug,
  }));
}

export default function Page({ params }: { params: { exhibit: string } }) {
  let exhibits = data.projects.filter((obj) => {
    return obj.slug === params.exhibit;
  });
  let exhibit = exhibits[0];

  return (
    <main>
      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-8">
          {exhibit.carousel.map((carousel_item, i) => (
            <AspectRatio key={i} ratio={1 / 1} className="bg-muted">
              <Image
                src={`../img/${carousel_item}`}
                alt="Carousel Item"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          ))}
          <h1>{exhibit.title}</h1>
          <h2>{exhibit.description}</h2>
          <p>{exhibit.didactic}</p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-8 gap-8">
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-8">
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <Image
                  src={`../img/${exhibit.carousel_image_1}`}
                  alt="Carousel Item"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <Image
                  src={`../img/${exhibit.carousel_image_2}`}
                  alt="Carousel Item"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <Image
                  src={`../img/${exhibit.carousel_image_3}`}
                  alt="Carousel Item"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="col-start-2 col-span-5">
            <Carousel className="w-full">
              <CarouselContent>
                {exhibit.carousel.map((carousel_item, i) => (
                  <CarouselItem key={i}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <AspectRatio ratio={1 / 1} className="bg-muted">
                            <Image
                              src={`../img/${carousel_item}`}
                              alt="Carousel Item"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="col-span-2">
            <h1>{exhibit.title}</h1>
            <h2>{exhibit.description}</h2>
            <p>{exhibit.didactic}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
