import React from "react";
import isp from "../assets/isp.png";
import lap from "../assets/lap.png";
import photo from "../assets/photo.png";
import Work from "./Work";


const Mywork = () => {
  const works = [
    {
      id: 1,
      name: "Buy Lap",
      details:
        "A website for buying and selling used laptop.Seller Can post new Laptop ,Buyers Can buy Laptop",
      image: lap,
      live: "https://buy-lap.web.app/",
      client: "https://github.com/AFK247/Buy-Lap-Client",
      server: "https://github.com/AFK247/Buy-Lap-Server",
    },
    {
      id: 2,
      name: "AFK ISP",
      details:
        "A website for internet service provider.It gives service all over Bangladesh and have exciting packages",
      image: isp,
      live: "https://sparkly-marigold-e56b67.netlify.app",
      client: "https://github.com/AFK247/AFK-ISP",
      server: "https://github.com/AFK247/AFK-ISP",
    },

    {
      id: 3,
      name: "Pro Photography",
      details:
        "This is a photography Service Website. An user can see the reviews of the service and can hire them",
      image: photo,
      live: "https://photography-2351.web.app",
      client: "https://github.com/AFK247/Pro-Photography-Client",
      server: "https://github.com/AFK247/Pro-Photography-Server",
    },
    // {
    //     id: 4,
    //     name:"Pin Generator",
    //     detail: "A website for buying and selling used laptop.Seller Can post new Laptop ,Buyers Can buy Laptop",
    //     image: pin,
    //     live: "https://mellow-meerkat-497a8a.netlify.app/",
    //     client: "https://github.com/AFK247/pin-generator",
    //     server: "https://github.com/AFK247/pin-generator",
    // },
  ];
  return (
    <div id="project" className="mt-16">
      <div  className="w-full sm:my-16">
        <div className="max-w-screen-lg mx-auto p-0 flex flex-col justify-center w-full h-full text-white">
          <div className="text-center">
            <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              My Work
            </p>
            <p className="py-6">These are the Projects I've worked with.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-0 sm:p-4 m-4 sm:m-0 ">
            {works.map((work) => <Work key={work.id} work={work}></Work>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
