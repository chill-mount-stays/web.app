import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div>
      <div className="flex items-start justify-center">
        <div className="p-8 space-y-8">
          <p className="text-2xl">
            <span className="lg:text-9xl text-6xl">Feel free</span> <br /> to
            share your message with us, <br />
            and we will respond{" "}
            <span className="lg:text-7xl text-4xl">as soon as possible...</span>
          </p>
          <div>
            <Link
              className="bg-green-500 space-x-2 py-3 px-8 flex items-center rounded-full max-w-fit"
              href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}`}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white lg:w-12 w-6  h-full"
              />
              <p className="lg:text-3xl text-xl text-slate-100">WhatsApp us</p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <div>call</div>
      </div>
    </div>
  );
};

export default ContactUs;
