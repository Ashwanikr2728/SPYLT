const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className="general-title">
      <div className="">
        <div
          className={`${className} border-[1.5vw] text-nowrap opacity-0`}
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            borderColor: borderColor,
          }}
        >
          <div
            style={{
              backgroundColor: bg,
            }}
            className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          >
            <h2
              className=""
              style={{
                color: color,
              }}
            >
              {title}{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
