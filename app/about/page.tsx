import { siteConfig } from "@/config/site";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default async function AboutPage() {
    return (
    <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-x-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    About me 
                </h1>
            </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48 max-w-48 flex flex-col gap-2">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/santa.png" alt={siteConfig.author} />
                    <AvatarFallback> DK</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center break-words">
                    {siteConfig.author}
                </h2>
                <p className="text-muted-foreground text-center break-words">
                    Electrical Engineer
                </p>
            </div>
        </div>
    </div>
    );
}