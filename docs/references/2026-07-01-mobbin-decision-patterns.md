# Mobbin 추천/예약/비교 UI 레퍼런스

## 목적

추천 시간을 점수로 보여주는 방식이 적절한지 판단하기 위해 Mobbin에서 예약, 캘린더, 추천, 비교 UI를 살펴봤다.

## 주요 레퍼런스

- [Clockwise - Finding a time](https://mobbin.com/flows/c2605ea7-3cb2-4166-b9f6-47c519b247d9)
- [SavvyCal 시간 선택](https://mobbin.com/screens/95c9fca4-2fab-4d05-a18a-0d0ab1032892)
- [Cal.com 시간 선택](https://mobbin.com/screens/5cc79401-5300-4436-86d2-a909f6d45ac7)
- [Apollo 미팅 예약](https://mobbin.com/screens/3f3f8266-647b-455b-927a-aff3f2120c5d)
- [Cron Calendar 일정 상세](https://mobbin.com/screens/de702c54-d633-49c2-8a85-f86f26cbe29c)
- [Amie 일정 상세](https://mobbin.com/screens/a8754792-77db-4616-8758-ebd5c33db592)
- [Kiwi.com 검색 결과 비교](https://mobbin.com/screens/dee2ac0c-e32f-4994-80e2-c3b9d4579e2c)
- [Mailchimp 가격 비교](https://mobbin.com/sites/sections/8fe41fc2-4310-4504-a9d3-0b99d63277cd)
- [TheyDo 인사이트 목록](https://mobbin.com/screens/cd78aaaa-eca6-49c1-b48d-463c1f5001d2)
- [Amplitude 추천 소개](https://mobbin.com/screens/c7e6a684-3176-4949-8656-b0b442424796)

## 관찰

Clockwise는 후보 시간을 숫자로 서열화하기보다 `Selected`, `Top pick`, `Also good`, `No conflicts`, 참석자 수 같은 판단 단서로 압축한다. 추천 근거가 점수보다 먼저 보인다.

SavvyCal, Cal.com, Apollo는 가능한 시간을 단순한 후보 목록으로 좁혀준다. 설명을 많이 붙이지 않고 선택 행위를 빠르게 만든다. 우리 프로젝트에서도 1차 후보는 가볍게 보여주고, 상세 근거는 선택 후 펼치는 방식이 적합하다.

Cron Calendar와 Amie는 일정 상세를 팝오버나 패널로 보여준다. 참석자, RSVP, 장소, 시간, 링크가 한곳에 묶여 있어 사용자가 맥락을 잃지 않는다.

Kiwi.com은 `Best`, `Cheapest`, `Fastest`처럼 기준별로 결과를 나눈다. 회의 추천에서도 `가장 안정적`, `빠른 확정`, `집중 논의 적합`, `부담 낮음`처럼 목적별 축을 만들 수 있다.

Mailchimp의 가격 비교 테이블은 후보 간 차이를 행/열로 비교한다. 회의 후보도 `필수 참석자`, `앞뒤 여유`, `회의실`, `집중 시간대`, `확정 리스크`를 비교하는 보기로 확장할 수 있다.

TheyDo와 Amplitude는 점수나 상태를 쓰더라도 메인 판단이 아니라 보조 메타데이터로 둔다. 우리도 점수를 완전히 없애기보다 내부 정렬용으로만 쓰거나 낮은 우선순위 정보로 내려놓는 편이 낫다.

## 가져올 수 있는 기능

1. 점수 대신 추천 라벨을 먼저 보여준다.
2. 후보마다 근거 칩을 붙인다.
3. 남은 리스크를 숨기지 않는다.
4. 목적별 추천 탭을 제공한다.
5. 후보 2~3개를 비교하는 보기를 둔다.
6. 후보 클릭 시 상세 패널에서 참석자별 가능 여부와 주변 일정을 보여준다.
7. 바로 확정하기 전 `임시 확보` 또는 `Hold` 액션을 제공한다.

## 현재 판단

추천 점수 UI보다 회의 목적별 판단 카드 UI가 더 적합하다. 화면의 첫 신호는 숫자가 아니라 추천 라벨, 근거, 리스크여야 한다.
