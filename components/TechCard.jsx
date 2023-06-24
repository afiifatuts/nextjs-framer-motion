import styles from "../styles";

const TechCard = ({
  imgUrl,
  title,
  subtitle,
  language,
  framework,
  devTools,
  index,
}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] items-center">
    <h1 className="font-bold mt-[26px] text-[24px] leading-[30px] text-white">
      {title}
    </h1>

    <div
      className="flex flex-col sm:flex-row mt-[16px] font-normal text-[18px] text-[#b0b0b0]
    leading-[32px] items-center"
    >
      <p>Language: </p>
      <div className="flex gap-4 ">
        {language.map((l, i) => {
          return <p key={i}> {" "} 
           {l}
          </p>;
        })}
      </div>
    </div>
    <div
      className=" mt-[16px] font-normal text-[18px] text-[#b0b0b0]
    leading-[32px] items-center"
    >
      <p className="">Framework: </p>
      <div className="">
      {framework.map((f, i) => {
        return <p key={i}> {f}</p>;
      })}
      </div>
    </div>
    <div
      className="mt-[16px] font-normal text-[18px] text-[#b0b0b0]
    leading-[32px]"
    >
      <p className="">Dev Tools: </p>
      {devTools.map((d, i) => {
        return (
          <p className="flex" key={i}>
            {" "}
            {d}
          </p>
        );
      })}
    </div>
  </div>
);

export default TechCard;
