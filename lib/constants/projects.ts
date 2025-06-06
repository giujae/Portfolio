export type Project = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    repoUrl?: string;
    demoUrl?: string;
    techStack: string[];
    markdownContent?: string;
};

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: '포트폴리오',
        description: 'Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트입니다.',
        thumbnail: '/projects/portfolio.png',
        repoUrl: 'https://github.com/yourusername/portfolio',
        demoUrl: 'https://portfolio.yourdomain.com',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        markdownContent: `
# 포트폴리오 웹사이트 🚀

## 프로젝트 소개

이 프로젝트는 **Next.js 14**와 **App Router**를 활용하여 개발한 개인 포트폴리오 웹사이트입니다. 모던하고 반응형인 디자인을 구현하기 위해 **Tailwind CSS**와 **ShadcnUI**를 사용했습니다.

## 주요 기능 ✨

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 등 다양한 화면 크기 지원
- Flexbox와 Grid를 활용한 레이아웃 구성
- \`useMediaQuery\` 훅을 통한 디바이스별 최적화

### 2. 다크 모드
\`\`\`typescript
// 다크 모드 토글 예시
const toggleTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
};
\`\`\`

### 3. 프로젝트 갤러리
- 그리드 레이아웃으로 프로젝트 카드 표시
- 호버 효과와 애니메이션
- 상세 정보를 볼 수 있는 모달 구현

## 기술 스택 🛠

| 분야 | 사용 기술 |
|------|-----------|
| 프레임워크 | Next.js 14 |
| 스타일링 | Tailwind CSS |
| 컴포넌트 | ShadcnUI |
| 애니메이션 | Framer Motion |
| 배포 | Vercel |

## 성능 최적화 📈

- Next.js의 Image 컴포넌트를 활용한 이미지 최적화
- 컴포넌트 지연 로딩 (React.lazy)
- 정적 페이지 생성 (Static Site Generation)
`,
    },
    {
        id: 'project-2',
        title: '실시간 채팅 앱',
        description: 'WebSocket을 활용한 실시간 채팅 애플리케이션입니다.',
        thumbnail: '/projects/project2.png',
        repoUrl: 'https://github.com/yourusername/chat-app',
        techStack: ['React', 'TypeScript', 'WebSocket'],
        markdownContent: `
# 실시간 채팅 애플리케이션 💬

## 프로젝트 개요

WebSocket을 활용하여 실시간 양방향 통신이 가능한 채팅 애플리케이션을 개발했습니다. 사용자들은 실시간으로 메시지를 주고받을 수 있으며, 이모지 반응과 파일 공유 기능도 제공합니다.

## 핵심 기능 🔑

### 1. 실시간 메시징
\`\`\`typescript
// WebSocket 연결 예시
const ws = new WebSocket('wss://api.example.com');
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  addMessageToChat(message);
};
\`\`\`

### 2. 채팅방 기능
- 1:1 채팅
- 그룹 채팅
- 채팅방 초대
- 메시지 검색

### 3. 부가 기능
- 이모지 반응
- 파일 첨부
- 읽음 확인
- 타이핑 표시

## 기술적 도전과 해결 🔧

1. **메시지 동기화 문제**
   - 오프라인 상태에서의 메시지 처리
   - 재접속 시 누락된 메시지 동기화

2. **성능 최적화**
   - 메시지 가상화로 렌더링 최적화
   - 이미지 레이지 로딩 구현

## 사용된 기술 스택

- Frontend: React, TypeScript
- Backend: Node.js, Express
- 실시간 통신: WebSocket
- 데이터베이스: MongoDB
`,
    },
    {
        id: 'project-3',
        title: 'AI 이미지 생성기',
        description: 'Stable Diffusion API를 활용한 AI 이미지 생성 서비스입니다.',
        thumbnail: '/projects/project3.png',
        demoUrl: 'https://ai-image-generator.yourdomain.com',
        techStack: ['Vue.js', 'JavaScript', 'SCSS'],
        markdownContent: `
# AI 이미지 생성기 🎨

## 서비스 소개

Stable Diffusion API를 활용하여 사용자가 입력한 프롬프트를 기반으로 AI가 이미지를 생성하는 서비스입니다. 직관적인 UI/UX를 통해 누구나 쉽게 AI 이미지를 만들 수 있습니다.

## 주요 기능 🌟

### 1. 이미지 생성
- 텍스트 프롬프트 기반 이미지 생성
- 네거티브 프롬프트 지원
- 다양한 이미지 스타일 프리셋

### 2. 이미지 편집
\`\`\`javascript
// 이미지 편집 옵션 예시
const editOptions = {
  width: 512,
  height: 512,
  steps: 50,
  guidance_scale: 7.5,
  seed: Math.floor(Math.random() * 1000000)
};
\`\`\`

### 3. 갤러리 기능
- 생성된 이미지 저장
- 커뮤니티 공유
- 좋아요 및 댓글

## 기술적 특징 💻

1. **성능 최적화**
   - 이미지 생성 중 로딩 상태 표시
   - 생성된 이미지 캐싱
   - 프로그레시브 이미지 로딩

2. **사용자 경험**
   - 드래그 앤 드롭 인터페이스
   - 실시간 프리뷰
   - 반응형 디자인

## 사용된 기술

| 기술 | 용도 |
|------|------|
| Vue.js | 프론트엔드 프레임워크 |
| Vuex | 상태 관리 |
| SCSS | 스타일링 |
| Stable Diffusion | 이미지 생성 API |
`,
    },
];
