# CONNECT Calendar Local Prototype Design System

## 1. Atmosphere & Identity

업무용 캘린더를 고충실도로 재구성한 로컬 프로토타입이다. 화면은 설명형 대시보드가 아니라 반복 사용되는 업무 도구처럼 보여야 한다. 핵심 인상은 밝고 얇고 촘촘한 캘린더, 낮은 장식성, 빠른 스캔, 명확한 선택 상태다.

브랜드 신호는 `CONNECT 캘린더` 텍스트, 좌측 보라색 일정쓰기 버튼, 파란색 선택 상태, 연한 회색 그리드에서 온다. 불필요한 마케팅형 카드, 넓은 히어로, 장식 그래픽은 쓰지 않는다.

## 2. Color

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| App surface | `--surface-app` | `248 249 251` | 좌측 사이드바 배경 |
| Base surface | `--surface-base` | `255 255 255` | 주요 화면 배경 |
| Subtle surface | `--surface-subtle` | `246 248 251` | 낮은 대비 보조 배경 |
| Control surface | `--surface-control` | `245 247 251` | 검색창, 입력성 컨트롤 |
| Hover surface | `--surface-hover` | `240 244 249` | 버튼 hover |
| Selected surface | `--surface-selected` | `230 239 255` | 미니 캘린더 범위, 선택 메뉴 |
| Event surface | `--surface-event` | `241 242 246` | 구성원 일정 있음 블록 |
| Strong event | `--surface-event-strong` | `188 196 209` | 개인 캘린더 일정 블록 |
| Disabled surface | `--surface-disabled` | `232 234 238` | 예약 불가/비활성 칩 |
| Text strong | `--text-strong` | `32 35 41` | 주요 텍스트 |
| Text body | `--text-body` | `49 55 65` | 일반 텍스트 |
| Text muted | `--text-muted` | `103 112 127` | 보조 설명 |
| Text faint | `--text-faint` | `158 167 179` | 비활성 날짜, 약한 정보 |
| Border line | `--border-line` | `226 231 238` | 주요 구획선 |
| Border soft | `--border-soft` | `238 242 247` | 캘린더 내부 그리드 |
| Brand blue | `--brand-blue` | `25 103 210` | 활성 탭, 저장, 선택 상태 |
| Brand purple | `--brand-purple` | `128 96 245` | 일정쓰기 버튼 |
| Brand green | `--brand-green` | `20 196 96` | CONNECT 워드마크 강조 |
| Danger red | `--danger-red` | `234 54 78` | 일요일/알림 배지 |
| Room blue | `--room-blue` | `216 233 255` | 빈 시간/추천 시간 영역 |

색은 기능을 설명할 때만 쓴다. 파란색은 현재 선택, 보라색은 새 일정 작성, 회색은 일정 있음/예약 불가를 뜻한다.

## 3. Typography

Primary font stack: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`.

| Level | Size | Weight | Line height | Usage |
| --- | --- | --- | --- | --- |
| Page title | `24px` | 900 | 1 | 날짜 범위, 월 제목 |
| Brand | `20-22px` | 800-900 | 1 | CONNECT 캘린더 |
| Section label | `15px` | 800 | 1.4 | 탭, 저장 액션 |
| Body | `14px` | 600 | 1.45 | 필드, 버튼, 네비게이션 |
| Dense body | `13px` | 600-800 | 1.4 | 일정 블록, 캘린더 헤더 |
| Caption | `12px` | 500-700 | 1.4 | 팀명, 설명, 보조 정보 |

업무 화면이므로 본문 텍스트는 작지만 흐려지지 않아야 한다. 글자 간격은 항상 `0`이다.

## 4. Spacing & Layout

Base unit is `4px`.

| Token | Value | Usage |
| --- | --- | --- |
| `--topbar-height` | `58px` | 전체 상단 헤더 |
| `--sidebar-width` | `250px` | 좌측 캘린더 메뉴 |
| `--toolbar-height` | `68px` | 캘린더 상단 날짜/보기 컨트롤 |
| `--filter-height` | `49px` | 구성원 검색/조직 필터 |
| `--radius-sm` | `4px` | 일정 블록, 네비게이션 선택 |
| `--radius-md` | `6px` | 버튼, 입력 필드 |
| `--radius-lg` | `10px` | 큰 팝오버 |

Desktop layout:

- App shell: `250px` sidebar + flexible main.
- Team week grid: `130px` member column + seven `220px` day columns.
- Compose view: event form / `9px` splitter / availability panel.
- Header: fixed `58px`, content below scrolls independently.

Mobile and narrow layouts keep the same data but collapse composer availability panel first, then stack sidebar above main.

## 5. Components

### Topbar

- Fixed `58px` height.
- Left brand, optional search, right app icons.
- Icon buttons are `32px` square with transparent default background.

### Left Sidebar

- `250px` wide.
- Purple primary compose button at top.
- Mini calendar uses `28px` date cells and a selected black date circle.
- Active navigation row uses soft blue background.

### Team Week Grid

- Header row height: `30px`.
- Member column width: `130px`.
- Day column width: `220px`.
- Member rows may vary in height to match stacked busy blocks.
- Event blocks are pale gray, `38px` high, with time and title stacked.

### Event Composer

- Top action bar: save/cancel.
- Form rows use `32px` icon column plus fields.
- Inputs and selects are `36px` high.
- Attendee list is a two-column bordered block on desktop.
- Availability panel has two tabs: 빈 시간 확인, 추천 시간.

### Availability Grid

- First column identifies attendee/resource.
- Hour cells are narrow and evenly divided.
- Blue area means available/recommended.
- Gray area means busy/unavailable.
- Selected time uses blue outline rather than a filled badge.

### Recommendation Decision Cards

- 추천 시간은 단순 칩 목록이 아니라 날짜별 후보 카드로 보여준다.
- 카드에는 시간, 추천 라벨, 추천 이유, 충족 신호, 남은 trade-off, 확정 액션이 함께 있어야 한다.
- 파란 라벨은 바로 확정 가능한 추천/빠른 확정, 회색 라벨은 확인 필요 또는 낮은 우선순위를 뜻한다.
- 대안 시간은 카드 하단의 작은 칩으로 제공하되, 주 판단 대상은 카드 전체다.
- 카드 배경은 `--surface-base`, 선택 카드는 `rgba(var(--brand-blue), 0.05)` 수준으로만 강조한다.

### Room Modal

- Centered dialog with large white surface and restrained shadow.
- Tree rows use checkboxes, room names, capacity.
- Disabled rooms are gray and cannot be selected.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
| --- | --- | --- | --- |
| Micro | `120-160ms` | `ease-out` | button hover/press |
| Popover | `180ms` | `ease-out` | toast and small overlays |

Motion is subtle. The product should feel like a native work tool, not a presentation. All interactive controls need hover, pressed, and focus-visible states.

## 7. Depth & Surface

Most hierarchy comes from borders and spacing, not shadows.

| Level | Value | Usage |
| --- | --- | --- |
| Grid line | `1px solid rgb(var(--border-soft))` | calendar cells |
| Section line | `1px solid rgb(var(--border-line))` | header/sidebar/form divisions |
| Popover shadow | `--shadow-popover` | date picker |
| Modal shadow | `--shadow-modal` | room reservation dialog |

Do not put decorative cards inside other cards. Cards appear only for concrete UI objects such as attendee rows, event blocks, modal surfaces, and time chips.
