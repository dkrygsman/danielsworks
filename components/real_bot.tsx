import Image from "next/image"

export default function real_bot() {
    return (
        <section className="w-full mx-auto">
            <Image 
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/real_bot.jpeg"
                width={200}
                height={200}
                alt="real_bot"
                priority={true}
            />
        </section>
    )
}