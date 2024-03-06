const BuilderItemImg = ({ id }: { id: number }) => {
  return (
    <div className="relative w-full md:w-[30%]">
      <div className="h-7 w-7 bg-white flex items-center justify-center rounded-full text-sm shadow-md border border-gray-200">
        {id}
      </div>
      <img
        src="/images/builder.png"
        alt="builder"
        className="h-40 md:h-24 mx-auto"
      />
      {(id === 1 || id === 2) && (
        <div className="absolute -top-7 left-3 z-10 flex gap-2 bg-[#ff7724]  text-xs text-white p-1 rounded-e-md">
          <img
            src={`${
              id === 1
                ? "/images/best-choice.png"
                : "/images/best-value-icon.png"
            }`}
            alt="best-choice"
            className="h-4"
          />
          <span>{id === 1 ? "Best Choice" : "Best Value"}</span>
        </div>
      )}
    </div>
  );
};

export default BuilderItemImg;
