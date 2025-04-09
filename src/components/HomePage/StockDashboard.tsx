import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function StockDashboard() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Trending Stocks Card */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4">
              <h2 className="text-xl font-bold">Trending Stocks</h2>

              {/* Tabs */}
              <div className="mt-4 flex border-b border-gray-200">
                <button className="border-b-2 border-black px-4 py-2 font-medium">All Stocks</button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Best Rated</button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Worst Rated</button>
              </div>

              {/* Table Header */}
              <div className="mt-4 grid grid-cols-4 gap-2 rounded-t-md bg-green-50 p-2 text-sm font-medium">
                <div>Company</div>
                <div>Smart Score</div>
                <div>Price & Change</div>
                <div>Rating in Last 30 Days</div>
              </div>

              {/* Table Rows */}
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-2 p-3 text-sm ${index < 4 ? "border-b border-gray-100" : ""}`}
                >
                  <div>
                    <div className="font-medium text-green-600">PANW</div>
                    <div className="text-gray-600">Salesforce</div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-red-500">
                      <div className="h-7 w-7 rounded-full bg-white"></div>
                    </div>
                  </div>

                  <div>
                    <div>120.20</div>
                    <div className="flex items-center text-red-500">
                      <svg className="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      71.24 (3.2%)
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="relative h-12 w-12">
                      <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-yellow-400">
                        <span className="text-sm font-bold">39</span>
                      </div>
                      <div className="absolute right-0 top-0 h-12 w-6 overflow-hidden">
                        <div className="h-full w-12 origin-left -rotate-90 rounded-full border-4 border-transparent border-t-green-500"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="mr-1 h-3 w-3 rounded-sm bg-green-500"></div>
                        <span className="text-xs">30 Buy</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-1 h-3 w-3 rounded-sm bg-yellow-400"></div>
                        <span className="text-xs">7 Hold</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-1 h-3 w-3 rounded-sm bg-red-500"></div>
                        <span className="text-xs">2 Hold</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Footer */}
              <div className="mt-4 flex justify-end">
                <a href="#" className="flex items-center text-sm font-medium text-green-600 hover:text-green-700">
                  All Trending Stocks
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Top Stocks Card */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4">
              <h2 className="text-xl font-bold">Top Stocks</h2>

              {/* Tabs */}
              <div className="mt-4 flex border-b border-gray-200">
                <button className="border-b-2 border-black px-4 py-2 font-medium">Buy Ratings</button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Sell Ratings</button>
              </div>

              {/* Table Header */}
              <div className="mt-4 grid grid-cols-4 gap-2 rounded-t-md bg-green-50 p-2 text-sm font-medium">
                <div>Analyst & Firm</div>
                <div>Company</div>
                <div>Rating & Price Target</div>
                <div>Rating in Last 30 Days</div>
              </div>

              {/* Table Rows */}
              {[
                { name: "Bessie Cooper" },
                { name: "Dianne Russell" },
                { name: "Savannah Nguyen" },
                { name: "Darrell Steward" },
                { name: "Esther Howard" },
              ].map((analyst, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-2 p-3 text-sm ${index < 4 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/images/stoct-img.png"
                        alt={analyst.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{analyst.name}</div>
                      <div className="text-xs text-gray-600">Price & Change</div>
                      <div className="mt-1 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    {index === 3 ? (
                      <div className="font-medium">Price & Change</div>
                    ) : (
                      <>
                        <div className="font-medium text-green-600">SMTC</div>
                        <div className="text-gray-600">Semtech</div>
                      </>
                    )}
                  </div>

                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-red-500">
                      <div className="h-7 w-7 rounded-full bg-white"></div>
                    </div>
                  </div>

                  <div className="text-green-500">
                    <div>90.45%</div>
                    <div>Upsides</div>
                  </div>
                </div>
              ))}

              {/* Footer */}
              <div className="mt-4 flex justify-end">
                <a href="#" className="flex items-center text-sm font-medium text-green-600 hover:text-green-700">
                  All Trending Stocks
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
