import LatestArticles from "@/shared/Articles";
import StockDashboard from "@/shared/StockDashboard";
import Image from "next/image";
import StockTickerCarousel from "../Watchlist/StockTickerCarousel";
import Link from "next/link";

const PrivateHome = () => {
  return (
    <div className="mt-28 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-5">
        <StockTickerCarousel />
      </div>

      {/* ADDED: Quick-access shortcut buttons/links */}
      <div className="mb-6 flex justify-center space-x-4">
        <Link
          href="/my-portfolio"
          className="inline-block rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
        >
          Portfolio
        </Link>
        <Link
          href="/watchlist"
          className="inline-block rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Watchlist
        </Link>
        <Link
          href="/news"
          className="inline-block rounded-md bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1"
        >
          News
        </Link>
      </div>

      <div>
        <input
          type="text"
          className="border border-green-500 rounded-md p-2 w-full outline-0 h-[48px] sm:h-[56px] md:h-[64px] mb-8 md:mb-10 focus:border-2"
          placeholder="Search any Stock....."
        />
      </div>

      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-10">
        {/* this is 1 layout */}
        <div className="col-span-1 lg:col-span-2">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={500}
              height={270}
              className="w-full"
              style={{ aspectRatio: "500 / 270" }}
            />

            <h1 className="font-medium mt-3 text-lg md:text-xl">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:block" />
              Lorem simply.
            </h1>

            <p className="text-sm md:text-base">
              Lorem Ipsum&nbsp;is simply Lorem
              <br className="hidden md:block" /> Lorem Ipsum&nbsp;is simply.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={500}
              height={270}
              className="w-full"
              style={{ aspectRatio: "500 / 270" }}
            />

            <h1 className="font-medium mt-3 text-lg md:text-xl">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:block" />
              Lorem simply.
            </h1>

            <p className="text-sm md:text-base">
              Lorem Ipsum&nbsp;is simply Lorem
              <br className="hidden md:block" /> Lorem Ipsum&nbsp;is simply.
            </p>
          </div>
        </div>

        {/* this is 2 layout */}
        <div className="col-span-1 lg:col-span-3">
          <Image
            src="/images/cart.png"
            alt="Stock market chart"
            width={800}
            height={450}
            className="w-full"
            style={{ aspectRatio: "800 / 450" }}
          />
          <h1 className="font-bold my-4 md:my-5 text-2xl md:text-[40px] w-full lg:w-[90%] mx-auto text-center leading-tight">
            Want up to 11% Dividend Yield?
          </h1>

          <p className="w-full lg:w-[80%] mx-auto text-center text-sm md:text-base">
            Lorem Ipsum&nbsp;is simply dummy text of the printing and
            typesetting industry.&nbsp;
          </p>
        </div>

        {/* this is 3 layout */}
        <div className="col-span-1 lg:col-span-2">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={500}
              height={270}
              className="w-full"
              style={{ aspectRatio: "500 / 270" }}
            />

            <h1 className="font-medium mt-3 text-lg md:text-xl">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:block" />
              Lorem simply.
            </h1>

            <p className="text-sm md:text-base">
              Lorem Ipsum&nbsp;is simply Lorem
              <br className="hidden md:block" /> Lorem Ipsum&nbsp;is simply.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={500}
              height={270}
              className="w-full"
              style={{ aspectRatio: "500 / 270" }}
            />

            <h1 className="font-medium mt-3 text-lg md:text-xl">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:block" />
              Lorem simply.
            </h1>

            <p className="text-sm md:text-base">
              Lorem Ipsum&nbsp;is simply Lorem
              <br className="hidden md:block" /> Lorem Ipsum&nbsp;is simply.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-8 md:my-16 gap-4 md:gap-2">
        <div className="flex gap-2 items-center">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={88}
              height={56}
              className="rounded-2xl"
            />
          </div>

          <div>
            <h1 className="font-bold text-[14px] leading-tight">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:inline" /> Lorem simply.{" "}
            </h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem Ipsum&nbsp;is simply.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={88}
              height={56}
              className="rounded-2xl"
            />
          </div>

          <div>
            <h1 className="font-bold text-[14px] leading-tight">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:inline" /> Lorem simply.{" "}
            </h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem Ipsum&nbsp;is simply.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={88}
              height={56}
              className="rounded-2xl"
            />
          </div>

          <div>
            <h1 className="font-bold text-[14px] leading-tight">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:inline" /> Lorem simply.{" "}
            </h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem Ipsum&nbsp;is simply.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={88}
              height={56}
              className="rounded-2xl"
            />
          </div>

          <div>
            <h1 className="font-bold text-[14px] leading-tight">
              Lorem Ipsum&nbsp;is simply
              <br className="hidden md:inline" /> Lorem simply.{" "}
            </h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem Ipsum&nbsp;is simply.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl mb-6 md:mb-10 font-semibold leading-tight">
          Want up to 11% Dividend Yield?
        </h1>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8EDwgRmnJr8?si=PPdCwHz16TMOQ5ME"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <p className="mt-4 md:mt-5 text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          minima.
        </p>
      </div>

      <div className="mb-12 md:mb-16">
        <LatestArticles />
      </div>

      <div>
        <StockDashboard />
      </div>
    </div>
  );
};

export default PrivateHome;
