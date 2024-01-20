import React from "react";
interface props {
  list: any;
  setList: any;
  data: any;
  setData: any;
}

const Heard: React.FC<props> = ({ list, setList, setData, data }) => {
  const Handle = (inde: number) => {
    setList(list.filter((e: any, index: number) => index !== inde));
    //console.log(list);

    // setData(
    //     data.filter((e: any) =>
    //       list.every((language: any) => e.languages.includes(language))
    //     )
    //   );
  };
  return (
    <div>
      {list.length > 0 ? (
        <div className=" md:rounded-md bg-white shadow-md drop-shadow-md flex flex-grow justify-between items-center p-2 ">
          <div className=" flex flex-wrap  w-64  md:w-[80%] ">
            {list.map((e: string, index: number) => (
              <div key={index} className=" flex rounded-3xl m-3 ">
                <div className=" bg-body-secondry text-[19px] rounded-l-md p-[3]"> {e}</div>
                <button
                  className=" bg-cyan-800 p-[10px] rounded-r-md"
                  onClick={() => Handle(index)}
                >
                  <img className=" w-3" src="./images/icon-remove.svg" alt="" />{" "}
                </button>
              </div>
            ))}
          </div>
          <button onClick={()=>setList([])} > clear</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Heard;
