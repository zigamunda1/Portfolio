import { useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Brain, Code, Database, Zap, Award, Calendar, GraduationCap } from 'lucide-react';
import { 
  CircularText, 
  GradientText, 
  GlitchText, 
  ShinyText,
  SplitText, 
  TextType, 
  VariableProximity 
} from './components/animations';
import { EducationCard } from './components/cards';
import { education, socialLinks, getEmailLink, resumeLink } from './data/portfolioData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const experienceContainerRef = useRef<HTMLDivElement>(null);
  const educationContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const skills = [
    { name: 'Python Programming', icon: Code, level: 10 },
    { name: 'Large Language Models', icon: Brain, level: 10 },
    { name: 'Machine Learning', icon: Zap, level: 10 },
    { name: 'Deep Learning', icon: Database, level: 10 },
    { name: 'AI Safety & Alignment', icon: Brain, level: 10 },
    { name: 'Cross-cultural Communication', icon: Award, level: 95 }
  ];

  const projects = [
    {
      title: "AI 학습 과정 설계 연구",
      description: "AI가 '어떻게' 배우고 '왜' 그렇게 배워야 하는지를 설계하는 연구 프로젝트",
      tech: ["Python", "LLMs", "AI Safety", "Philosophy"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "AI 안전 및 정렬 연구",
      description: "인공지능의 철학적, 인지적, 존재론적 관점에서의 안전성 연구",
      tech: ["AI Alignment", "Ethics", "Research", "Philosophy"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "교차문화 AI 커뮤니케이션",
      description: "다문화 환경에서의 AI 시스템 설계 및 커뮤니케이션 최적화",
      tech: ["Cross-cultural", "Communication", "AI Design", "Education"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const experiences = [
    {
      company: "KDU 비행교육원",
      position: "Certified Flight Instructor (CFII)",
      period: "2024.11 - 2025.05",
      description: "대한민국 양양"
    },
    {
      company: "United Airlines",
      position: "부기장 (First Officer)",
      period: "2022.01 - 2023.10",
      description: "United States"
    },
    {
      company: "WestWind School of Aeronautics",
      position: "Certified Flight Instructor (CFII)",
      period: "2020.02 - 2021.09",
      description: "Arizona, United States"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={true}
              className="text-3xl font-bold"
            >
              Joe's Portfolio
            </GlitchText>
            <div className="flex space-x-4 items-center">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize transition-all duration-300 flex items-center px-2 py-1"
                >
                  {activeSection === item ? (
                    <GlitchText
                      speed={0.5}
                      enableShadows={false}
                      enableOnHover={true}
                      className="text-[17px] font-medium"
                    >
                      {item === 'home' ? 'Home' : item}
                    </GlitchText>
                  ) : (
                    <GlitchText
                      speed={0.3}
                      enableShadows={false}
                      enableOnHover={true}
                      className="text-[17px] font-medium text-white/80"
                    >
                      {item === 'home' ? 'Home' : item}
                    </GlitchText>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                              <CircularText 
                text=" AI TRAINING ARCHITECT" 
                spinDuration={30}
                onHover="speedUp"
                className="absolute text-semibold"
              />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-2 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-700">
                    <Brain className="w-20 h-20 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GradientText
            colors={["#22d3ee", "#a855f7", "#ec4899", "#22d3ee", "#a855f7"]}
            animationSpeed={4}
            showBorder={false}
            className="text-6xl font-bold mb-6"
          >
            AI Learning Process Researcher
          </GradientText>
          <SplitText
            text="AI가 '무엇'을 배우는지뿐만 아니라, '어떻게' 배우고 '왜' 그렇게 배워야 하는지를 설계하는 AI 학습 과정 설계자이자 AI Safety & Alignment 연구원을 희망하는 주니어 개발자 조동훈 입니다."
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed"
            delay={20}
            duration={0.7}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />
          <div className="flex justify-center space-x-4 mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-bold"
            >
              <ShinyText 
                text="프로젝트 보기" 
                disabled={false} 
                speed={3} 
                className="text-white font-bold" 
              />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-bold"
            >
              <ShinyText 
                text="연락하기" 
                disabled={false} 
                speed={3} 
                className="text-white font-bold" 
              />
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <GradientText
            colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-bold text-center mb-16 pb-10"
          >
            About Me
          </GradientText>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col justify-start">
                <SplitText
                  text="항공과학 학사 학위를 보유한 34세의 파일럿 출신으로서, 인공지능이 인류의 미래에 미칠 영향에 깊은 관심을 가지고 있습니다. 고도화된 AI 모델과의 심층적인 대화를 통해 AI가 단순한 기술을 넘어, 인간 존재에 대한 근본적인 질문을 제기한다는 사실을 깨달았습니다."
                  className="text-lg text-white/80 leading-8 mb-8 font-light tracking-wide"
                  delay={20}
                  duration={0.7}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign="left"
                />
                <SplitText
                  text="이에 따라, AI 분야에서 철학적, 인지적, 존재론적 관점에서의 탐구와 연구에 헌신하고자 하며, 희망 직군은 RLAIF 기술 기반 AI 학습 설계자와 AI 안전 및 정렬 연구원입니다."
                  className="text-lg text-white/80 leading-8 mb-8 font-light tracking-wide"
                  delay={20}
                  duration={0.7}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign="left"
                />
                <div className="flex space-x-4">
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-6 h-6 cursor-pointer" />
                  </a>
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 cursor-pointer" />
                  </a>
                  <a 
                    href={getEmailLink()}
                    className="text-white/60 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-6 h-6 cursor-pointer" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">핵심 역량</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <TextType 
                        text="AI 학습 과정 설계 및 최적화"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white/80"
                      />
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <TextType 
                        text="AI 안전 및 정렬 연구"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white/80"
                      />
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <TextType 
                        text="교차문화 커뮤니케이션"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white/80"
                      />
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <TextType 
                        text="철학적, 인지적 AI 연구"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white/80"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <GradientText
            colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-bold text-center mb-16 pb-10"
          >
            Skills & Technologies
          </GradientText>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-semibold">
                        <TextType 
                          text={skill.name}
                          typingSpeed={75}
                          pauseDuration={1500}
                          showCursor={true}
                          cursorCharacter="|"
                          className="text-white font-semibold"
                        />
                      </h3>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-white/60 mt-2 block">{skill.level}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <GradientText
            colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-bold text-center mb-16 pb-10"
          >
            Featured Projects
          </GradientText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="h-6 bg-white/10 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse"></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="h-6 bg-white/10 rounded-full w-16 animate-pulse"></div>
                    <div className="h-6 bg-white/10 rounded-full w-20 animate-pulse"></div>
                    <div className="h-6 bg-white/10 rounded-full w-14 animate-pulse"></div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-4 bg-white/10 rounded w-12 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <GradientText
            colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-bold text-center mb-16 pb-10"
          >
            Experience
          </GradientText>
          <div 
            ref={experienceContainerRef}
            className="max-w-4xl mx-auto"
            style={{position: 'relative'}}
          >
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        <VariableProximity
                          label={exp.position}
                          className="text-white"
                          fromFontVariationSettings="'wght' 400, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={experienceContainerRef}
                          radius={80}
                          falloff="linear"
                        />
                      </h3>
                      <h4 className="text-xl text-white/90 mb-2">
                        <VariableProximity
                          label={exp.company}
                          className="text-white/90"
                          fromFontVariationSettings="'wght' 400, 'opsz' 9"
                          toFontVariationSettings="'wght' 800, 'opsz' 30"
                          containerRef={experienceContainerRef}
                          radius={60}
                          falloff="linear"
                        />
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        <VariableProximity
                          label={exp.description}
                          className="text-white/70"
                          fromFontVariationSettings="'wght' 400, 'opsz' 9"
                          toFontVariationSettings="'wght' 600, 'opsz' 20"
                          containerRef={experienceContainerRef}
                          radius={50}
                          falloff="linear"
                        />
                      </p>
                    </div>
                    <div className="flex items-center text-white/60">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <GradientText
            colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-bold text-center mb-16 pb-10"
          >
            Education
          </GradientText>
          <div 
            ref={educationContainerRef}
            className="max-w-4xl mx-auto"
            style={{position: 'relative'}}
          >
            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationCard 
                  key={index} 
                  education={edu} 
                  containerRef={educationContainerRef}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <GradientText
            colors={["#22d3ee", "#a855f7", "#22d3ee", "#a855f7", "#22d3ee"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-bold text-center mb-16 pb-10"
          >
            Contact Info
          </GradientText>
          <div 
            ref={contactContainerRef}
            className="max-w-2xl mx-auto text-center"
            style={{position: 'relative'}}
          >
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              <VariableProximity
                label="AI 학습 과정 설계, AI 안전 및 정렬 연구, 또는 철학적 AI 연구에 관한 새로운 프로젝트나 협업 기회에 관심이 있으시면 언제든 연락주세요."
                className="text-white/80"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={contactContainerRef}
                radius={100}
                falloff="linear"
              />
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href={getEmailLink()}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>{socialLinks.email}</span>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href={resumeLink}
              download="조동훈_이력서.pdf"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <ShinyText 
                text="이력서 다운로드" 
                disabled={false} 
                speed={3} 
                className="text-white font-bold" 
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 조동훈 (DongHoon Cho) Portfolio. Made with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;