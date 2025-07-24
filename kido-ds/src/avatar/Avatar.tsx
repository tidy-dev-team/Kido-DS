import React from "react";

type AvatarType = "picture" | "initials";
type AvatarShape = "circle" | "rounded" | "square";
type AvatarSize = 24 | 32 | 40 | 52 | 64;

interface AvatarProps {
    type: AvatarType;
    shape?: AvatarShape;
    size?: AvatarSize;
    imageUrl?: string;
    initials?: string;
    upperBadge?: boolean;
    lowerBadge?: boolean;
    outline?: boolean;
}

const sizeMap: Record<AvatarSize, string> = {
    24: "w-6 h-6 text-xs",
    32: "w-8 h-8 text-sm",
    40: "w-10 h-10 text-base",
    52: "w-13 h-13 text-lg",
    64: "w-16 h-16 text-xl",
};

const shapeMap: Record<AvatarShape, string> = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
};

export const Avatar: React.FC<AvatarProps> = ({
    type,
    shape = "circle",
    size = 40,
    imageUrl,
    initials,
    upperBadge = false,
    lowerBadge = false,
    outline = false,
}) => {
    const sizeClasses = sizeMap[size];
    const shapeClasses = shapeMap[shape];
    const outlineClasses = outline ? "ring-2 ring-white" : "";

    return (
        <div className="relative">
            <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${shapeClasses} bg-indigo-200 overflow-hidden ${outlineClasses}`}>
                {type === "picture" && imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Avatar"
                        className={`object-cover ${sizeClasses} ${shapeClasses}`}
                    />
                ) : (
                    <span className="font-semibold text-indigo-700 select-none">
                        {initials?.slice(0, 2).toUpperCase() || "?"}
                    </span>
                )}
            </div>
            {upperBadge && (
                <div className="absolute -top-1.5 -right-1.5 size-3 bg-red-500 rounded-full"></div>
            )}

            {lowerBadge && (
                <div className="absolute -bottom-1.5 -right-1.5 size-3 bg-green-500 rounded-full"></div>
            )}
        </div>
    );
};