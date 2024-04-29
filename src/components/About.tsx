import { NeonButton } from "./NeonButton"
import profilePic from "/profile.png"

export const About = () => {
    return (
        <section className="">
            <img src={profilePic} className="w-10" />
            <h1 className="text-xl text-slate-200 mb-4 ">
                Hi, I'm Yoohyun
            </h1>

            <p className="text-base mb-3 text-slate-500">I'm a software development student passionate about coding and eager to tackle real-world problems. I'm excited to learn, collaborate, and grow my skills in this dynamic field. </p>
            <h2 className="text-lg text-slate-200 mb-4">Top skills</h2>
            <p className="text-base mb-3 text-slate-500">Python, JavaScript, HTML, CSS</p>

            <NeonButton />
        </section>
    )
}