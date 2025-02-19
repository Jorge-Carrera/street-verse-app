import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardProfile({ user }) {
  const [showMore, setShowMore] = useState(false);

  const  {firstname,lastname,img,city,country,bio, occupation}  = user

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt={firstname + " " + lastname || "image not found"}
                  src={
                    img ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  className="shadow-xl rounded-full align-middle border-none absolute object-cover -m-16 -ml-20 lg:-ml-16 max-w-150-px h-[150px] w-[150px]"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {Math.floor(Math.random() * 91) + 20}
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {Math.floor(Math.random() * 51) + 10}
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {Math.floor(Math.random() * 91) + 30}
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
              {firstname + " " + lastname}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <FontAwesomeIcon
                icon="fas fa-map-marker-alt"
                className="mr-2 text-lg text-blueGray-400"
              ></FontAwesomeIcon>{" "}
              {city}, {country}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <FontAwesomeIcon
                icon="fas fa-briefcase"
                className="mr-2 text-lg text-blueGray-400"
              ></FontAwesomeIcon>
              {occupation}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {showMore ? `${bio}` : `${bio.substring(0, 100)}`}
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "Show more"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
