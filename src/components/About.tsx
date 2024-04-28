import { NeonButton } from "./NeonButton"
import profilePic from "/profile.png"

export const About = () => {
    return (
        <div className="max-w-screen-lg w-full m-auto p-4">
            <section className="">
                <img src={profilePic} className="w-10" />
                <h1 className="text-xl text-slate-200 mb-4 ">
                    Hi, I'm Yoohyun
                </h1>

                <p className="text-base mb-3 text-slate-500">I'm a software developement student studying at <a
                    href="https://www.sait.ca/" className="no-underline text-slate-200">SAIT</a></p>
                <h2 className="text-lg text-slate-200 mb-4">Top skills</h2>
                <p className="text-base mb-3 text-slate-500">Python, JavaScript, HTML, CSS</p>

                <NeonButton />
            </section>
        </div>
    )
}