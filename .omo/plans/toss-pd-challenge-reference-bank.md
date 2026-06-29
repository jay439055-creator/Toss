# Toss PD Challenge 2026 UI Reference Bank

## 목적

이 문서는 사용자가 실제 WORKS/Figma 화면을 추가로 전달하기 전까지, 공개적으로 확인 가능한 캘린더/스케줄링 레퍼런스를 모아두는 작업장이다. 최종 과제 답변에 그대로 넣기 위한 문서가 아니라, 우리가 만들 로컬 프로토타입의 문제 정의와 화면 설계 판단을 뒷받침하기 위한 관찰 노트다.

현재 환경에서는 Mobbin MCP/커넥터가 연결되어 있지 않다. 따라서 Mobbin은 공개 페이지에서 확인 가능한 범위만 참고하고, 로그인/유료/비공개 캡처를 우회하지 않는다.

## 보안 기준

- 사내 캘린더, 참석자, 일정 제목, 회의실, 조직명 등은 사용자가 직접 제공한 범위 안에서만 다룬다.
- 실제 서비스 페이지의 소스, 쿠키, 세션, 내부 API 응답을 저장하거나 복제하지 않는다.
- 로컬 프로토타입은 스크린샷/Figma에서 관찰한 레이아웃과 인터랙션 패턴을 재구성하되, 데이터는 익명 샘플로 대체한다.
- 공개 레퍼런스는 문제 분석용 근거로 쓰고, 최종 답변에는 특정 서비스명을 과도하게 노출하지 않는다.

## 레퍼런스 축

### 1. 엔터프라이즈 free/busy 그리드

대표 레퍼런스:

- [Microsoft Outlook Scheduling Assistant](https://support.microsoft.com/en-us/outlook/use-the-scheduling-assistant-and-room-finder-for-meetings-in-outlook)
- [Google Calendar - Find times to meet](https://support.google.com/calendar/answer/6294878?hl=en)
- [NAVER WORKS - Create events](https://help.worksmobile.com/en/use-guides/calendar/create-event/new-event/)
- [NAVER WORKS - View reservation status](https://help.worksmobile.com/en/use-guides/calendar/reserve-resource/view-availability/)

관찰:

- 이 계열은 참석자와 자원의 바쁨/비어 있음 상태를 시간축에 직접 겹쳐 보여준다.
- 사용자는 “모두 비는 시간”을 빠르게 좁힐 수 있다.
- 회의실, 리소스, 참석자 권한 같은 업무 캘린더의 현실 조건을 한 화면에서 확인할 수 있다.

한계:

- 대부분의 판단 기준이 “비어 있는가”에 머문다.
- 후보 시간이 여러 개 남았을 때, 그 시간이 회의 목적에 맞는 좋은 선택인지 판단하는 기준은 사용자 머릿속에 남는다.
- 추천 시간이 있어도 “왜 이 시간이 더 나은지”가 충분히 설명되지 않으면, 사용자는 결국 캘린더를 다시 훑고 회의 맥락을 떠올려야 한다.

우리에게 필요한 전환:

- free/busy 그리드는 유지하되, 최종 의사결정 옆에 “이 회의 목적에는 왜 이 시간이 나은가”를 노출해야 한다.
- 가능한 시간 자체보다 후보 간 차이를 설명하는 정보가 더 중요하다.

### 2. 투표형 그룹 스케줄링

대표 레퍼런스:

- [Calendly Meeting Polls](https://calendly.com/scheduling/meeting-polls)
- [Calendly Help - Meeting Polls overview](https://calendly.com/help/meeting-polls-overview)
- [Doodle Group Polls](https://doodle.com/en/product/polls/)
- [WhenAvailable](https://whenavailable.com/)

관찰:

- 호스트가 여러 후보 시간을 제안하고, 참석자가 가능한 시간을 투표한다.
- 외부 참석자나 캘린더 공유가 어려운 상황에서 특히 강하다.
- “가장 많이 되는 시간”이라는 단순한 결정 기준을 제공한다.

한계:

- 투표 결과가 많아질수록 호스트는 다시 해석자가 된다.
- 득표수가 높은 시간이 실제로 회의 목적에 가장 좋은 시간이라는 보장은 없다.
- 투표 전후로 회의실, 사전 준비 시간, 집중 시간대, 결정권자 컨디션 같은 맥락이 분리된다.

우리에게 필요한 전환:

- 투표식 후보 비교의 장점은 가져오되, 득표수나 참석 가능 인원만으로 후보를 정렬하지 않는다.
- 후보별로 “좋은 점 / 조심할 점 / 확인이 필요한 것”을 함께 보여주는 판단형 카드가 필요하다.

### 3. 예약/자원 중심 스케줄링

대표 레퍼런스:

- [NAVER WORKS - View reservation status](https://help.worksmobile.com/en/use-guides/calendar/reserve-resource/view-availability/)
- [Robin - Meeting room booking software](https://robinpowered.com/blog/what-is-meeting-room-booking-software)
- [DeskFlex - Room scheduling software](https://www.deskflex.com/Products/Room-Scheduling)
- [Google Workspace - Appointment scheduling](https://workspace.google.com/resources/appointment-scheduling/)

관찰:

- 회의실, 장비, 좌석 수, 위치, 예약 가능 상태처럼 “공간/자원 조건”을 명시적으로 다룬다.
- 사용자는 참석자 가능 시간과 장소 가능 여부를 함께 확인해야 한다.
- 예약 확정 이후의 충돌 방지, 체크인, 해제 같은 운영 기능이 중요해진다.

한계:

- 자원이 맞는 시간이 곧 좋은 회의 시간은 아니다.
- 회의의 성격에 따라 필요한 공간 조건이 달라지지만, 일반 캘린더는 이를 회의 목적과 강하게 연결하지 않는다.

우리에게 필요한 전환:

- 회의 목적에 따라 자원 조건의 우선순위가 바뀌어야 한다.
- 예: 빠른 의사결정 회의는 결정권자 참석과 빠른 확정이 우선이고, 워크숍은 긴 연속 시간과 적절한 공간이 우선이다.

### 4. AI/추천형 스케줄링

대표 레퍼런스:

- [Google Calendar - Let Gemini find times to meet](https://support.google.com/calendar/answer/16690875?hl=en)
- [Google Calendar - Find times to meet](https://support.google.com/calendar/answer/6294878?hl=en)

관찰:

- 최근 캘린더 제품은 후보 시간을 직접 추천하는 방향으로 이동하고 있다.
- 사용자는 수동 탐색보다 추천 후보를 받아보고 싶어 한다.
- 추천은 시간을 절약하지만, 근거가 약하면 사용자는 추천을 신뢰하기 어렵다.

한계:

- “추천”이 블랙박스처럼 보이면 사용자는 다시 원본 캘린더로 돌아가 검산한다.
- 좋은 추천은 후보를 줄이는 것뿐 아니라, 사용자가 그 후보를 설명하고 확정할 수 있게 만들어야 한다.

우리에게 필요한 전환:

- AI처럼 보이는 자동화보다, 기준이 보이는 추천이 더 설득력 있다.
- 추천 후보는 “점수”보다 “판단 근거”를 전면에 둔다.

### 5. Mobbin 스케줄링 UI 레퍼런스

대표 레퍼런스:

- [SavvyCal meeting poll editor](https://mobbin.com/screens/7c900625-a5f6-4cfa-9856-27bc5637ddfa)
- [Clockwise time selection](https://mobbin.com/screens/a4759d6c-3c26-4d04-9f45-abd41964199f)
- [Clockwise find time with calendar](https://mobbin.com/screens/58c8805c-1d8d-4c03-b46b-092a9ea5e571)
- [Clockwise suggestion list](https://mobbin.com/screens/7ac51823-dbad-4779-8eb1-8eb6a21f6e6a)
- [Calendly one-off meeting](https://mobbin.com/screens/07cd605e-9cda-4519-9185-d8164fce1fad)
- [Square appointment time selection](https://mobbin.com/screens/5c191789-20a8-4f82-8ee5-2f0be71714b4)
- [Amie slot selection](https://mobbin.com/screens/c3d269b1-eb5e-4e56-856b-907f8f40c134)
- [Fresha booking time selection](https://mobbin.com/screens/9b43fe75-dae4-4265-88f0-11d5203e3d14)

관찰:

- Clockwise는 날짜별 시간 슬롯을 보여주되 `BEST`, `Top pick`, `No conflicts`, `Also good`처럼 후보의 판단 상태를 함께 붙인다.
- SavvyCal과 Calendly는 후보 선택과 원본 캘린더 그리드를 함께 유지해 사용자가 추천 결과를 검산할 수 있게 한다.
- Square와 Fresha는 시간 선택 영역과 예약 요약 영역을 분리해, 사용자가 선택한 시간이 어떤 예약 맥락에 연결되는지 바로 확인하게 한다.
- Amie처럼 촘촘한 슬롯 목록은 빠른 예약에는 유리하지만, 회의 목적에 맞는 좋은 시간을 판단하는 데에는 후보가 너무 같은 무게로 보이는 한계가 있다.

우리에게 필요한 전환:

- 추천 시간은 파란 칩을 많이 보여주는 화면이 아니라, 후보를 `추천`, `빠른 확정`, `집중 우선`, `확인 필요`처럼 판단 가능한 묶음으로 보여줘야 한다.
- 원본 free/busy 그리드는 버리지 않는다. 사용자가 추천 결과를 믿기 위해서는 검산할 수 있는 원본 맥락이 필요하다.
- 확정 전에는 후보마다 추천 이유, 충족 조건, 남은 trade-off, 다음 액션이 보여야 한다.
- Mobbin은 최종 문제 정의의 근거라기보다, 우리가 정의한 문제를 화면으로 설득력 있게 보여주기 위한 구조 참고로 둔다.

## 현재 문제 정의 후보

기존 캘린더는 가능한 시간을 찾는 데에는 이미 꽤 강하다. 하지만 회의 후보가 여러 개 남았을 때, 사용자가 실제로 해야 하는 일은 “빈칸 찾기”가 아니라 “이 회의에 더 좋은 시간을 고르는 것”이다.

이때 좋은 시간의 기준은 회의마다 달라진다.

- 빠른 결정 회의: 핵심 의사결정자가 있고, 너무 늦지 않으며, 확정까지 마찰이 적은 시간
- 리뷰/피드백 회의: 참석자가 회의 전에 볼 시간이 있고, 직전/직후 일정이 과하게 붙어 있지 않은 시간
- 워크숍/기획 회의: 긴 연속 시간, 에너지 소모가 적은 시간대, 적절한 공간 조건이 있는 시간
- 외부 미팅: 링크 공유/투표/확정 커뮤니케이션이 쉬운 시간

따라서 핵심 문제는 다음처럼 잡는 편이 좋다.

> 사용자는 캘린더에서 “비는 시간”은 찾을 수 있지만, 그 시간이 이번 회의의 목적에 맞는 좋은 선택인지 판단하는 기준은 화면 밖에서 스스로 조합해야 한다. 그래서 후보가 여러 개 남는 순간부터 캘린더 탐색은 끝나지 않고, 일정 맥락을 다시 훑고, 참석자 역할과 회의 목적을 떠올리고, 확정 메시지까지 따로 판단해야 하는 의사결정 부담으로 바뀐다.

## 프로토타입 설계 방향

### 화면 구조

- 좌측: 회의 목적, 참석자, 시간 범위, 기본 조건을 설정하는 영역
- 중앙: 기존 업무 캘린더와 거의 같은 free/busy 그리드
- 우측: 후보 시간의 판단 근거를 비교하는 결정 패널

### 후보 카드에 보여줄 정보

- 이 시간이 좋은 이유
- 조심해야 할 점
- 확인이 필요한 사람/조건
- 회의 목적과의 적합도
- 확정 시 보낼 수 있는 짧은 결정 요약

### 과하게 강조하지 않을 것

- 필수/선택 참석자 손실 계산은 핵심 인사이트가 아니다. 필수 참석자는 당연히 필수 조건이고, 선택 참석자는 보조 조건일 뿐이다.
- “AI가 알아서 최고 시간을 골라준다”는 식의 블랙박스 표현은 피한다.
- 단순 점수 경쟁 UI는 피한다. 점수보다 판단 근거가 더 중요하다.

## 다음 작업 체크리스트

- [ ] 사용자가 제공할 WORKS/Figma 화면을 기준으로 기본 캘린더 레이아웃을 더 정확히 복제한다.
- [ ] 기존 캘린더의 “가능 시간 탐색” 플로우와 우리가 추가할 “후보 판단” 플로우를 분리해서 설계한다.
- [ ] 후보 카드의 문구를 회의 목적별로 다르게 만든다.
- [ ] 최종 1번 답변은 서비스명 나열이 아니라, 위 문제 정의를 600~700자 안에서 압축한다.
- [ ] 2번 답변은 화면 구조와 사용 흐름을 중심으로 설명한다.
- [ ] 3번 답변은 왜 free/busy 그리드 위에 판단 패널을 얹었는지, 왜 점수/AI/투표 중심으로 가지 않았는지 설명한다.
