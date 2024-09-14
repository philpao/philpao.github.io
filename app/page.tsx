import { data } from "../_data/db";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-4">
            {data.projects.map((exhibit, i) => (
              <div key={i} className="border-b border-gray-400">
                <div className="p-4">
                  <div className="flex flex-row">
                    <Avatar>
                      <AvatarImage
                        src={`img/${exhibit.image}`}
                        alt="project image"
                      />
                      <AvatarFallback>
                        {exhibit.title.slice(0, 3)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex justify-items-start items-center">
                      <span className="p-2 font-bold">{exhibit.company}</span>
                    </div>
                  </div>
                </div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {exhibit.carousel.map((carousel_item, j) => (
                      <CarouselItem key={j}>
                        <div className="p-0">
                          <AspectRatio ratio={1 / 1} className="bg-muted">
                            <Image
                              src={`img/${carousel_item}`}
                              alt="Carousel Item"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="p-4">
                  <p className="font-bold">{exhibit.year}</p>
                  <span className="font-bold">{exhibit.company}</span>
                  <span className="p-2">{exhibit.didactic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {data.projects.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={`img/${project.image}`}
                      alt="project image"
                    />
                    <AvatarFallback>{project.title.slice(0, 3)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.year}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  {project.description}
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src={`img/${project.image_plp}`}
                      alt="Exhibit Photo"
                      fill
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild>
                    <Link href={`/portfolio/${project.slug}`}>View</Link>
                  </Button>
                  {project.live && <Badge variant="secondary">Live!</Badge>}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}
