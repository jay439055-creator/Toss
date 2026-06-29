# Toss PD Challenge Calendar Prototype

토스 Product Designer Challenge 2026 과제를 위해 만든 로컬 캘린더/일정 조율 프로토타입이다.

핵심 방향은 “여러 명의 빈 시간을 찾기”가 아니라, **회의 목적에 맞는 시간을 판단하고 그 선택 이유를 설명할 수 있게 만드는 일정 조율 경험**이다.

## 실행

정적 HTML 프로토타입이라 별도 서버 없이 `index.html`을 브라우저에서 열면 된다.

## 주요 파일

- `index.html`: CONNECT 캘린더형 로컬 프로토타입 화면 구조
- `styles.css`: 캘린더, 일정 작성, 빈 시간 확인, 추천 시간, 회의실 예약 스타일
- `app.js`: 화면 전환, 추천 후보 카드, 회의실 모달, 캘린더 렌더링
- `DESIGN.md`: 로컬 프로토타입 디자인 시스템
- `.omo/plans/`: 과제 문제 정의, 레퍼런스, 답변 초안, 제품 방향 문서
- `.omo/drafts/`: 작업 중 정리한 제출 방향 드래프트

## 현재 브랜치 방향

`codex/mobbin-product-direction` 브랜치에서는 Mobbin의 실제 스케줄링/예약 UI를 참고해 추천 시간 화면을 보강했다.

- Clockwise 계열 화면에서 `Top pick`, `No conflicts`, `Also good`처럼 후보를 판단 라벨로 나누는 방식을 참고했다.
- Square/Fresha 계열 예약 화면에서 날짜 선택, 시간 슬롯, 우측 요약이 분리되는 구조를 참고했다.
- SavvyCal/Calendly 계열 화면에서 원본 캘린더 그리드와 후보 선택 흐름을 함께 유지하는 방식을 참고했다.

반영 결과, `추천 시간` 탭은 단순 시간 칩 목록이 아니라 날짜별 후보 카드로 바뀌었다. 각 카드는 시간, 추천 이유, 충족 조건, 남은 trade-off, 확정 액션을 함께 보여준다.
