import Image from "next/image";

const SearchResult = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="w-full shadow-lg p-6 border rounded-xl bg-white">
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
          {/* Quadrant Section */}
          <div className="w-full lg:w-1/2 shadow-md p-16 rounded-xl relative overflow-hidden border">
            {/* Axis Labels */}
            <div className="absolute top-[16px] left-1/2 -translate-x-1/2 text-center text-sm text-gray-700 font-medium">
              Strong Financial Health
            </div>
            <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 text-center text-sm text-gray-700 font-medium">
              Poor Financial Health
            </div>
            <div className="absolute top-1/2 left-[-30px] -translate-y-1/2 text-sm text-gray-700 font-medium transform -rotate-90 origin-center text-center">
              Low Competitive Advantage
            </div>
            <div className="absolute top-1/2 right-[-30px] -translate-y-1/2 text-sm text-gray-700 font-medium transform rotate-90 origin-center text-center">
              High Competitive Advantage
            </div>

            {/* Dual-sided Vertical Arrow */}
            <svg
              className="absolute left-1/2 top-12 -translate-x-1/2"
              width="20"
              height="80%"
              viewBox="0 0 20 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="0"
                x2="10"
                y2="500"
                stroke="gray"
                strokeWidth="2"
              />
              <polygon points="5,10 15,10 10,0" fill="gray" />
              <polygon points="5,490 15,490 10,500" fill="gray" />
            </svg>

            {/* Dual-sided Horizontal Arrow */}
            <svg
              className="absolute top-1/2 left-0 -translate-y-1/2"
              width="100%"
              height="20"
              viewBox="0 0 500 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="10"
                x2="500"
                y2="10"
                stroke="gray"
                strokeWidth="2"
              />
              <polygon points="10,5 10,15 0,10" fill="gray" />
              <polygon points="490,5 490,15 500,10" fill="gray" />
            </svg>

            {/* Grid Items */}
            <div className="grid grid-cols-2 gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%]">
              {[
                { title: "Lime Green", color: "bg-gray-100" },
                { title: "Olive Green", color: "bg-[#c7ffe5]" },
                { title: "Yellow", color: "bg-gray-100" },
                { title: "Orange", color: "bg-gray-100" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border px-4 py-10 rounded-lg text-center shadow-md ${item.color}`}
                >
                  <Image
                    src="/images/tree.png"
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                  <h1 className="mt-4 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="w-full lg:w-1/2 shadow-md p-6 rounded-xl border bg-white">
            <div className="flex gap-4 items-center mb-8">
              <h1 className="text-3xl font-bold mb-2 text-gray-800">Apple</h1>
              <Image 
              src={'/images/apple.png'} 
              alt="Apple Logo"
              width={38}
              height={47}
              />
            </div>

            <p className="text-gray-600 mb-4">
              Showing results for{" "}
              <span className="font-medium">Search Query</span>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Company A: Strong Health, High Advantage</li>
              <li>Company B: Moderate Health, Low Advantage</li>
              <li>Company C: Poor Health, Moderate Advantage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
