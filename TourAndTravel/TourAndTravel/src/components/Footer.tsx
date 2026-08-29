import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="">
          <h3 className="text-3xl font-bold">Trippy</h3>
          <p className="mt-2 text-slate-100">
            Choose your favourite destination.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 p-3 text-3xl text-white/90">
          <FaFacebookSquare className="hover:text-white" />
          <FaInstagram className="hover:text-white" />
          <RiTwitterXFill className="hover:text-white" />
          <FiYoutube className="hover:text-white" />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-between gap-8 md:gap-12">
        <div className="min-w-6">
          <h4 className="mb-3 text-xl font-bold">Projects</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-200">
            <Link to={"#"}>Changelog</Link>
            <Link to={"#"}>Status</Link>
            <Link to={"#"}>License</Link>
            <Link to={"#"}>All Versions</Link>
          </div>
        </div>

        <div className="min-w-6">
          <h4 className="mb-3 text-xl font-bold">Community</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-200">
            <Link to={"#"}>Github</Link>
            <Link to={"#"}>Discord</Link>
            <Link to={"#"}>Twitter</Link>
            <Link to={"#"}>Behive</Link>
          </div>
        </div>

        <div className="min-w-6">
          <h4 className="mb-3 text-xl font-bold">Help</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-200">
            <Link to={"#"}>Changelog</Link>
            <Link to={"#"}>Troubleshooting</Link>
            <Link to={"#"}>Support</Link>
          </div>
        </div>

        <div className="min-w-6">
          <h4 className="mb-3 text-xl font-bold">Terms & Services</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-200">
            <Link to={"#"}>Privacy</Link>
            <Link to={"#"}>Policy</Link>
            <Link to={"#"}>License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
