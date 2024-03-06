import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-[#212731] py-10 px-4 mt-6">
      <div className="w-full max-w-4xl mx-auto flex justify-between flex-wrap">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm text-white uppercase">categories</h2>
          <p className="text-xs text-[#B6BDC4]">Web Builder</p>
          <p className="text-xs text-[#B6BDC4]">Hosting</p>
          <p className="text-xs text-[#B6BDC4]">Data Center</p>
          <p className="text-xs text-[#B6BDC4]">Robotic-Automation</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm text-white uppercase">Contact</h2>
          <p className="text-xs text-[#B6BDC4]">Contact</p>
          <p className="text-xs text-[#B6BDC4]">Privacy Policy</p>
          <p className="text-xs text-[#B6BDC4]">Terms Of Service</p>
          <p className="text-xs text-[#B6BDC4]">Categories</p>
          <p className="text-xs text-[#B6BDC4]">About</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs text-[#B6BDC4]">United States</p>
          <img src="/images/arrow-down.png" alt="arrow-down" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
