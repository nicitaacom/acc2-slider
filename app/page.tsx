import Image from "next/image"
import { Slider } from "./components/Slider"

const images = [
  "https://ambgxbbsgequlwnbzchr.supabase.co/storage/v1/object/public/public/72e3e643-19be-4695-a1d2-d1692a806df2/lamborghini-countach-jpg_price_1O9UzJDEq5VtEmno9BCfqU1h",
  "https://ambgxbbsgequlwnbzchr.supabase.co/storage/v1/object/public/public/72e3e643-19be-4695-a1d2-d1692a806df2/labmorghini-jpg_price_1O9UzJDEq5VtEmno9BCfqU1h",
]

export default function Home() {
  return (
    <article className="flex flex-col tablet:flex-row justify-between border-t-[1px] border-b-[1px] border-solid border-border-color">
      {images.length === 1 ? (
        <figure className="relative w-full tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px] tablet:w-fit object-coverw">
          <Image
            className="w-full tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px] tablet:w-fit object-cover"
            src={images[0]}
            alt="image"
            width={480}
            height={360}
            priority
          />
        </figure>
      ) : (
        <Slider containerClassName="tablet:w-fit" className="h-[300px]" images={images} title={"product title"} />
      )}
      <div className="flex flex-col justify-between gap-y-8 tablet:gap-y-0 w-full px-2 py-2">
        <section className="flex flex-col gap-y-4 tablet:gap-y-0 justify-between items-center tablet:items-start text-brand">
          something
        </section>
      </div>
    </article>
  )
}
