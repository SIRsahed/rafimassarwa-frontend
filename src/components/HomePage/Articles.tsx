import Image from "next/image"
import Link from "next/link"

const tabs = [
  "All Stocks",
  "Another Stocks",
  "Another Stocks",
  "Another Stocks",
  "Another Stocks",
  "Another Stocks",
  "Another Stocks",
]

const articles = [
  {
    id: 1,
    category: "Market News",
    title: "Want up to 11% Dividend Yield? Analysts Select 2 D",
    timestamp: "10.00 pm, 20/11/25",
    tag: "TSLA",
    image: "/images/financial-dashboard.jpg",
  },
  {
    id: 2,
    category: "Market News",
    title: "Want up to 11% Dividend Yield? Analysts Select 2 D",
    timestamp: "10.00 pm, 20/11/25",
    tag: "TSLA",
    image: "/images/financial-dashboard.jpg",
  },
  {
    id: 3,
    category: "Market News",
    title: "Want up to 11% Dividend Yield? Analysts Select 2 D",
    timestamp: "10.00 pm, 20/11/25",
    tag: "TSLA",
    image: "/images/financial-dashboard.jpg",
  },
]

export default function LatestArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold">Latest Articles</h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`rounded-full px-4 py-2 text-sm ${
                index === 0 ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/cart.png"
                  alt="Financial dashboard on laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 text-sm text-gray-600">{article.category}</div>
                <h3 className="mb-2 text-lg font-semibold">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.timestamp}</span>
                  <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium">
                    {article.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Link */}
        <div className="mt-8 flex justify-end">
          <Link href="/news" className="text-base font-medium text-black hover:underline">
            See All News
          </Link>
        </div>
      </div>
    </section>
  )
}
