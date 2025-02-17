import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://twitter.com/street_verse">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                  </a>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.instagram.com/streetverseteam/">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://github.com/Jorge-Carrera/street-verse-app">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about"
                        target="_self"
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/JimmyAyivor/street-verse-app?ref=sv-footer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/terms"
                        target="_blank"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/privacy"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/contact"
                        target="_blank"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} StreetVerse by{" "}
                <a
                  href="https://github.com/JimmyAyivor?ref=svc-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  Jimmy
                </a>
                ,
                <a
                  href="https://github.com/Jorge-Carrera"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  Jorge
                </a>
                ,
                <a
                  href="https://github.com/ctay47"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  Christine
                </a>
                ,
                <a
                  href="https://github.com/Nique444?ref=svc-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  TK
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
