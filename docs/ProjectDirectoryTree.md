# 프로젝트 디렉토리 구조

```
.
├── app/                          # Next.js 13+ App Router 디렉토리
│   ├── favicon.ico              # 웹사이트 파비콘
│   ├── globals.css              # 전역 스타일
│   ├── layout.tsx               # 루트 레이아웃
│   └── page.tsx                 # 메인 페이지
│
├── components/                   # 리액트 컴포넌트
│   ├── sections/                # 페이지 섹션 컴포넌트
│   │   ├── EducationSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── InterviewSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── ProjectSection.tsx
│   │   └── TechStackSection.tsx
│   ├── ui/                      # Shadcn UI 컴포넌트
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── skeleton.tsx
│   │   └── tooltip.tsx
│   ├── EducationCard.tsx        # 교육 정보 카드 컴포넌트
│   ├── EducationCardSkeleton.tsx
│   ├── InterviewCard.tsx        # 인터뷰 카드 컴포넌트
│   ├── ProjectCard.tsx          # 프로젝트 카드 컴포넌트
│   ├── ProjectCardSkeleton.tsx
│   └── ProjectModal.tsx         # 프로젝트 상세 모달
│
├── docs/                        # 프로젝트 문서
│   ├── DBStructure.md          # 데이터베이스 구조 문서
│   ├── PRD.md                  # 제품 요구사항 문서
│   ├── ProjectDirectoryTree.md  # 현재 문서
│   └── toss-frontend-rules.mdc  # 프론트엔드 규칙
│
├── lib/                         # 유틸리티 및 설정
│   ├── api/                    # API 관련 로직
│   │   └── projects.ts
│   ├── constants/              # 상수 정의
│   │   ├── interviews.ts
│   │   └── stacks.ts
│   ├── supabase/              # Supabase 클라이언트
│   │   └── client.ts
│   ├── api.ts                 # API 유틸리티
│   ├── types.ts               # 타입 정의
│   └── utils.ts               # 일반 유틸리티 함수
│
├── public/                      # 정적 파일
│   ├── file.svg
│   ├── globe.svg
│   ├── marbleTexture.png
│   ├── profile.png
│   └── window.svg
│
├── components.json              # Shadcn UI 설정
├── eslint.config.mjs           # ESLint 설정
├── next.config.ts              # Next.js 설정
├── package.json                # 프로젝트 의존성
├── pnpm-lock.yaml             # pnpm 락 파일
├── postcss.config.mjs         # PostCSS 설정
├── tailwind.config.ts         # Tailwind CSS 설정
├── tsconfig.json              # TypeScript 설정
└── README.md                  # 프로젝트 설명
```

## 주요 디렉토리 설명

-   `app/`: Next.js 13+ App Router를 사용한 페이지 및 레이아웃
-   `components/`: 재사용 가능한 React 컴포넌트
    -   `sections/`: 페이지의 주요 섹션 컴포넌트
    -   `ui/`: Shadcn UI 기반의 기본 UI 컴포넌트
-   `docs/`: 프로젝트 관련 문서
-   `lib/`: 유틸리티, API 로직, 타입 정의 등
-   `public/`: 이미지, 아이콘 등 정적 파일

## 기술 스택

-   Next.js 13+ (App Router)
-   TypeScript
-   Tailwind CSS
-   Shadcn UI
-   Supabase
