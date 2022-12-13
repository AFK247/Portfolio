import React from 'react';
// import isp from "../assets/isp.png";
// import isp1 from "../assets/isp1.png";
// import isp2 from "../assets/isp2.png";

// import lap from "../assets/lap.png";
// import lap1 from "../assets/lap1.png";
// import lap2 from "../assets/lap2.png";

import photo from "../assets/photo.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";

const ProjecDetails2 = ({temp}) => {
    
    // const works = [
    //     {
    //       id: 1,
    //       name: "Buy Lap",
    //       details:
    //         "A website for buying and selling used laptop.Seller Can post new Laptop ,Buyers Can buy Laptop",
    //       image: lap,
    //       image1: lap1,
    //       image2: lap2,
    //       live: "https://buy-lap.web.app/",
    //       client: "https://github.com/AFK247/Buy-Lap-Client",
    //       server: "https://github.com/AFK247/Buy-Lap-Server",
    //     },
    //     {
    //       id: 2,
    //       name: "AFK ISP",
    //       details:
    //         "A website for internet service provider.It gives service all over Bangladesh and have exciting packages",
    //       image: isp,
    //       image1: isp1,
    //       image2: isp2,
    //       live: "https://sparkly-marigold-e56b67.netlify.app",
    //       client: "https://github.com/AFK247/AFK-ISP",
    //       server: "https://github.com/AFK247/AFK-ISP",
    //     },
    
    //     {
    //       id: 3,
    //       name: "Pro Photography",
    //       details:
    //         "This is a photography Service Website. An user can see the reviews of the service and can hire them",
    //       image: photo,
    //       image1: photo1,
    //       image2: photo2,
    //       live: "https://photography-2351.web.app",
    //       client: "https://github.com/AFK247/Pro-Photography-Client",
    //       server: "https://github.com/AFK247/Pro-Photography-Server",
    //     },
       
    //   ];
    return (
        <div className='max-w-screen-lg m-auto mt-8'>
            {
               
                <div>
                    <section className='grid grid-cols-2 justify-center items-center gap-8 '>
                        <img className='hover:scale-110 duration-500 border rounded-lg p-4 w-[40vw] shadow-lg shadow-slate-600' src={photo} alt="" />
                        <img className='hover:scale-110 duration-500 border rounded-lg p-4 w-[40vw] shadow-lg shadow-slate-600' src={photo1} alt="" />
                        <img className='hover:scale-110 duration-500 border rounded-lg p-4 w-[40vw] shadow-lg shadow-slate-600' src={photo2} alt="" />
                    </section>
                    <div className='p-8 mb-8'>
                           <h2 className='text-4xl'>Features</h2>
                            <li> Front End ISP based  website with stylish design.</li>
                            <li>Realtime Database and Coverage Map of Service area.</li>
                            <li className='mb-4'> Implemented News API for news feed.</li>
                            <span className='bg-cyan-800 p-1 rounded-xl mr-3'>React</span>
                           <span className='bg-red-700 p-1 rounded-xl mr-3'>React-Router</span>
                           <span className='bg-purple-800 p-1 rounded-xl mr-3'>React Query</span>
                           <span className='bg-yellow-700 p-1 rounded-xl mr-3'>Firebase</span>
                           <span className='bg-purple-800 p-1 rounded-xl mr-3'>Bootstrap</span>
                           <span className='bg-green-600 p-1 rounded-xl mr-3'>Node</span>
                           <span className='bg-blue-700 p-1 rounded-xl mr-3'>Express</span>
                           <span className='bg-green-800 p-1 rounded-xl mr-3'>MongoDB</span>
                     </div>
                    </div>
                
            }
            
        </div>
    );
};

export default ProjecDetails2;