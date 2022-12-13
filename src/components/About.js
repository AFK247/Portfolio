import React from 'react';
import HeroImage from "../assets/heroImage.png";
import TypeWriterEffect from 'react-typewriter-effect';

const About = () => {
    return (
        <div
            id="about"
            className=" w-full md:h-screen"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center md:w-[60vw]">
                    <h2  className="text-4xl sm:text-5xl font-bold text-white my-4">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: 'Orange',
                                fontWeight: 500,
                                fontSize: '1.0em',
                            }}
                            startDelay={2000}
                            cursorColor="#3F3D56"
                            multiText={[
                                'Hi, Im a MERN Web Developer',
                                'Checkout My Work',
                                
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={40}
                        />
                    </h2>
                    <p data-aos="fade-right" data-aos-duration="2000" className="text-gray-500  md:max-w-lg text-2xl text-justify">
                        I'm Md. Asif Ferdous. I'm a passionate web developer.
                        I like to work on web development using technologies like
                        HTML, CSS, Javascript, React, Tailwind, Bootstrap, NodeJS, Mongodb, etc. You can checkout my resume.
                    </p>

                    <div>
                        <a  data-aos="fade-right" data-aos-duration="2000"
                            className="hover:scale-110 duration-300 group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-yellow-600 to-orange-600 cursor-pointer"
                            download={true}
                            target="_blank"
                            rel="noreferrer"
                            href="/Resume.pdf"
                        >
                            Resume
                            <span className="group-hover:rotate-90 duration-300">
                            </span>
                        </a>
                    </div>
                </div>

                <div className='p-4'>
                    <img data-aos="fade-left" data-aos-duration="2000"
                        src={HeroImage}
                        alt="my profile"
                        className="w-60 h-full shadow-lg shadow-yellow-500 rounded-full mx-auto md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;