import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  width: number | `${number}`;
  height: number | `${number}`;
  borderRadius?: string; 
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  width,
  height,
  borderRadius = "rounded-full",
}) => {
  return (
    <div>
      <Image
        src={src}
        alt="Avatar"
        width={width}
        height={height}
        className={` ${borderRadius} overflow-hidden`}
      />
    </div>
  );
};

export default Avatar;
