import Image from "next/image"

export default function MyResumePic() {
    return (
        <section className="w-full mx-auto">
            <Image 
                className="border-2 border-slate-700 drop-shadow-xl shadow-black mx-auto mt-8"
                src="/images/resume_2.jpg"
                width={600}
                height={600}
                alt="resumepic"
                priority={true}
            />
        </section>
    )
}