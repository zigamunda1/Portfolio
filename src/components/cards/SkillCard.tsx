import type { LucideIcon } from 'lucide-react';
import TextType from '../animations/TextType';

interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const IconComponent = skill.icon;
  
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <TextType 
            text={skill.name}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-white font-medium"
          />
        </div>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
