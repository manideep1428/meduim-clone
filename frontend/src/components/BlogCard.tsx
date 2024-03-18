import React from "react";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    username: string;
    title: string;
    content: string;
    publishedDate?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
    username,
    title,
    content,
    publishedDate
}) => {
    return (
        <div>
        <div className="border-slate-600 shadow-md m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 hover:cursor-pointer">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex items-center">
                    <Avatar className="w-6 h-6" username={username} />
                    <span className="ml-2 text-sm sm:text-base">{username} . <span className="font-light">{publishedDate} </span></span>
                </div>
                <div className="font-bold pt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl lg:text-lg xl:text-base">
                    {title}
                </div>
                <div className="text-sm sm:text-base">
                    {content.slice(0, 100) + "...."}
                </div>
            </div>
        </div>
        </div>
    )
}
