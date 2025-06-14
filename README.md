# 정재욱의 웹 포트폴리오

## 소개 👋

AI가 프론트엔드 개발에 생각보다 빠르게 영향을 미치고 있는 지금, 거부감보다는 **직접 활용하며 한계를 체감하고 차별점을 만들어가는 것**이 중요하다고 생각했습니다.

이 웹 포트폴리오는 **Cursor, Claude, Supabase MCP**등 최신 도구들을 적극적으로 활용하여 개발한 **풀스택 프로젝트**입니다.

## 역할 👥

프론트엔드, 백엔드

## 주요 기능 ✨

-   자기 소개
    -   간단한 소개 문구와 함께 프로필 사진 제공
    -   Github, Blog 링크 제공
-   프로젝트 소개
    -   프로젝트의 상세 정보 제공(관련 링크, 프로젝트 소개와 역할, 트러블 슈팅 및 회고, 프로젝트 화면 등)

## 서비스 링크 🔗

[정재욱의 웹 포트폴리오](https://www.jungjaeuk-portfolio.store/)

## 서비스 사진 📸

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/dcf1fcf6-afd9-4fa7-bef5-8430f9cce469" width="250"/><br/>
      <sub>인트로 화면</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/3a952c9b-63e0-4c03-931e-2c9b9a2e0cc3" width="250"/><br/>
      <sub>인터뷰/기술스택 화면</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/533a58ea-c419-4b84-978f-3d325bea8fbe" width="250"/><br/>
      <sub>프로젝트/교육이수내역 화면</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/8a882ac0-787a-43a1-82a8-be63ec55801b" width="250"/><br/>
      <sub>프로젝트 상세 화면</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/3d9d477e-6c73-476e-a187-2b508697d0b4" width="250"/><br/>
      <sub>푸터 화면</sub>
    </td>
  </tr>
</table>

## 사용 기술 및 언어 ⚒️

-   Next.js
-   ShadCN
-   Tailwind CSS
-   TypeScript
-   Cursor
-   Claude
-   MCP
-

## 담당 기능 💪

### 직관적이면서 단순한 UI/UX

-   이전까지는 웹 포트폴리오가 아닌 pdf로 포트폴리오를 제출했었는데, 아무리 잘 구성하려 하더라도 가독성이 떨어져 읽는 사람에 대한 배려가 부족하다는 느낌을 받음
-   ‘나’를 더 잘 보여줄 수 있도록 항목을 나누고 정보를 쉽게 전달할 수 있도록 구성

### 과하지 않은 애니메이션 사용(framer-motion)

-   복잡한 애니메이션은 오히려 사용자의 거부감을 불러일으킨다고 판단
-   적절한 애니메이션 배치로 사용자의 시선을 필요한 곳에 집중 시킴

### AI 툴 활용을 위한 문서 작성

-   AI와 함께 개발을 하는 것은 사람과 함께 협업을 하는 것과 마찬가지
-   명확한 문서화가 이전보다 훨씬 중요해 졌음을 인지
-   cursor에게 정확한 context를 전달할 수 있도록 [PRD](https://github.com/giujae/Portfolio/blob/main/docs/PRD.md), [DBStructure](https://github.com/giujae/Portfolio/blob/main/docs/DBStructure.md), [ProjectDirectoryTree](https://github.com/giujae/Portfolio/blob/main/docs/ProjectDirectoryTree.md) 등의 문서를 작성하고 활용
-   프롬프트 엔지니어링에 대해 공부하고 프롬프트 양식 구축

## Trouble Shooting 🔎

### Cursor가 맥락을 잘못 이해하고 엉뚱한 작업을 수행하는 이슈

#### 문제 상황

-   프롬프트와 다른 방향의 코드를 작성하거나, 불필요한 파일 변경 등 **요구 사항에서 벗어난 작업**이 빈번히 발생

#### 해결 방안

-   **PRD를 상세히 작성**하고, 프롬프트 작성 시 항상 **태그하여 참조** 가능하도록 구성
-   역할(Role)을 명확히 지정하고, 수시로 **맥락(Context)**과 **출력 형식**을 명시해 **작업 방향이 흐트러지지 않도록 유도**
-   **파일삭제** 등 위험도가 높은 작업에 대해서는 반드시 사전 확인을 요청하도록 **CursorRule 작성**

#### 결과

-   초기 문서화에 시간이 다소 소요되었지만, 이후에는 **요구사항 전달 정확도 향상**으로 **개발 속도와 효율이 크게 개선**됨
-   AI 협업에서도 **사람과의 협업처럼 명확한 문서와 의사소통이 핵심**임을 체감

## 회고 🤔

### 문서화의 중요성을 체감

-   이전 팀 프로젝트에서는 요구 명세서나 PRD 작성에 시간을 들이는 것이 비효율적이라 여겨 다소 소홀히 했습니다.
-   그러나 이번 프로젝트에서는 AI에게 컨텍스트를 전달하기 위해 문서를 구체적으로 작성하면서, **개발자 본인 또한 진행 상황과 방향성을 명확히 인식할 수 있었고**, 결과적으로 **작업 속도와 정확도 모두 향상되는 경험**을 할 수 있었습니다.
-   문서화는 협업뿐만 아니라 **AI와의 협업에도 핵심 도구**임을 체감했습니다.

### AI 개발 시대에 대한 태도 수립

-   처음에는 AI 기반 개발에 대해 회의적이었지만, 배척하기보다는 **직접 사용해보고 한계를 체감해야 한다는 판단**을 통해 적극적으로 도입했습니다.
-   현재 수준의 AI는 **개발자의 명확한 방향 제시와 판단력이 필수적**이며, 응답의 유효성을 평가할 수 있는 역량 또한 중요하다고 느꼈습니다.
-   이를 통해 개발자의 핵심 역량은 여전히 **문제 인식 능력과 근거 기반의 문제 해결력**이며, AI의 활용을 위해서라도 사용하는 기술에 대한 **깊이 있는 이해가 더욱 중요**하다는 사실을 체감했습니다.
-   동시에, AI를 잘 활용하면 **한 명의 개발자가 낼 수 있는 생산성과 기여 범위가 비약적으로 확장**될 수 있다는 점에서, 앞으로의 개발 환경에 대한 기대감도 생겼습니다.
