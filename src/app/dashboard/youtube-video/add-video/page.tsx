import PathTracker from "../../_components/PathTracker";

const page = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <PathTracker />

        <button className="bg-[#28a745] py-2 px-5 rounded-lg text-white font-semibold">
          Save
        </button>
      </div>

      <div className="border border-[#b0b0b0] p-4 rounded-lg">

          <div>
            <h1>YouTube Video Tittle</h1>
            <input 
            type="text" 
            className="w-full mt-1 h-[51px] border border-[#b0b0b0] rounded-lg bg-inherit outline-none px-3"
            placeholder="Enter Youtube Video Tittle"
            />
          </div>

          <div className="mt-8">
            <h1>YouTube Video Link</h1>
            <input 
            type="text" 
            className="w-full mt-1 h-[51px] border border-[#b0b0b0] rounded-lg bg-inherit outline-none px-3"
            placeholder="Enter Youtube Video Link"
            />
          </div>

      </div>
    </div>
  );
};

export default page;
