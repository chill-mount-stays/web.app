import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div id="contact-us" className=" mb-12 mx-12 lg:mx-32 md:mx-24">
      <div className="lg:mb-20 mb-8">
        <p className="text-center lg:text-4xl font-medium text-base">
          Connect with Us
        </p>
        <p className="text-center lg:text-lg lg:mt-4 mt-1 text-sm">
          We are here to help you with your travel needs!
        </p>
      </div>
      <div className="w-full flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-around">
        <div className="lg:space-y-4 space-y-2">
          <p className="lg:text-lg text-base">
            <span className="text-2xl font-medium lg:text-4xl">Feel free</span>{" "}
            <br /> to share your message with us, and we will respond as soon as
            possible...
          </p>
          <div>
            <Link
              className="bg-green-500 space-x-2 py-2 px-4 lg:px-6 flex items-center rounded-full max-w-fit"
              href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}`}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white lg:w-8 w-6 h-full"
              />
              <p className=" text-white">WhatsApp us</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex">
            <div className="border max-w-fit p-2 rounded-md max-h-fit">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="lg:w-8 md:w-6 w-4"
              />
            </div>
            <div className="lg:ml-6 ml-3">
              <p className="font-medium lg:text-xl text-sm">Chat to us</p>
              <p className="text-gray-500 text-xs lg:text-base">
                Our friendly team is here to help
              </p>
              <p className="font-medium text-xs lg:text-base">
                support@chillmountstays.com
              </p>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="border max-w-fit p-2 rounded-md max-h-fit">
                <FontAwesomeIcon icon={faPhone} className="lg:w-8 md:w-6 w-4" />
              </div>
              <div className="lg:ml-6 ml-3">
                <p className="font-medium lg:text-xl text-sm">Call us</p>
                <p className="text-gray-500 text-xs lg:text-base">
                  From day - To day, 8am to 10pm
                </p>
                <p className="font-medium text-xs lg:text-base">
                  +91 9842083815
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
