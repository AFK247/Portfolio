import React from 'react';

import { Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import {  CgWebsite } from "react-icons/cg";

const Work = ({work}) => {
    return (
        <div className=" hover:scale-110 duration-500 card max-w-screen-lg  glass shadow-lg shadow-violet-600">
                <figure>
                  <a href={work.live}>
                    <img src={work.image} alt="work" />
                  </a>
                </figure>
                <div className="p-4">
                  <div className="p-2">
                    <div className="flex ">
                      <h2 className=" text-2xl">{work.name}</h2>
                    </div>
                    <p className="mt-3">{work.details}</p>
                  </div>
                  <div className="flex justify-evenly p-1">
                    <Button
                      className="bg-gray-700 hover:outline outline-red-400 btn-sm"
                      href={work.client}
                      target="_blank"
                    >
                      {" "}
                      Live <CgWebsite className="ml-1" /> &nbsp;
                    </Button>
                    <Button
                      className="bg-gray-700 hover:outline outline-red-400 btn-sm"
                      href={work.client}
                      target="_blank"
                    >
                      {" "}
                      Client <BsGithub className="ml-1" /> &nbsp;
                    </Button>
                    <Button
                      className="bg-gray-700 hover:outline outline-red-400 btn-sm"
                      href={work.server}
                      target="_blank"
                    >
                      {" "}
                      Server <BsGithub className="ml-1" /> &nbsp;
                    </Button>
                  </div>
                </div>
              </div>
    );
};

export default Work;