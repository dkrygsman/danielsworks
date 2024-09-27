import Image from "next/image"

export default function MyResumePic() {
    return (
        <section className="w-full mx-auto">
            <Image 
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/resume_9_26_2024_JPEG.jpeg"
                width={200}
                height={200}
                alt="resumepic"
                priority={true}
            />
        </section>
    )
}