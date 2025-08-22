# 조동훈 (DongHoon Cho) - AI 학습 과정 설계자 포트폴리오

## 📋 프로젝트 개요

조동훈 (DongHoon Cho)의 AI 학습 과정 설계자 포트폴리오입니다.

## 🚀 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🎨 주요 기능

### 애니메이션 컴포넌트
- **CircularText**: 원형 회전 텍스트 애니메이션
- **GradientText**: 그라데이션 텍스트 애니메이션
- **GlitchText**: 글리치 효과 텍스트
- **SplitText**: 스크롤 기반 텍스트 분할 애니메이션
- **TextType**: 타이핑 효과 애니메이션
- **VariableProximity**: 마우스 근접 기반 폰트 변화 효과

### 재사용 가능한 컴포넌트
- **ExperienceCard**: 경력 항목 표시
- **ProjectCard**: 프로젝트 항목 표시
- **SkillCard**: 스킬 항목 표시
- **SectionContainer**: 섹션 컨테이너

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── CircularText.tsx
│   ├── GradientText.tsx
│   ├── GlitchText.tsx
│   ├── SplitText.tsx
│   ├── TextType.tsx
│   ├── VariableProximity.tsx
│   ├── ExperienceCard.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   └── SectionContainer.tsx
├── data/               # 데이터 파일
│   └── portfolioData.ts
├── types/              # TypeScript 타입 정의
│   └── index.ts
└── App.tsx            # 메인 애플리케이션
```

## 🔧 새로운 내용 추가하기

### 1. 새로운 경력 추가
`src/data/portfolioData.ts` 파일의 `experiences` 배열에 추가:

```typescript
export const experiences: Experience[] = [
  // 기존 경력들...
  {
    company: "새로운 회사명",
    position: "새로운 직책",
    period: "2024.01 - 2024.12",
    description: "새로운 설명"
  }
];
```

### 2. 새로운 프로젝트 추가
`src/data/portfolioData.ts` 파일의 `projects` 배열에 추가:

```typescript
export const projects: Project[] = [
  // 기존 프로젝트들...
  {
    title: "새로운 프로젝트 제목",
    description: "프로젝트 설명",
    tech: ["기술1", "기술2", "기술3"],
    image: "이미지_URL",
    github: "GitHub_링크",
    demo: "데모_링크"
  }
];
```

### 3. 새로운 스킬 추가
`src/data/portfolioData.ts` 파일의 `skills` 배열에 추가:

```typescript
import { NewIcon } from 'lucide-react';

export const skills: Skill[] = [
  // 기존 스킬들...
  { 
    name: '새로운 스킬명', 
    icon: NewIcon, 
    level: 85 
  }
];
```

### 4. 새로운 핵심 역량 추가
`src/data/portfolioData.ts` 파일의 `coreCompetencies` 배열에 추가:

```typescript
export const coreCompetencies: CoreCompetency[] = [
  // 기존 역량들...
  { 
    name: "새로운 핵심 역량", 
    color: "bg-blue-400" 
  }
];
```

## 🎯 주요 섹션

### 1. AI 학습 과정 설계 연구
AI가 '어떻게' 배우고 '왜' 그렇게 배워야 하는지를 설계하는 연구 프로젝트

### 2. AI 안전 및 정렬 연구
인공지능의 철학적, 인지적, 존재론적 관점에서의 안전성 연구

### 3. 교차문화 AI 커뮤니케이션
다문화 환경에서의 AI 시스템 설계 및 커뮤니케이션 최적화

## 🛠️ 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📝 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.

---

**조동훈 (DongHoon Cho)** - AI 학습 과정 설계자 & AI Safety & Alignment 연구원
