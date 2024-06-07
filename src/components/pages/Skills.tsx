import { ChildrenPropType } from "@/types/common.types"
import { Github } from "@/components/Icons"
import IconTitle from "@/components/modules/IconTitle"

const Skills = () => {
    type Props = {
        percent: number,
        Icon: React.FC
    } & ChildrenPropType
    const SkillItem = (props: Props) => {
        return <div className="skill_item">{}{props.children}</div>
    }
    return (
        <>
            <IconTitle variant="Skills" />
            <div className="skills_container">
                <SkillItem percent={90} Icon={Github}>JavaScript</SkillItem>
                <SkillItem percent={90} Icon={Github}>React Js</SkillItem>
                <SkillItem percent={90} Icon={Github}>Next Js</SkillItem>
                <SkillItem percent={90} Icon={Github}>TypeScript</SkillItem>
                <SkillItem percent={90} Icon={Github}>Express Js</SkillItem>
                <SkillItem percent={90} Icon={Github}>Node Js</SkillItem>
            </div>
        </>
    )
}

export default Skills