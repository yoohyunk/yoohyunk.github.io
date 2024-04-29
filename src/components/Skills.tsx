const SKILLS = ["JavaScript", "Python", "HTML", "CSS"]

export const Skills = () => {
    return (
        <div className="flex gap-2">{
            SKILLS.map(skill => <div className="text-slate-200 text-xs border-white rounded-lg border px-2 py-1">{skill}</div>)}
        </div>
    )
}
