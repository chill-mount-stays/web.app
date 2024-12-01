"use client";
import { motion } from "motion/react";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="my-10">
      <div className="w-full h-auto lg:mb-36">
        <Image
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          alt=""
          src={"/assets/about-separator.png"}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center  justify-center mt-16 lg:mt-20 mb-14 md:px-16 px-2 lg:space-x-20">
        <div className="relative flex items-center w-full max-w-md h-96">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="rounded-3xl top-1/2 left-1/2 -translate-x-1/3 lg:-translate-x-1/2 md:-translate-y-1/3 -translate-y-1/2  w-[220px] h-[300px] xl:w-[350px] xl:h-[380px] absolute overflow-hidden border-white border-4 border-solid drop-shadow-xl bg-slate-950 "
          >
            <Image
              className="w-full h-full object-center absolute object-cover"
              width={1000}
              height={1000}
              alt={""}
              src={"/assets/about1.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="rounded-3xl top-[2%] left-[5%] md:-translate-x-[0%] lg:-translate-x-[20%] xl:-translate-y-[15%] -translate-y-[0%]  w-[220px] h-[300px] xl:w-[350px] xl:h-[380px] absolute overflow-hidden border-white border-4 border-solid drop-shadow-xl bg-red-800"
          >
            <Image
              className="w-full h-full object-center absolute object-cover"
              width={1000}
              height={1000}
              alt={""}
              src={"/assets/about2.png"}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-sm max-w-md">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p>
              The dummy format is an example format that does nothing. It will
              never indicate that it can read or write a file. When explicitly
              asked to read, it will simply read the bytes.
            </p>
          </div>
          <div className="w-sm max-w-md">
            <h3 className="text-xl font-semibold">Why us?</h3>
            <p>
              The dummy format is an example format that does nothing. It will
              never indicate that it can read or write a file. When explicitly
              asked to read, it will simply read the bytes.
            </p>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};
