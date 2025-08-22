import { Code, Brain, Database, Zap } from 'lucide-react';
import type { Experience, Project, Skill, CoreCompetency, Education } from '../types';

export const skills: Skill[] = [
  {
    name: "React & TypeScript",
    icon: Code,
    level: 85,
    description: "현대적인 웹 애플리케이션 개발"
  },
  {
    name: "AI/ML Research",
    icon: Brain,
    level: 90,
    description: "인공지능 학습 과정 설계 및 연구"
  },
  {
    name: "Database Design",
    icon: Database,
    level: 75,
    description: "효율적인 데이터베이스 설계 및 최적화"
  },
  {
    name: "Performance Optimization",
    icon: Zap,
    level: 80,
    description: "웹 애플리케이션 성능 최적화"
  }
];

export const projects: Project[] = [
  {
    title: "AI 학습 최적화 플랫폼",
    description: "RLAIF 기술을 활용한 AI 모델 학습 과정 최적화 시스템",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    title: "항공 안전 분석 시스템",
    description: "항공 데이터를 활용한 안전성 분석 및 예측 시스템",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "#"
  },
  {
    title: "포트폴리오 웹사이트",
    description: "React와 TypeScript로 구축한 인터랙티브 포트폴리오",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#"
  }
];

export const experiences: Experience[] = [
  {
    position: "AI Safety Researcher",
    company: "Independent Research",
    period: "2024 - Present",
    description: "AI 안전성 및 정렬 문제에 대한 독립 연구 수행. RLAIF 기술을 활용한 AI 학습 과정 최적화 연구.",
    technologies: ["Python", "PyTorch", "Transformers", "RLHF"]
  },
  {
    position: "Commercial Pilot",
    company: "Various Airlines",
    period: "2015 - 2023",
    description: "상업 항공기 조종사로서 안전한 항공 운항 수행. 복잡한 상황에서의 의사결정 및 위기관리 경험 축적.",
    technologies: ["Flight Management Systems", "Weather Analysis", "Risk Assessment"]
  },
  {
    position: "Junior Developer",
    company: "Self-taught",
    period: "2023 - Present",
    description: "웹 개발 기술 자가 학습 및 프로젝트 수행. React, TypeScript를 중심으로 한 프론트엔드 개발.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
  }
];

export const coreCompetencies: CoreCompetency[] = [
  {
    title: "AI 학습 과정 설계 및 최적화",
    description: "RLAIF 기술을 활용한 효율적인 AI 모델 학습 방법론 연구"
  },
  {
    title: "AI 안전 및 정렬 연구",
    description: "인공지능의 안전성과 인간 가치와의 정렬에 대한 깊이 있는 연구"
  },
  {
    title: "교차문화 커뮤니케이션",
    description: "국제적 환경에서의 효과적인 의사소통 및 협업 능력"
  }
];

export const education: Education[] = [
  {
    institution: "Embry-Riddle Aeronautical University",
    degree: "Bachelor's Degree in Aeronautical Science",
    period: "2019 Jan - 2020 Dec",
    description: ""
  }
];
