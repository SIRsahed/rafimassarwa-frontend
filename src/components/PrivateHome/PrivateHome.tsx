import LatestArticles from "@/shared/Articles";
import StockDashboard from "@/shared/StockDashboard";
import TopData from "@/shared/TopData";
// import cartImg from '../../../public/cart.png'
import Image from "next/image";

const PrivateHome = () => {
  return (
    <div className="mt-12 container mx-auto">
      <div>
        <TopData />
      </div>

      <div>
        <input
          type="text"
          className="border border-green-500 rounded-md p-2 w-full outline-0 h-[64px] mb-10 focus:border-2"
          placeholder="Search any Stock....."
        />
      </div>

      <div className="mb-10 grid grid-cols-7 gap-10">
        {/* this is 1 layout */}
        <div className="col-span-2">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={270}
              height={145}
              className="w-full"
            />

            <h1 className="font-medium mt-3 text-xl">
              Lorem Ipsum is simply
              <br />
              Lorem simply.
            </h1>

            <p>
              Lorem Ipsum is simply Lorem
              <br /> Lorem Ipsum is simply.
            </p>
          </div>

          <div className="mt-8">
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={270}
              height={145}
              className="w-full"
            />

            <h1 className="font-medium mt-3 text-xl">
              Lorem Ipsum is simply
              <br />
              Lorem simply.
            </h1>

            <p>
              Lorem Ipsum is simply Lorem
              <br /> Lorem Ipsum is simply.
            </p>
          </div>
        </div>

        {/* this is 2 layout */}
        <div className="col-span-3">
          <Image
            src="/images/cart.png"
            alt="Stock market chart"
            width={570}
            height={383}
            className="w-full"
          />
          <h1 className="font-bold my-5 text-[40px] w-[90%] mx-auto text-center">
            Want up to 11% Dividend Yield?
          </h1>
          
          <p className="w-[80%] mx-auto text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>

        {/* this is 3 layout */}
        <div className="col-span-2">
          <div>
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={270}
              height={145}
              className="w-full"
            />

            <h1 className="font-medium mt-3 text-xl">
              Lorem Ipsum is simply
              <br />
              Lorem simply.
            </h1>

            <p>
              Lorem Ipsum is simply Lorem
              <br /> Lorem Ipsum is simply.
            </p>
          </div>

          <div className="mt-8">
            <Image
              src="/images/cart.png"
              alt="Stock market chart"
              width={270}
              height={145}
              className="w-full"
            />

            <h1 className="font-medium mt-3 text-xl">
              Lorem Ipsum is simply
              <br />
              Lorem simply.
            </h1>

            <p>
              Lorem Ipsum is simply Lorem
              <br /> Lorem Ipsum is simply.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center my-16">
        
        <div className="flex gap-2">
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
            <h1 className=" font-bold text-[14px]">Lorem Ipsum is simply<br /> Lorem simply. </h1>

            <p className="text-[14px]">Lorem Ipsum is simply. </p>
          </div>
        </div>


        <div className="flex gap-2">
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
          <h1 className=" font-bold text-[14px]">Lorem Ipsum is simply<br /> Lorem simply. </h1>

            <p className="text-[14px]">Lorem Ipsum is simply. </p>
          </div>
        </div>


        <div className="flex gap-2">
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
            <h1 className=" font-bold text-[14px]">Lorem Ipsum is simply<br /> Lorem simply. </h1>

            <p className="text-[14px]">Lorem Ipsum is simply. </p>
          </div>
        </div>


        <div className="flex gap-2">
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
            <h1 className=" font-bold text-[14px]">Lorem Ipsum is simply<br /> Lorem simply. </h1>
            <p className="text-[14px]">Lorem Ipsum is simply. </p>
          </div>
        </div>

      </div>

      <div>
        <h1 className="text-5xl mb-10 font-semibold">
          Want up to 11% Dividend Yield?
        </h1>

        <div>
          <iframe
            className="w-full h-[658px]"
            src="https://www.youtube.com/embed/8EDwgRmnJr8?si=PPdCwHz16TMOQ5ME"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <p className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          minima.
        </p>
      </div>

      <div>
        <LatestArticles />
      </div>

      <div>
        <StockDashboard />
      </div>
    </div>
  );
};

export default PrivateHome;
