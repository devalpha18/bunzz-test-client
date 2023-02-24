import type { FC } from "react";
import { useState } from "react";
import axios from "axios";

const Home: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [fizzbuzzMessage, setFizzbuzzMessage] = useState<string>("");

  const handleClick = async () => {
    setCount(count + 1);
    const fizzbuzzMessage = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/fizzbuzz`,
      { count: count + 1 },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(fizzbuzzMessage);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-[18px] leading-[24px] text-center">
      <p>Your count</p>
      <span className="mt-[7px]">{count}</span>
      <button
        type="button"
        onClick={handleClick}
        className="mt-[52px] px-[33px] py-[14px] bg-[#1876D0] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[5px]"
      >
        <p className="leading-[22px] text-white">Push me!</p>
      </button>
      <p className="mt-[55px] text-6xl font-medium tracking-wider">Fizz</p>
    </div>
  );
};

export default Home;
