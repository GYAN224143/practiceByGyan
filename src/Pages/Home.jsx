import { incNumber, decNumber } from "../Action/index";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const myState = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className=" bg-yellow-200 h-[500px]">
      <h1 className=" text-center font-bold text-2xl mt-10">
        Increment and Decrement using Redux
      </h1>
      <div className=" text-center mt-10  border-[1px] border-red-400  mx-auto flex w-[300px]">
        <button
          className=" bg-pink-200 text-2xl font-bold w-full px-2"
          onClick={() => dispatch(decNumber())}
        >
          -
        </button>
        <input
          type="text"
          value={myState}
          className=" text-center text-2xl font-bold w-full"
        />
        <button
          className="bg-pink-200 text-2xl font-bold px-2 w-full"
          onClick={() => dispatch(incNumber())}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
