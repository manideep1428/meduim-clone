interface AvatarProps{
    username:string,
    className? :string
}

import React from "react";

export const Avatar: React.FC<AvatarProps> = ({ username, className }) => {
    const classes = `relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${className}`;
    return (
        <div className={classes}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{username[0]}</span>
        </div>
    );
};
