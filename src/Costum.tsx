import Filter from "./filter";

interface props {
  e: any;
  setData: React.Dispatch<React.SetStateAction<[]>>;
  data: any;
  list: any;
  setList: any;
  handle: any;
  manage: any;
}

const Costum: React.FC<props> = ({
  e,
  data,
  list,
  setData,
  setList,
  handle,
  manage,
}) => {
  return (
    <div className="  h-[200] text-[15px]  relative flex w-[]  mb-10 pt-5">

      {e.featured && <div className=" h-[200px] md:h-[117px] w-1 bg-body-primary"> </div>}
      <div className=" bg-white mt-2  con] shadow-2xl flex h-[200px] md:h-28  flex-col md:flex-row justify-between p-5 w-[80%] md:w-full   ">
        <div className=" flex flex-row" >
      <div className="  absolute top-0 left-4 md:static md:mr-2 md:flex md:items-center  ">
        <img className=" w-[50px]" src={e.logo} alt="avater" />
      </div>
    <div>

        <div className=" flex  ">
          <p className=" text-cyan-600" >{e.company} </p>
          <div className=" flex ml-3 text-white  ">
            {e.new && <p className=" bg-cyan-700 w-[45px] mr-2  uppercase text-center rounded-xl " > new </p>}
            {e.featured && <p className=" bg-black w-[80px] uppercase text-center rounded-xl "> featured </p>}
          </div>
        </div>
        <h1 className=" font-bold "  > {e.position}</h1>
        <div className=" flex">
          <p>{e.postedAt}</p> 
          <p>{e.contract}</p>
          <p>{e.location}</p>
        </div>
    </div>
        </div>
        <hr/>
        <div className=" flex flex-wrap items-center ">
          {e.languages.map((ea: any, index: number) => (
            <div key={index} className=" mr-3 " >
              <Filter
                e={e}
                setData={setData}
                handle={handle}
                ea={ea}
                data={data}
                list={list}
                setList={setList}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Costum;
