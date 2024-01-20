

interface props {
  e: any;
  ea: any;

  data: any;
  list: any;
  setData: React.Dispatch<React.SetStateAction<[]>>;
  setList: any;
  handle:any
}

const Filter: React.FC<props> = ({ e, ea, data, list, setData, setList,handle }) => {


  return (
    <>
      <button className=" text-cyan-800  font-semibold p-1 rounded-md bg-cyan-100" onClick={() => handle(ea)}>{ea}</button>
    </>
  );
};

export default Filter;
