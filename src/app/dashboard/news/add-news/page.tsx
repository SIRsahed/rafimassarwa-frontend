import PathTracker from "../../_components/PathTracker";

const page = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <PathTracker />

        <button className="bg-[#28a745] py-2 px-5 rounded-lg text-white font-semibold">
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
