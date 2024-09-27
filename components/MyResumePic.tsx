import Image from "next/image"

export default function MyResumePic() {
    return (
        <section className="w-full mx-auto">
            <Image 
                className=" drop-shadow-xl shadow-black mx-auto mt-8"
                src="/images/resume_9_26_2024_JPEG.jpg"
                width={1000}
                height={1000}
                alt="resumepic"
                priority={true}
            />
        </section>
    )
}