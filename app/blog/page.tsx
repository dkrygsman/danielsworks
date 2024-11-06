import { posts } from "#site/content";
import { QueryPagination } from "@/components/query-pagination";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My projects",
    description: "Daniels works main page",
};


const POSTS_PER_PAGE = 5;

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number(searchParams?.page) || 1
    const sortedPosts = sortPosts(posts.filter((post) => post.published));
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
    
    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage -1),
        POSTS_PER_PAGE *currentPage
    );


    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl  lg:text-5xl">Projects</h1>
                {/* <p className="text-xl text-muted-foregrounnd">
                </p> */}
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-normal text-sm  lg:text-sm">Top Projects <br />
                    Robotics: Beverage Service Robot <br />
                    Embedded C: PIC32 Uart Driver and Protocol <br />
                    FPGA: Slug Invaders Game <br />
                    CAD: Autotiller</h1>
                {/* <p className="text-xl text-muted-foregrounnd">
                </p> */}
                </div>
            </div>
                
            <hr className="mt-8" />
            {displayPosts?.length > 0 ? (
                <ul className="flex flex-col">
                    {displayPosts.map(post => {
                        const { slug, date, title, description} = post
                        return <li key={slug}>
                            <PostItem 
                                slug={slug} 
                                date={date} 
                                title={title} 
                                description={description}
                            />
                        </li>
                    })}
                </ul>
            ) : (
                <p> 
                    <br />
                    Projects yet to be posted
                </p>
            )}
            <QueryPagination totalPages = {totalPages} className="justify-end mt-4" />
        </div>
    );
}