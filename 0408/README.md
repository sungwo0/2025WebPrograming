# 6주차 강의 내용

# 🎯 웹페이지 기획: 취업 준비생을 위한 AI 이력서 피드백 웹페이지

## ✅ 목적

- **누구에게 도움이 되는가?**
  - 대상: 취업 준비생
  - 목적: AI를 활용한 이력서 피드백 제공
  - 효과: 자기소개서 및 이력서 개선에 도움

---

## 🧩 주요 기능

1. 이력서 업로드 기능
2. 업로드 이후 분석 중임을 나타내는 로딩 표시
3. 분석 완료 후 AI 피드백 결과 제공

---

## ⚙️ 기술 요소 (React 기준)

### 📦 Props (3개 이상 사용)
- `userName`: 사용자 이름
- `resumeUrl`: 이력서 링크
- `feedbackLevel`: 피드백 정밀도 수준

### 🔄 State (3개 이상 사용)
- `isUploaded`: 이력서 업로드 여부
- `isLoading`: 분석 중 상태 여부
- `feedback`: 분석된 피드백 내용

---

## 🖼️ UI 흐름

1. 사용자가 이력서 URL을 입력하고 분석 요청

![Image](https://github.com/user-attachments/assets/8034fc6e-f854-4cb8-907c-2369f4b8555b)

2. 로딩 메시지 출력 ("AI가 분석 중입니다...")

![Image](https://github.com/user-attachments/assets/f61f126f-9457-4e7e-a538-9ddd53693319)

3. 분석이 완료되면 피드백 결과 표시
   - 예: "이력서가 명확하고 깔끔하지만, 프로젝트 경험을 더 강조하세요."

![Image](https://github.com/user-attachments/assets/24ec1345-8525-4d65-8124-f047fbd30803)

---
