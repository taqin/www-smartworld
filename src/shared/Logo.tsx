import React from "react";
import logoImg from "@/images/swtt-logo.png";
import logoLightImg from "@/images/swtt-logo.png";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <Image
          className={`block max-h-12 w-auto ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="SWTT Logo"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && img !== imgLight && (
        <Image
          className="hidden max-h-12 w-auto dark:block"
          src={imgLight}
          alt="SWTT Logo Light"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
