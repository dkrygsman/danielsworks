import { siteConfig } from "@/config/site";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Description } from "@radix-ui/react-dialog";
import { describe } from "node:test";
import { Metadata } from "next";
import MyProfilePic from "@/components/MyProfilePic";
import React from "react";

import MyResumePic from "@/components/MyResumePic";





export const metadata: Metadata = {
    title: "About me",
    description: "Info about me",
};

export default async function AboutPage() {
    return (
    <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-x-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    About me 
                </h1>
            </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48 max-w-48 flex flex-col gap-2">
                <MyProfilePic />
                <h2 className="text-2xl font-bold text-center break-words">
                    {siteConfig.author}
                </h2>
                <p className="text-muted-foreground text-center break-words">
                    Electrical Engineer
                </p>
            </div>
            <div className="flex flex-row">
                <p className="text-muted-foreground text-lg py-4">
                Hello, my name is Daniel Krygsman. I am a San Diego-based Electrical Engineer. My technical passion lies in robotics, embedded systems, and feedback control. I hope to work with cutting-edge software and hardware for real-world solutions. <br /><br /> 
                I received my B.S. in Electrical Engineering from the Baskin School of Engineering at the University of California Santa Cruz in 2024. My course load has granted me valuable hands-on experience with Programmable Microcontrollers, FPGAs, Sensors, and High-Level Robotic Software Architectures i.e. ROS2.<br /><br /> 
                My technical skill set consists of programming languages (such as C/C++, Python, and Verilog), Simulation Software (such as Matlab, Simulink, V_REP, and LTSpice), and CAD tools (such as Fusion 360, 3D Slicers, and Printers). I am adept at working on collaborative projects spanning 6+ months involving prototyping, testing, and presentation.

                </p>

                <MyResumePic />

            </div>
           

        </div>
        

    </div>
    );

}

