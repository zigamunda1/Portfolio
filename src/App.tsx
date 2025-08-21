import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Brain, Database, Zap, Award, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
      position: "비행 교관 (CFII)",
      period: "2024.11 - 2025.05",
      description: "대한민국 양양"
    },
    {
      company: "United Airlines",
      position: "부기장 (First Officer)",
      period: "2022.01 - 2023.10",
      description: "Arizona, United States"
    },
    {
      company: "WestWind School of Aeronautics",
      position: "비행 교관 (CFII)",
      period: "2020.02 - 2021.09",
      description: "Arizona, United States"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Joe's Portfolio
            </h1>
            <div className="flex space-x-10">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-lg font-medium transition-colors duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-white/80'
                  }`}
                >
                  {item === 'home' ? 'Home' : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Brain className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Learning Process Architect
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            AI가 '무엇'을 배우는지뿐만 아니라 '어떻게' 배우고 '왜' 그렇게 배워야 하는지를 설계하는 
            AI 학습 과정 설계자이자 AI Safety & Alignment 연구원을 희망하는 주니어 개발자 조동훈 입니다.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-bold">
              프로젝트 보기
            </button>
            <button className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-bold">
              연락하기
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-white/80 leading-8 mb-8 font-light tracking-wide">
                  항공과학 학사 학위를 보유한 34세의 파일럿 
                  출신으로서, 인공지능이 인류의 미래에 미칠 영향에 깊은 관심을 가지고 있습니다.<br className="hidden md:block" />
                  고도화된 AI 모델과의 심층적인 대화를 통해 AI가 단순한 기술을 넘어, 인간 존재에 대한 근본적인 질문을 제기한다는 사실을 깨달았습니다.
                </p>
                <p className="text-lg text-white/80 leading-8 mb-8 font-light tracking-wide">
                  이에 따라, AI 분야에서 철학적, 인지적, 존재론적 관점에서의 탐구와 연구에 헌신하고자 하며, 
                  희망 직군은 <span className="text-cyan-400 font-medium">RLAIF 기술 기반 AI 학습 설계자</span>와 
                  <span className="text-purple-400 font-medium"> AI 안전 및 정렬 연구원</span>입니다.
                </p>
                <div className="flex space-x-4">
                  <Github className="w-6 h-6 text-white/60 hover:text-cyan-400 cursor-pointer transition-colors" />
                  <Linkedin className="w-6 h-6 text-white/60 hover:text-cyan-400 cursor-pointer transition-colors" />
                  <Mail className="w-6 h-6 text-white/60 hover:text-cyan-400 cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">핵심 역량</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>AI 학습 과정 설계 및 최적화</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>AI 안전 및 정렬 연구</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>교차문화 커뮤니케이션</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>철학적, 인지적 AI 연구</span>
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
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
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{exp.position}</h3>
                      <h4 className="text-xl text-white/90 mb-2">{exp.company}</h4>
                      <p className="text-white/70 leading-relaxed">{exp.description}</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Info
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              AI 학습 과정 설계, AI 안전 및 정렬 연구, 또는 철학적 AI 연구에 관한 
              새로운 프로젝트나 협업 기회에 관심이 있으시면 언제든 연락주세요.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="mailto:chodonghoon91@gmail.com"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>chodonghoon91@gmail.com</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              이력서 다운로드
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 조동훈 (DongHoon Cho) Portfolio. Made with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;