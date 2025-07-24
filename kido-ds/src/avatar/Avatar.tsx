import React from "react";

type AvatarType = "picture" | "initials";
type AvatarShape = "circle" | "rounded" | "square";
type AvatarSize = "24" | "32" | "40" | "52" | "64";

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
    "24": "w-6 h-6 text-xs",
    "32": "w-8 h-8 text-xs",
    "40": "w-10 h-10 text-base",
    "52": "w-13 h-13 text-base",
    "64": "w-16 h-16 text-xl",
};

const shapeMap: Record<AvatarShape, string> = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
};

export const Avatar: React.FC<AvatarProps> = ({
    type,
    shape = "circle",
    size = "40",
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
        <div className={`relative ${sizeClasses}`}>
            <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${shapeClasses} bg-indigo-200 overflow-hidden ${outlineClasses}`}>
                {type === "picture" && imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Avatar"
                        className={`object-cover ${sizeClasses} ${shapeClasses}`}
                    />
                ) : (
                    <span className="font-medium text-indigo-700 select-none">
                        {initials?.slice(0, 2).toUpperCase() || "?"}
                    </span>
                )}
            </div>
            {upperBadge && (
                <div className="absolute -top-1 -right-1 size-2 bg-red-500 rounded-full"></div>
            )}

            {lowerBadge && (
                <div className="absolute -bottom-1 -right-1 size-2 bg-green-500 rounded-full"></div>
            )}
        </div>
    );
};