import GradientText from '../animations/GradientText';

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  background?: string;
}

const SectionContainer = ({ 
  id, 
  title, 
  children, 
  className = "py-20",
  background = ""
}: SectionContainerProps) => {
  return (
    <section id={id} className={`${className} ${background}`}>
      <div className="container mx-auto px-6">
        <GradientText
          colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl font-bold text-center mb-16 pb-10"
        >
          {title}
        </GradientText>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
