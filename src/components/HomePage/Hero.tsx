import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16 container mx-auto mt-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="relative z-10">
            <div className="w-[64px] h-[72px]">
              <Image
                src="/images/Stock-logo-1.png"
                alt="Olives Stocks Logo"
                width={200}
                height={100}
                className="w-full h-full"
              />
            </div>

            <h3 className="ml-2 text-2xl font-bold text-green-600 mt-3">
              Olives Stocks
            </h3>

            <div className="inline-block rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-800 mt-5">
              Trust & Market Edge Focus
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-black sm:text-5xl">
              Stay Ahead in the <br /> Market with Data- <br />Driven Decisions
            </h1>

            <p className="mt-6 text-base text-[#595959]">
              Make confident investments with real-time stock data, AI-powered
              insights, and expert-backed financial research.
            </p>

            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Register
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center justify-center rounded-md border border-green-500 bg-white px-8 py-3 text-base font-medium text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Explore First
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="h-[400px] w-full sm:h-[500px] lg:h-[530px]">
              <Image
                src="/images/hero.png"
                alt="Financial data visualization with hand interacting with charts"
                fill
                className="object-cover w-full"
              />


              {/* <div className="bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white z-50">
                <p className="text-lg font-medium">
                  Turn Insights into Profits – Stay Ahead with Stock News!
                </p>
                <p className="text-sm text-green-400">@Seler/Shop-name</p>
                <div className="mt-2 flex space-x-1">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="h-2 w-2 rounded-full bg-white/50"></span>
                  <span className="h-2 w-2 rounded-full bg-white/50"></span>
                </div>
              </div> */}


            </div>
          </div>

        </div>
      </div>

      
      <div className="absolute bottom-0 left-[4%]">
        <Image src="/images/line.png" width={300} height={200} alt="line image"/>
      </div>
    </section>
  );
}
