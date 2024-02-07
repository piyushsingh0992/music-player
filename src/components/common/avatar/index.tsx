import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  width: number | `${number}`;
  height: number | `${number}`;
}

const Avatar: React.FC<AvatarProps> = ({ src, width, height }) => {
  return (
    <div>
      <Image
        className={`w-${width} h-${height} rounded-full overflow-hidden`}
        src={src}
        alt="Avatar"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Avatar;
