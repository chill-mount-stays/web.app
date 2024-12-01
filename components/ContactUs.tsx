import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="mb-12 mx-6 lg:mx-32 md:mx-24 ">
      <div className="flex flex-col items-start w-full space-y-6 lg:space-y-16">
        <div className="lg:space-y-8 space-y-4">
          <p className="text-2xl">
            <span className="lg:text-8xl md:text-6xl text-4xl">Feel free</span>{" "}
            <br /> to share your message with us, <br />
            and we will respond{" "}
            <span className="lg:text-6xl text-2xl">as soon as possible...</span>
          </p>
          <div>
            <Link
              className="bg-green-500 space-x-2 py-3 px-8 flex items-center rounded-full max-w-fit"
              href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}`}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white lg:w-12 w-6 h-full"
              />
              <p className="lg:text-3xl text-xl text-slate-100">WhatsApp us</p>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-32">
          <div className="flex">
            <div className="border max-w-fit p-2 rounded-md max-h-fit">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="lg:w-8 md:w-6 w-4"
              />
            </div>
            <div className="lg:ml-6 ml-3 lg:mt-4 mt-2">
              <p className="font-semibold lg:text-xl">Chat to us</p>
              <p className="text-gray-500">
                Our friendly team team is here to help
              </p>
              <p className="font-medium">support@chillmountstays.com</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="border max-w-fit p-2 rounded-md max-h-fit">
                <FontAwesomeIcon icon={faPhone} className="lg:w-8 md:w-6 w-4" />
              </div>
              <div className="lg:ml-6 ml-3 lg:mt-4 mt-2">
                <p className="font-semibold lg:text-xl">Call us</p>
                <p className="text-gray-500">From day - To day, 8am to 10pm</p>
                <p className="font-medium">+91 9842083815</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
