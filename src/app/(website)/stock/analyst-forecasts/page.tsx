import { Button } from "@/components/ui/button";
import { Check, ChevronUp, Info, X } from "lucide-react";
import ModerateBuy from "./_components/chart/ModerateBuy";
import FinanceChart from "./_components/FinanceChart";
import AnalystRatingsTable from "./_components/AnalystRatingsTable";
import StocksConsensus from "./_components/StocksConsensus";
import TestimonialCarousel from "./_components/TestimonialCarousel";
import AnalystRecommendationTrends from "./_components/AnalystRecommendationTrends";

const page = () => {
  return (
    <div className="w-[75vw]">
      <div className="relative bg-[#f5fbf6] rounded-lg p-10 shadow-lg">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button className="text-gray-700 hover:text-gray-900">
            <Info className="h-5 w-5" />
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Banner Ads</h2>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h3 className="text-xl font-bold">
            Apple (AAPL) Stock Forecast & Price Target
          </h3>

          <div className="flex flex-wrap gap-2 items-center">
            <Button
              variant="outline"
              className="h-9 px-4 border-green-500 text-green-600 hover:bg-green-50 rounded-3xl"
            >
              <ChevronUp className="mr-1 h-4 w-4" />
              Compare
            </Button>

            <Button className="h-9 px-4 bg-green-500 hover:bg-green-600 text-white rounded-3xl">
              <Check className="mr-1 h-4 w-4" />
              Follow
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="h-9 px-4 bg-green-500/45 text-white rounded-3xl"
            >
              Portfolio
            </Button>
          </div>
        </div>

        <div className="mt-4 text-right text-sm text-gray-500">
          251,279 Followers
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-20 lg:gap-6 mt-2">
        <div className="lg:col-span-2">
          <h1 className="text-xl font-semibold mb-4">AAPL Analyst Ratings</h1>
          <div className="shadow-[0_4px_30px_rgba(0,0,0,0.2)] h-[400px]">
            <ModerateBuy />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h1 className="text-xl font-semibold mb-4">
            AAPL Stock 12 Month Forecast
          </h1>
          <div className="shadow-[0_4px_30px_rgba(0,0,0,0.2)] h-[400px]">
            <FinanceChart />
          </div>
        </div>
      </div>

      <div className="mt-64 lg:mt-16">
        <AnalystRatingsTable />
      </div>

      <div className="mt-10">
        <StocksConsensus />
      </div>

      <div className="mt-10">
        <TestimonialCarousel />
      </div>

      <div className="mt-10">
        <AnalystRecommendationTrends />
      </div>
    </div>
  );
};

export default page;
