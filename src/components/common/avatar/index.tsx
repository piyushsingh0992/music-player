import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  width: number | `${number}`;
  height: number | `${number}`;
  borderRadius?: string; // Optional prop for border radius
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  width,
  height,
  borderRadius = "rounded-full", // Default value for borderRadius
}) => {
  return (
    <div>
      <Image
        src={src}
        alt="Avatar"
        width={width}
        height={height}
        className={` ${borderRadius} overflow-hidden`} // Removed width and height classes as they are not dynamic
      />
    </div>
  );
};

export default Avatar;
