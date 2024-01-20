import { useEffect, useMemo, useState } from "react";
import Costum from "./Costum";
import Heard from "./Heard";

const App = () => {
  const [list, setList] = useState<any[]>([]);
  const [data, setData] = useState<any>([]);
  const [manage, setManage] = useState<any>([]);
 
  const Post = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();
    setData(data);
  };
  let greg = list;
  //console.log(greg);
  const mifi = () => {
    setManage(
      data.filter((e: any) =>
        greg.every((language: any) => e.languages.includes(language))
      )
    );
  };
  useMemo(
    () =>
    
    mifi(),
    // eslint-disable-next-line
    [greg]
  );
  useMemo(
    () =>{
      // setData(
      //   data.filter((e: any) =>
      //     greg.every((language: any) => e.languages.includes(language))
      //   )
      // eslint-disable-next-line

      setManage(data)},
    [data]
  );
  const handle = (ask: any) => {
    setList([...list, ask]);

  };
  //console.log("greg:", manage);
  
  //onClick={()=>setData(list.filter((e:any)=> greg.every(language => e.languages.includes(language))))}
  //console.log(data); 
  
  useEffect(() => {
    Post();
    
  }, []);
  
 // console.log(data,"gata");
  
 
  return (
    <div>
      <div  className="   ">
        <img  className=" w-full md:hidden " src="./images/bg-header-mobile.svg" alt="gyefuhdbsj" />
        <img  className=" w-full hidden  md:block " src="./images/bg-header-desktop.svg" alt="gyefuhdbsj" />
      </div>
      <div className=" fixed top-[58PX] left-8 z-50 md:w-[95%]" >
        <Heard setList={setList} list={list} setData={setData} data={data} />
      </div>
      <div className=" p-7" >
        {manage.map((e: any) => (
          <div key={e.id}>
            <Costum
              e={e}
              data={data}
              setData={setData}
              setList={setList}
              list={list}
              handle={handle}
              manage={manage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
