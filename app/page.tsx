import Image from "next/image"
import { Slider, TImages } from "./components/Slider"

// Fetch images from DB in real project
const images: TImages = [
  { src: "https://i.pinimg.com/564x/55/f7/54/55f7548a3d60636e23873d064c836313.jpg", alt: "image-1" },
  { src: "https://i.pinimg.com/564x/98/83/c5/9883c5e1b1e2b3e865b2cc052bf953a5.jpg", alt: "image-2" },
  { src: "https://i.pinimg.com/736x/50/8c/8d/508c8d9874c6bf6e8aeb76a9efcb5ee1.jpg", alt: "image-3" },
  { src: "https://i.pinimg.com/564x/97/fe/5b/97fe5be3c47f35c264486cd95c552f77.jpg", alt: "image-4" },
]

export default function Home() {
  return (
    <article className="flex flex-col tablet:flex-row justify-between border-t-[1px] border-b-[1px] border-solid border-border-color">
      {images.length === 1 ? (
        <figure className="relative w-full tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px] tablet:w-fit object-cover">
          <Image
            className="w-full tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px] tablet:w-fit object-cover"
            src={images[0].src}
            alt={images[0].alt}
            width={720}
            height={480}
            priority
          />
        </figure>
      ) : (
        <Slider images={images} width={720} height={480} />
      )}
      <div className="flex flex-col justify-between gap-y-8 tablet:gap-y-0 w-full px-2 py-2">
        <section className="flex flex-col gap-y-4 tablet:gap-y-0 justify-between items-center tablet:items-start text-brand">
          something
        </section>
      </div>
    </article>
  )
}
