import NewsComponent from "./NewsComponent"

const NewsAndScore = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-4">
            <NewsComponent />
        </div>

        <div className="border border-red-500 lg:col-span-2">
            2
        </div>
    </div>
  )
}

export default NewsAndScore