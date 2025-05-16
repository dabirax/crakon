import React from "react";
import img1 from "../assets/p1.jpg";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Craftsman = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { datum } = location.state;
  const {id, Name, email, img, city, description, password, phone,rating,skill,state,} = datum
  console.log(datum);
  return (
    <>
      <div className="mt-24 p-6">
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-logo p-1 transition-all duration-200 hover:scale-125 hover:transition-transform bg-gray-400 ml-20">
          <ArrowLeft className=" " color="white" onClick={() => navigate(-1)} />
        </div>
        <div className="mx-auto max-w-6xl rounded-[30px] p-4 md:p-12 overflow-hidden">
          <div className="rounded-[30px] shadow-2xl">
            <div
              className="relative flex flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat p-6 md:p-12 rounded-t-3xl bg-gray-600
          "
            >
              <div className="flex justify-center items-center border-1 border-slate-300 rounded-full w-28 h-28 bg-logo object-contain overflow-hidden">
                <img src={img} alt="avatar" className=" " />
              </div>
              <p className="text-center text-2xl font-semibold uppercase text-white/75">
                {Name}
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 p-6 md:flex-row">
              <div className="w-full space-y-4 md:w-3/5">
                <p className="text-left text-xl font-semibold">
                  Craftsman Info
                </p>
                <div className="space-y-4 text-sm md:text-base">
                  <p className="flex gap-4">
                    <span className="font-semibold">Skill:</span> {skill}
                  </p>
                  <p className="flex gap-4">
                    <span className="font-semibold">Rating: </span>
                    {rating}
                  </p>
                  <div className="flex gap-6">
                    <p className="flex gap-4">
                      <span className="font-semibold">State:</span> {state}
                    </p>
                    <p className="flex gap-4">
                      <span className="font-semibold">City:</span> {city}
                    </p>
                  </div>
                  <p className="flex gap-4">
                    <span className="font-semibold">Contact:</span>
                    {phone}
                  </p>
                  <p className="flex flex-wrap gap-2 truncate md:gap-4">
                    <span className="font-semibold">Email:</span>
                   {email}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <p className="text-center text-xl font-semibold">Description</p>
                <div className="prose min-h-[180px] space-y-4 rounded-xl border p-4 text-sm">{description}
                </div>
                <p className=" text-xl  transition-all duration-100 ease-linear bg-[#053F05F0] text-white mt-6 px-5 py-2 font-bold  capitalize rounded-xl hover:scale-105 w-fit mx-auto">
                  <Link to="/loading">Hire me</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Craftsman;
