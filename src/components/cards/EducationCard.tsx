import { GraduationCap } from 'lucide-react';
import VariableProximity from '../animations/VariableProximity';

interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface EducationCardProps {
  education: Education;
  containerRef: React.RefObject<HTMLElement | null>;
}

const EducationCard = ({ education, containerRef }: EducationCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            <VariableProximity
              label={education.institution}
              className="text-white"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={80}
              falloff="linear"
            />
          </h3>
          <h4 className="text-xl text-white/70 mb-2">
            <VariableProximity
              label={education.degree}
              className="text-white/70"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 800, 'opsz' 30"
              containerRef={containerRef}
              radius={60}
              falloff="linear"
            />
          </h4>
          {education.description && (
            <p className="text-white/70 leading-relaxed">
              <VariableProximity
                label={education.description}
                className="text-white/70"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 600, 'opsz' 20"
                containerRef={containerRef}
                radius={50}
                falloff="linear"
              />
            </p>
          )}
        </div>
        <div className="flex items-center text-white/60">
          <GraduationCap className="w-4 h-4 mr-2" />
          <span className="text-sm">{education.period}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
