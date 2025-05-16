import React from "react";
import d1 from "../assets/d1.jpeg";
import d2 from "../assets/d2.webp";
import d3 from "../assets/d3.jpeg";
import d4 from "../assets/d4.jpeg";
import Searchbar from "../assets/Searchbar.svg";
import states from "./States";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import data from "./data";

const Landing = () => {
  const [query, setQuery] = React.useState("");
  const [state, setState] = React.useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="mx-auto ">
        {/* Who we are */}{" "}
        <div>
          <div className="grid grid-cols-2 opacity-60 absolute object-cover w-full mt-20">
            <img src={d1} alt="" className="w-full rounded-ss-full" />
            <img src={d2} alt="" className="w-full rounded-se-full" />
            <img src={d4} alt="" className="w-full rounded-es-full " />
            <img src={d3} alt="" className="w-full rounded-ee-full" />
          </div>
          <div className="w-full h-[50rem]">
            <div className=" relative w-full sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto ">
              <p className="font-bold text-2xl font-serif pt-[20rem] text-black">
                Quickly connect with skilled professionals for repairs,
                maintenance, installations, and craftsmanship services.
              </p>
              <div className=" fromRight ">
                <input
                  type="text"
                  placeholder="Search for Craftsmen"
                  className="w-full px-4 pr-10 py-2 border border-[#111111] rounded-3xl text-[#000000] mt-[1rem] focus:outline-none focus:ring-1 ring-black "
                  value={query}
                  onChange={handleInputChange}
                />
                <span className="absolute inset-y-0 mt-[26rem] right-0 flex items-center pr-3 cursor-pointer">
                  <Link to="/CustSignUp">
                    <Search className="text-[#a84f2d]" />
                  </Link>
                </span>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="appearance-none w-1/3 px-4 pr-10 py-2 border border-[#111111] rounded-3xl text-[#000000] focus:outline-none focus:ring-1 ring-black ml-80 mt-4 text-center"
                >
                  <option value={""} disabled selected hidden>
                    📍 Set Location
                  </option>
                  {states.map((state, index) => (
                    <option key={index} value={state} className="h-20">
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Popular Craftsmen */}
        <div>
          <div className="text-center mt-52 mb-10 max-w-[600px] mx-auto space-y-2">
            <h1 className="text-3xl font-bold lg:text-4xl">
              Popular Craftsmen
            </h1>
          </div>
          <div className=" flex gap-6 p-6 justify-evenly">
            {data.map((datum) => {
              return (
                <div
                  key={datum.id}
                  className="bg-gray-600 rounded-md h-fit fromTop"
                >
                  <div className="relative space-y-3">
                    <img
                      src={datum.img}
                      alt=""
                      className="object-contain rounded-md w-full "
                    />
                  </div>
                  <div className="leading-7 p-2 text-gray-200">
                    <h2 className="font-bold">{datum.skill}</h2>
                    <div className="flex justify-between">
                      <h2 className="font-semibold">{datum.Name}</h2>
                      <Link to="/Craftsman" state={{datum}}>
                        <ArrowRight className="hover:scale-125" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
