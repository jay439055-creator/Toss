const shell = document.querySelector(".app-shell");
const calendarScreen = document.querySelector("#calendarScreen");
const composeScreen = document.querySelector("#composeScreen");
const detailScreen = document.querySelector("#detailScreen");
const detailContent = document.querySelector("#detailContent");
const detailAvailability = document.querySelector("#detailAvailability");
const miniGrid = document.querySelector("#miniGrid");
const pickerGrid = document.querySelector("#pickerGrid");
const teamWeekGrid = document.querySelector("#teamWeekGrid");
const personalDayGrid = document.querySelector("#personalDayGrid");
const personalWeekGrid = document.querySelector("#personalWeekGrid");
const monthGridView = document.querySelector("#monthGridView");
const calendarTitle = document.querySelector("#calendarTitle");
const teamFilter = document.querySelector("[data-team-filter]");
const topSearch = document.querySelector("[data-calendar-search]");
const attendeeBox = document.querySelector("#attendeeBox");
const availabilityGrid = document.querySelector("#availabilityGrid");
const emptyTimeView = document.querySelector("#emptyTimeView");
const recommendTimeView = document.querySelector("#recommendTimeView");
const recommendEmpty = document.querySelector("#recommendEmpty");
const recommendList = document.querySelector("#recommendList");
const datepickerPopover = document.querySelector("#datepickerPopover");
const eventDetail = document.querySelector("#eventDetail");
const roomModal = document.querySelector("#roomModal");
const roomTree = document.querySelector("#roomTree");
const selectedRoom = document.querySelector("#selectedRoom");
const toast = document.querySelector("#toast");

const monthDates = [
  { value: "31", outside: true, sunday: true },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6", sunday: false },
  { value: "7", sunday: true },
  { value: "8" },
  { value: "9" },
  { value: "10" },
  { value: "11" },
  { value: "12" },
  { value: "13" },
  { value: "14", sunday: true },
  { value: "15" },
  { value: "16" },
  { value: "17" },
  { value: "18" },
  { value: "19" },
  { value: "20" },
  { value: "21", sunday: true, range: true },
  { value: "22", range: true },
  { value: "23", range: true },
  { value: "24", range: true },
  { value: "25", range: true },
  { value: "26", range: true, accent: true },
  { value: "27", range: true },
  { value: "28", sunday: true, range: true },
  { value: "29", primary: true, range: true },
  { value: "30", range: true },
  { value: "1", outside: true, range: true },
  { value: "2", outside: true, range: true },
  { value: "3", outside: true, range: true },
  { value: "4", outside: true, range: true },
];

const teamDays = [
  { label: "28 일", sunday: true },
  { label: "29 월", current: true },
  { label: "30 화" },
  { label: "1 수" },
  { label: "2 목" },
  { label: "3 금" },
  { label: "4 토" },
];

const teamDateLabels = [
  "2026.06.28 (일)",
  "2026.06.29 (월)",
  "2026.06.30 (화)",
  "2026.07.01 (수)",
  "2026.07.02 (목)",
  "2026.07.03 (금)",
  "2026.07.04 (토)",
];

const personalWeekDateLabels = [
  "2026.06.21 (일)",
  "2026.06.22 (월)",
  "2026.06.23 (화)",
  "2026.06.24 (수)",
  "2026.06.25 (목)",
  "2026.06.26 (금)",
  "2026.06.27 (토)",
];

const teamMembers = [
  { id: "sin", name: "신지", team: "AI검색설계", initial: "신", height: 156, colors: ["rgb(255 226 216)", "rgb(238 244 255)"] },
  { id: "kim", name: "김재엽", team: "AI검색설계", initial: "김", height: 292, colors: ["rgb(216 231 242)", "rgb(245 239 233)"] },
  { id: "woo", name: "우희택", team: "AI검색설계", initial: "우", height: 156, colors: ["rgb(245 244 239)", "rgb(225 237 248)"] },
  { id: "joo", name: "주혜신", team: "AI검색설계", initial: "주", height: 156, colors: ["rgb(255 232 241)", "rgb(236 248 243)"] },
  { id: "ham", name: "함다인", team: "AI검색설계", initial: "함", height: 156, colors: ["rgb(235 241 252)", "rgb(255 232 222)"] },
  { id: "hwang", name: "황지수", team: "AI검색설계", initial: "황", height: 156, colors: ["rgb(236 245 239)", "rgb(245 239 255)"] },
];

const teamEvents = [
  { member: "sin", day: 2, top: 0, height: 38, time: "11:00~12:00", title: "주간 팀미팅" },
  { member: "kim", day: 1, top: 0, height: 38, time: "10:00~11:00", title: "일정있음" },
  { member: "kim", day: 1, top: 39, height: 38, time: "11:00~12:00", title: "일정있음" },
  { member: "kim", day: 1, top: 78, height: 38, time: "12:00~13:30", title: "일정있음" },
  { member: "kim", day: 1, top: 117, height: 38, time: "14:00~16:00", title: "일정있음" },
  { member: "kim", day: 1, top: 156, height: 38, time: "14:00~16:00", title: "일정있음" },
  { member: "kim", day: 1, top: 195, height: 38, time: "16:30~19:00", title: "일정있음" },
  { member: "kim", day: 1, top: 234, height: 38, time: "17:00~18:00", title: "일정있음" },
  { member: "kim", day: 2, top: 0, height: 38, time: "11:00~12:00", title: "일정있음" },
  { member: "kim", day: 2, top: 39, height: 38, time: "16:00~16:30", title: "일정있음" },
  { member: "kim", day: 3, top: 0, height: 38, time: "11:00~12:00", title: "일정있음" },
  { member: "kim", day: 3, top: 39, height: 38, time: "12:00~13:30", title: "일정있음" },
  { member: "kim", day: 3, top: 78, height: 38, time: "14:00~15:00", title: "일정있음" },
  { member: "kim", day: 3, top: 117, height: 38, time: "14:00~15:00", title: "일정있음" },
  { member: "kim", day: 3, top: 156, height: 38, time: "15:30~16:30", title: "일정있음" },
  { member: "kim", day: 3, top: 195, height: 38, time: "16:30~18:00", title: "일정있음" },
  { member: "kim", day: 3, top: 234, height: 38, time: "18:00~19:00", title: "일정있음" },
  { member: "kim", day: 4, top: 0, height: 38, time: "11:00~12:00", title: "일정있음" },
  { member: "kim", day: 4, top: 39, height: 38, time: "14:00~16:00", title: "일정있음" },
  { member: "kim", day: 4, top: 78, height: 38, time: "14:05~15:00", title: "일정있음" },
  { member: "kim", day: 4, top: 117, height: 38, time: "15:00~16:00", title: "일정있음" },
  { member: "kim", day: 4, top: 156, height: 38, time: "16:00~17:00", title: "일정있음" },
  { member: "kim", day: 4, top: 195, height: 38, time: "19:00~21:00", title: "일정있음" },
  { member: "kim", day: 5, top: 0, height: 38, time: "14:00~15:00", title: "일정있음" },
  { member: "kim", day: 5, top: 39, height: 38, time: "16:30~19:00", title: "일정있음" },
  { member: "woo", day: 1, top: 0, height: 38, time: "12:00~13:00", title: "일정있음" },
  { member: "woo", day: 2, top: 0, height: 38, time: "11:00~12:00", title: "일정있음" },
  { member: "woo", day: 2, top: 39, height: 38, time: "14:00~15:00", title: "일정있음" },
  { member: "woo", day: 3, top: 0, height: 38, time: "13:00~14:00", title: "일정있음" },
  { member: "woo", day: 3, top: 39, height: 38, time: "16:30~18:00", title: "일정있음" },
  { member: "woo", day: 4, top: 0, height: 38, time: "16:00~17:00", title: "일정있음" },
  { member: "joo", day: 2, top: 0, height: 38, time: "11:00~12:00", title: "일정있음" },
  { member: "joo", day: 2, top: 39, height: 38, time: "12:00~13:00", title: "일정있음" },
  { member: "joo", day: 3, top: 0, height: 38, time: "13:00~14:00", title: "일정있음" },
  { member: "ham", day: 2, top: 0, height: 38, time: "11:00~12:00", title: "일정있음" },
];

const attendees = [
  { name: "신지 SHIN JI", role: "필수", team: "인터 AI검색설계 NAVER", initial: "신" },
  { name: "김서현 KIM SEOHYUN", role: "선택", team: "인터 AI검색설계 NAVER", initial: "김" },
  { name: "우희택 Woo Heetaek", role: "선택", team: "SL AI검색설계 NAVER", initial: "우" },
  { name: "은경수 EUN KYOUNGSU", role: "필수", team: "인터 AI검색설계 NAVER", initial: "은" },
];

const availabilityPeople = ["신지 SHIN JI", "김서현 KIM SEOHYUN", "은경수 EUN KYOUNGSU", "우희택 Woo Heetaek"];
const availabilityHours = ["0~", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
const freePattern = [
  ["free", "free", "selected", "selected", "free", "free", "free", "busy", "free", "free", "free", "free", "free", "free", "free", "free"],
  ["free", "free", "free", "free", "busy", "free", "free", "free", "free", "busy", "free", "free", "free", "free", "free", "free"],
  ["free", "free", "free", "free", "free", "free", "busy", "free", "free", "free", "free", "free", "free", "free", "free", "free"],
  ["free", "free", "busy", "free", "free", "free", "free", "free", "free", "busy", "free", "free", "free", "free", "free", "free"],
];

const recommendCandidateGroups = [
  {
    day: "6.29. (월)",
    candidates: [
      {
        time: "오후 01:00",
        range: "13:00-14:00",
        label: "추천",
        tone: "best",
        title: "깊은 논의에 가장 안정적인 후보",
        reason: "필수 참석자 2명과 회의실이 모두 가능하고, 점심 직후를 피합니다.",
        signals: ["필수 참석자 가능", "회의실 가능", "앞뒤 30분 여유"],
        tradeoff: "김서현은 직전 일정이 있지만 선택 참석이라 회의 목적은 유지됩니다.",
        allFree: true,
        alternates: ["오후 01:30", "오후 02:00", "오후 02:30"],
      },
      {
        time: "오후 03:30",
        range: "15:30-16:30",
        label: "빠른 확정",
        tone: "quick",
        title: "추가 확인 없이 바로 저장 가능",
        reason: "모든 참석자가 가능한 시간이고 남은 불확실성이 없습니다.",
        signals: ["모두 가능", "외근 신호 없음", "저녁 전 종료"],
        tradeoff: "회의 전 준비 시간이 짧아 사전 자료가 필요하면 약합니다.",
        allFree: true,
        alternates: ["오후 03:00", "오후 04:00", "오후 06:00"],
      },
    ],
  },
  {
    day: "7.1. (수)",
    candidates: [
      {
        time: "오전 10:30",
        range: "10:30-11:30",
        label: "집중 우선",
        tone: "focus",
        title: "오전 집중 흐름을 덜 끊는 후보",
        reason: "점심 직전 압박이 적고, 핵심 참석자의 앞뒤 일정 간격이 넓습니다.",
        signals: ["오전 시간대", "앞뒤 여유", "회의 전 준비 가능"],
        tradeoff: "우희택의 hold 일정이 있어 선택 참석 여부만 확인하면 됩니다.",
        allFree: false,
        alternates: ["오전 10:00", "오전 11:00", "오전 11:30"],
      },
      {
        time: "오후 02:30",
        range: "14:30-15:30",
        label: "대안",
        tone: "normal",
        title: "무난하지만 추천 근거는 약한 후보",
        reason: "필수 참석자는 가능하지만 점심 이후 일정이 이어집니다.",
        signals: ["필수 참석자 가능", "회의실 가능", "외근 신호 없음"],
        tradeoff: "김서현과 우희택 모두 앞뒤 회의가 붙어 있어 논의 밀도가 낮아질 수 있습니다.",
        allFree: false,
        alternates: ["오후 02:00", "오후 03:00", "오후 03:30"],
      },
    ],
  },
  {
    day: "7.2. (목)",
    candidates: [
      {
        time: "오전 11:00",
        range: "11:00-12:00",
        label: "확인 필요",
        tone: "check",
        title: "좋은 후보지만 한 명의 맥락 확인 필요",
        reason: "회의 목적에는 잘 맞지만 외근이 많은 요일 신호가 있습니다.",
        signals: ["필수 참석자 가능", "점심 직후 아님", "회의실 가능"],
        tradeoff: "은경수의 오전 외근 가능성만 확인하면 확정할 수 있습니다.",
        allFree: false,
        alternates: ["오전 10:30", "오전 11:30", "오후 12:00"],
      },
    ],
  },
];

const monthSchedule = {
  "1": ["오후 06:00 프로젝트 스킬 학습"],
  "3": ["제9회 전국동시지방선거"],
  "5": ["오후 03:00 프로젝트 안내"],
  "6": ["현충일"],
  "9": ["오후 06:00 비주얼 언어 레퍼런스"],
  "11": ["오전 11:00 주간 팀미팅"],
  "12": ["오후 05:30 프로젝트 스킬업", "오후 06:00 프로젝트 스킬 업"],
  "16": ["오전 09:00 제목 없음", "오전 10:00 제목 없음", "오후 04:00 제목 없음"],
  "17": ["오전 10:00 제목 없음"],
  "18": ["오전 11:00 주간 팀미팅", "오전 11:00 팀미팅"],
  "19": ["오후 05:00 작업 이력 리뷰"],
  "22": ["오후 05:00 디자인랭귀지 미팅"],
  "23": ["오전 11:00 주간 팀미팅"],
  "24": ["오후 01:00 iSX Play 6월 이벤트"],
  "25": ["오전 11:00 메타태그 수정/보완 사항 공유", "오후 04:00 Tech Class Gemini Enterprise"],
  "26": ["오전 11:30 ui collect 업무 설명", "오후 02:00 Tech Class Antigravity 기본", "오후 04:00 Tech Class Antigravity 심화"],
  "30": ["오전 11:00 주간 팀미팅"],
};

const rooms = [
  { group: "즐겨찾기", children: [] },
  { group: "[JP] 베이스캠프 도쿄", children: [] },
  {
    group: "[KR] 1784",
    floors: [
      { name: "9층", rooms: [] },
      { name: "10층", rooms: [{ name: "10F_A1", capacity: 6, disabled: true }, { name: "10F_A2", capacity: 6, disabled: true }, { name: "10F_B12", capacity: 6, disabled: true }] },
      { name: "11층", rooms: [{ name: "11F_A1", capacity: 6, disabled: true }, { name: "11F_A11 (ZOOM)", capacity: 12 }, { name: "11F_A2", capacity: 6, disabled: true }, { name: "11F_A3", capacity: 6, disabled: true }, { name: "11F_B12", capacity: 6, checked: true }, { name: "11F_Focus Room1", capacity: 1 }, { name: "11F_Focus Room2", capacity: 1 }] },
      { name: "15층", rooms: [{ name: "15F_A1", capacity: 6, disabled: true }, { name: "15F_A10", capacity: 6, disabled: true }, { name: "15F_A11", capacity: 12, disabled: true }] },
    ],
  },
];

let currentMode = "team-week";
let selectedRoomName = "11F_B12";
let recommendationExpanded = false;
let onlyFree = true;
let activeDetailAnchor = null;
let activeDetailData = null;

function renderMiniGrid() {
  miniGrid.innerHTML = "";
  ["일", "월", "화", "수", "목", "금", "토"].forEach((label, index) => {
    const cell = document.createElement("div");
    cell.className = `mini-week ${index === 0 ? "sunday" : ""}`;
    cell.textContent = label;
    miniGrid.append(cell);
  });
  monthDates.forEach((date, index) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = [
      "mini-cell",
      index % 7 === 0 ? "sunday" : "",
      date.outside ? "outside" : "",
      date.range ? "range" : "",
      date.primary ? "primary" : "",
      date.accent ? "accent" : "",
    ].filter(Boolean).join(" ");
    cell.textContent = date.value;
    cell.addEventListener("click", () => {
      showToast(`2026.06.${date.value} 기준으로 캘린더를 봅니다.`);
    });
    miniGrid.append(cell);
  });
}

function renderPickerGrid() {
  pickerGrid.innerHTML = "";
  ["일", "월", "화", "수", "목", "금", "토"].forEach((label, index) => {
    const cell = document.createElement("div");
    cell.className = `picker-week ${index === 0 ? "sunday" : ""}`;
    cell.textContent = label;
    pickerGrid.append(cell);
  });
  monthDates.forEach((date, index) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = [
      "picker-cell",
      index % 7 === 0 ? "sunday" : "",
      date.outside ? "outside" : "",
      date.primary ? "primary" : "",
    ].filter(Boolean).join(" ");
    cell.textContent = date.value;
    cell.addEventListener("click", () => {
      datepickerPopover.hidden = true;
      showToast(`6월 ${date.value}일로 날짜를 변경했습니다.`);
    });
    pickerGrid.append(cell);
  });
}

function splitEventText(text) {
  const match = text.match(/^((?:오전|오후)\s?\d{1,2}:\d{2})\s+(.+)$/);
  if (!match) return { time: "종일", title: text };
  return { time: match[1], title: match[2] };
}

function getMemberName(memberId) {
  return teamMembers.find((member) => member.id === memberId)?.name || "구성원";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseDateLabel(dateLabel) {
  const match = dateLabel.match(/^(\d{4})\.(\d{2})\.(\d{2}) \((.)\)$/);
  if (!match) return { full: dateLabel, short: dateLabel };
  const [, year, month, day, weekday] = match;
  return {
    full: `${year}. ${Number(month)}. ${Number(day)}. (${weekday})`,
    short: `${Number(month)}.${Number(day)}. (${weekday})`,
  };
}

function formatClock(value) {
  const [rawHour, minute] = value.split(":");
  const hour = Number(rawHour);
  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour <= 12 ? hour : hour - 12;
  return `${period} ${String(displayHour).padStart(2, "0")}:${minute}`;
}

function durationLabel(timeRange) {
  const [start, end] = timeRange.split("~");
  if (!start || !end) return "";
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  const minutes = endHour * 60 + endMinute - (startHour * 60 + startMinute);
  if (minutes <= 0) return "";
  if (minutes % 60 === 0) return `${minutes / 60}시간`;
  return `${Math.floor(minutes / 60)}시간 ${minutes % 60}분`;
}

function formatDateTime(dateLabel, timeRange) {
  const date = parseDateLabel(dateLabel);
  if (!timeRange.includes("~")) return `${date.full} ${timeRange}`;
  const [start, end] = timeRange.split("~");
  const duration = durationLabel(timeRange);
  return `${date.full} ${formatClock(start)} - ${formatClock(end)}${duration ? ` (${duration})` : ""}`;
}

function previewAttendeeLabel(attendeesValue, creator = "신지") {
  if (attendeesValue === "상세 비공개" || attendeesValue === "해당 없음") return attendeesValue;
  const names = attendeesValue.split(",").map((name) => name.trim()).filter(Boolean);
  if (names.length >= 2) return `${names[0]} 외 ${names.length - 1}명`;
  if (names.length === 1) return names[0];
  return `${creator} 외 5명`;
}

function getPersonalEventMeta(title) {
  const rules = [
    {
      keyword: "ui collect",
      location: "15F_A1",
      attendees: "신지, 김재엽",
      memo: "UI Collect 업무 범위와 산출물 기준을 맞추는 회의입니다.",
    },
    {
      keyword: "Antigravity 기본",
      owner: "Tech Class",
      location: "온라인",
      attendees: "신지",
      status: "참석 예정",
      memo: "Antigravity 기본 과정 수강 일정입니다.",
    },
    {
      keyword: "Antigravity 심화",
      owner: "Tech Class",
      location: "온라인",
      attendees: "신지",
      status: "참석 예정",
      memo: "Antigravity 심화 과정 수강 일정입니다.",
    },
    {
      keyword: "Gemini Enterprise",
      owner: "Tech Class",
      location: "온라인",
      attendees: "신지",
      status: "참석 예정",
      memo: "Gemini Enterprise 클래스 참여 일정입니다.",
    },
    {
      keyword: "메타태그",
      location: "15F_A1",
      attendees: "AI검색설계",
      memo: "메타태그 수정과 보완 사항을 공유하는 팀 일정입니다.",
    },
    {
      keyword: "주간 팀미팅",
      location: "회의실 미정",
      attendees: "AI검색설계",
      memo: "이번 주 진행 상황과 의사결정 안건을 맞추는 정기 회의입니다.",
    },
    {
      keyword: "디자인랭귀지",
      location: "15F_B12",
      attendees: "디자인 협업 그룹",
      memo: "화면 밀도와 컴포넌트 언어를 맞추는 디자인 리뷰입니다.",
    },
    {
      keyword: "iSX Play",
      location: "마니또 3층",
      attendees: "신지",
      memo: "사내 이벤트 참여 일정입니다.",
    },
    {
      keyword: "프로젝트",
      location: "온라인",
      attendees: "신지",
      memo: "프로젝트 관련 학습 및 공유 일정입니다.",
    },
    {
      keyword: "제목 없음",
      location: "없음",
      attendees: "신지",
      memo: "제목이 아직 정리되지 않은 개인 일정입니다.",
    },
    {
      keyword: "현충일",
      owner: "공휴일 캘린더",
      location: "없음",
      attendees: "해당 없음",
      status: "공휴일",
      memo: "대한민국 공휴일입니다.",
    },
    {
      keyword: "지방선거",
      owner: "공휴일 캘린더",
      location: "없음",
      attendees: "해당 없음",
      status: "공휴일",
      memo: "전국동시지방선거 일정입니다.",
    },
  ];
  return rules.find((rule) => title.includes(rule.keyword)) || {};
}

function buildTeamEventDetail(event) {
  const memberName = getMemberName(event.member);
  const isPrivate = event.title === "일정있음";
  const dateLabel = teamDateLabels[event.day];
  const attendeeText = isPrivate ? "상세 비공개" : "함다인, 황지수, 주혜신, 우희택, 신지, 은경수";
  return {
    title: event.title,
    calendar: "구성원 일정",
    dateLabel,
    timeRange: event.time,
    time: formatDateTime(dateLabel, event.time),
    repeat: isPrivate ? "반복 정보 비공개" : "매주 화요일, 무한 반복",
    owner: isPrivate ? memberName : "함다인 Ham Dain",
    creator: isPrivate ? memberName : "함다인",
    attendees: attendeeText,
    previewAttendees: previewAttendeeLabel(attendeeText, "함다인"),
    location: isPrivate ? "상세 비공개" : "회의실 미정",
    status: isPrivate ? "바쁨, 제목 비공개" : "참석 예정",
    notification: "10분 전 서비스 알림",
    url: isPrivate ? "" : "https://wiki.navercorp.com/spaces/SEARCHX/pages/5384445071/%EC%8B%B1%ED%81%AC+%EB%AF%B8%ED%8C%85",
    memo: isPrivate
      ? "다른 구성원의 일정은 바쁨 여부와 시간만 확인할 수 있습니다."
      : "주간 진행 상황과 다음 액션을 정리하는 팀 회의입니다.",
    canRespond: !isPrivate,
    modified: "함다인 (2026. 6. 11. 오후 01:35)",
    created: "함다인 (2026. 6. 2. 오후 02:14)",
  };
}

function buildPersonalEventDetail(text, dateLabel) {
  const parsed = splitEventText(text);
  const meta = getPersonalEventMeta(parsed.title);
  const attendeeText = meta.attendees || "신지";
  return {
    title: parsed.title,
    calendar: meta.owner === "공휴일 캘린더" ? "공휴일" : "[기본] 신지",
    dateLabel,
    timeRange: parsed.time,
    time: `${parseDateLabel(dateLabel).full} ${parsed.time}`,
    repeat: "반복 안 함",
    owner: meta.owner || "신지",
    creator: meta.owner || "신지",
    attendees: attendeeText,
    previewAttendees: previewAttendeeLabel(attendeeText, meta.owner || "신지"),
    location: meta.location || "없음",
    status: meta.status || "바쁨",
    notification: meta.status === "공휴일" ? "알림 없음" : "10분 전 서비스 알림",
    url: parsed.title.includes("ui collect") ? "https://wiki.navercorp.com/spaces/SEARCHX/pages/ui-collect" : "",
    memo: meta.memo || "로컬 프로토타입에 등록된 일정입니다.",
    canRespond: false,
    modified: "신지 (2026. 6. 26. 오후 01:35)",
    created: "신지 (2026. 6. 2. 오후 02:14)",
  };
}

function monthDateLabel(day) {
  const dayNumber = String(day).padStart(2, "0");
  const date = new Date(`2026-06-${dayNumber}T00:00:00`);
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `2026.06.${dayNumber} (${weekdays[date.getDay()]})`;
}

function positionEventDetail(anchor) {
  if (window.innerWidth <= 760) {
    eventDetail.style.removeProperty("left");
    eventDetail.style.removeProperty("top");
    eventDetail.style.removeProperty("width");
    return;
  }

  const margin = 12;
  const width = Math.min(488, window.innerWidth - margin * 2);
  const anchorRect = anchor.getBoundingClientRect();
  eventDetail.style.width = `${width}px`;

  let left = anchorRect.right + margin;
  if (left + width > window.innerWidth - margin) left = anchorRect.left - width - margin;
  if (left < margin) left = window.innerWidth - width - margin;

  let top = anchorRect.top;
  const height = eventDetail.offsetHeight;
  if (top + height > window.innerHeight - margin) top = Math.max(margin, window.innerHeight - height - margin);

  eventDetail.style.left = `${left}px`;
  eventDetail.style.top = `${top}px`;
}

function rowIcon(path) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;
}

function renderPreviewDetail(detail) {
  const responseActions = detail.canRespond
    ? `
      <button class="response-button primary" type="button" data-response-action="수락">수락</button>
      <button class="response-button" type="button" data-response-action="미정">미정</button>
      <button class="response-button" type="button" data-response-action="거절">거절</button>
    `
    : "";
  const urlRow = detail.url
    ? `
      <li>
        ${rowIcon("M5 4h14v16H5zM8 8h8M8 12h8M8 16h5")}
        <a href="${escapeHtml(detail.url)}" target="_blank" rel="noreferrer">${escapeHtml(detail.url)}</a>
      </li>
    `
    : "";

  eventDetail.innerHTML = `
    <div class="event-preview-tools">
      <button type="button" aria-label="일정 수정">${rowIcon("M4 20h4l10.5-10.5a2.8 2.8 0 0 0-4-4L4 16v4Z")}</button>
      <button type="button" aria-label="일정 삭제">${rowIcon("M5 7h14M10 11v6M14 11v6M8 7l1-3h6l1 3M7 7l1 14h8l1-14")}</button>
      <button type="button" aria-label="더보기">${rowIcon("M12 6v.1M12 12v.1M12 18v.1")}</button>
      <button type="button" aria-label="일정 상세 닫기" data-close-event-detail>${rowIcon("M6 6l12 12M18 6 6 18")}</button>
    </div>
    <h2 id="eventDetailTitle">${escapeHtml(detail.title)}</h2>
    <ul class="event-preview-list">
      <li>${rowIcon("M12 7v5l3 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z")}<span>${escapeHtml(detail.time)}</span></li>
      <li>${rowIcon("M17 2v5M7 2v5M4 11h16M5 5h14v16H5z")}<span>${escapeHtml(detail.repeat)}</span></li>
      <li>${rowIcon("M5 5h14v14H5zM8 9h8M8 13h5")}<span>${escapeHtml(detail.calendar)}</span></li>
      ${urlRow}
      <li>${rowIcon("M18 9a6 6 0 0 0-12 0c0 7-3 6-3 8h18c0-2-3-1-3-8M10 20h4")}<span>${escapeHtml(detail.notification)}</span></li>
      <li>${rowIcon("M16 19c0-2-1.8-3.5-4-3.5S8 17 8 19M8.5 9a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0ZM20 19c0-1.6-1.2-2.8-3-3.2M4 19c0-1.6 1.2-2.8 3-3.2")}<span>${escapeHtml(detail.previewAttendees)} <b>${escapeHtml(detail.creator ? `(생성자: ${detail.creator})` : "")}</b></span></li>
    </ul>
    <div class="event-preview-actions">
      ${responseActions}
      <button class="detail-link-button" type="button" data-open-full-detail>상세정보</button>
    </div>
  `;
  eventDetail.querySelector("[data-close-event-detail]").addEventListener("click", closeEventDetail);
  eventDetail.querySelector("[data-open-full-detail]").addEventListener("click", () => openFullDetail(detail));
  eventDetail.querySelectorAll("[data-response-action]").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.responseAction} 상태로 표시했습니다.`));
  });
}

function openEventDetail(detail, anchor) {
  activeDetailAnchor = anchor;
  activeDetailData = detail;
  renderPreviewDetail(detail);
  eventDetail.hidden = false;
  positionEventDetail(anchor);
}

function closeEventDetail() {
  eventDetail.hidden = true;
  activeDetailAnchor = null;
}

function attendeeRows(detail) {
  if (detail.attendees === "상세 비공개" || detail.attendees === "해당 없음") {
    return `<p class="detail-muted">${escapeHtml(detail.attendees)}</p>`;
  }
  const names = detail.attendees.split(",").map((name) => name.trim()).filter(Boolean);
  return `
    <div class="detail-attendee-grid">
      ${names.map((name, index) => `
        <div class="detail-attendee">
          <span class="required-pill">필수</span>
          <span class="attendee-small-avatar">${escapeHtml(name.slice(0, 1))}</span>
          <strong>${escapeHtml(name)}</strong>
          <i>✓</i>
        </div>
      `).join("")}
    </div>
    <p class="detail-attendee-summary">전체 ${names.length}명&nbsp;&nbsp; 수락 ${Math.max(names.length - 1, 0)}, 미정 0, 거절 0, 대기 0 &nbsp; <button type="button">메시지</button> <button type="button">메일</button></p>
  `;
}

function detailAvailabilityHtml(detail) {
  const names = detail.attendees === "상세 비공개"
    ? [detail.owner]
    : detail.attendees.split(",").map((name) => name.trim()).filter(Boolean).slice(0, 6);
  const hours = ["0~", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
  const rows = names.map((name, rowIndex) => {
    const cells = hours.slice(1).map((hour, index) => {
      const selected = index === 3;
      const busy = (rowIndex + index) % 7 === 0;
      return `<span class="${selected ? "selected" : busy ? "busy" : "free"}">${escapeHtml(hour)}</span>`;
    }).join("");
    return `<div class="detail-avail-person">${escapeHtml(name)}</div>${cells}`;
  }).join("");
  return `
    <div class="detail-availability-head">
      <button type="button" aria-label="이전 날짜">‹</button>
      <button type="button" aria-label="다음 날짜">›</button>
      <strong>${escapeHtml(parseDateLabel(detail.dateLabel).full)}</strong>
      <span class="refresh-dot"></span>
    </div>
    <div class="detail-legend">
      <span><i class="selected"></i>설정시간</span>
      <span><i class="recommend"></i>추천시간</span>
      <span><i class="busy"></i>일정있음</span>
      <button type="button" aria-label="닫기">×</button>
    </div>
    <div class="detail-availability-grid" style="--detail-rows:${names.length}">
      <div class="detail-avail-corner"></div>
      ${hours.slice(1).map((hour) => `<div class="detail-avail-hour">${escapeHtml(hour)}</div>`).join("")}
      ${rows}
    </div>
    <ul class="availability-help detail-help">
      <li>일정있음 영역에 마우스를 올리면 일정 제목이 노출됩니다.</li>
      <li>약속 참석자가 100명이 넘을 경우 설비의 빈 시간만 확인할 수 있습니다.</li>
    </ul>
  `;
}

function renderFullDetail(detail) {
  detailContent.innerHTML = `
    <div class="detail-response-row">
      ${detail.canRespond ? `
        <button class="response-button primary" type="button">수락</button>
        <button class="response-button" type="button">미정</button>
        <button class="response-button" type="button">거절</button>
      ` : ""}
    </div>
    <h1>${escapeHtml(detail.title)}</h1>
    <dl class="full-detail-list">
      <div><dt>${rowIcon("M12 7v5l3 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z")}</dt><dd>${escapeHtml(detail.time)}</dd></div>
      <div><dt>${rowIcon("M17 2v5M7 2v5M4 11h16M5 5h14v16H5z")}</dt><dd>${escapeHtml(detail.repeat)}</dd></div>
      <div><dt>${rowIcon("M5 5h14v14H5zM8 9h8M8 13h5")}</dt><dd><span class="calendar-chip"></span>${escapeHtml(detail.calendar)}</dd></div>
    </dl>
    <section class="full-detail-section">${attendeeRows(detail)}</section>
    ${detail.url ? `<section class="full-detail-section link-section">${rowIcon("M5 4h14v16H5zM8 8h8M8 12h8M8 16h5")}<a href="${escapeHtml(detail.url)}" target="_blank" rel="noreferrer">${escapeHtml(detail.url)}</a></section>` : ""}
    <section class="full-detail-section">
      <div class="full-detail-setting">${rowIcon("M18 9a6 6 0 0 0-12 0c0 7-3 6-3 8h18c0-2-3-1-3-8M10 20h4")}<span>${escapeHtml(detail.notification)}</span></div>
      <div class="full-detail-setting">${rowIcon("M7 3h10M9 3v5l-4 7a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-4-7V3")}<span>${escapeHtml(detail.status)}</span></div>
    </section>
    <section class="detail-meta">
      <p>최근 수정 : ${escapeHtml(detail.modified)}</p>
      <p>생성자 : ${escapeHtml(detail.created)}</p>
    </section>
    <button class="cancel-button detail-bottom-close" type="button" data-close-full-detail>닫기</button>
  `;
  detailAvailability.innerHTML = detailAvailabilityHtml(detail);
  detailContent.querySelector("[data-close-full-detail]").addEventListener("click", () => setScreen("calendar"));
}

function openFullDetail(detail = activeDetailData) {
  if (!detail) return;
  activeDetailData = detail;
  closeEventDetail();
  renderFullDetail(detail);
  setScreen("detail");
}

function wireEventDetailButton(button, detail) {
  button.dataset.eventDetailTrigger = "true";
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-label", `${detail.title} 상세 보기`);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openEventDetail(detail, button);
  });
}

function renderTeamWeekGrid() {
  teamWeekGrid.innerHTML = "";
  const head = document.createElement("div");
  head.className = "team-header";
  head.textContent = "구성원";
  teamWeekGrid.append(head);

  teamDays.forEach((day) => {
    const cell = document.createElement("div");
    cell.className = ["team-day-head", day.sunday ? "sunday" : "", day.current ? "current" : ""].filter(Boolean).join(" ");
    cell.innerHTML = day.current ? `<span>29</span>&nbsp;월` : day.label;
    teamWeekGrid.append(cell);
  });

  teamMembers.forEach((member) => {
    const person = document.createElement("div");
    person.className = "member-cell";
    person.style.setProperty("--row-height", `${member.height}px`);
    person.innerHTML = `
      <span class="member-select" aria-hidden="true"></span>
      <span class="avatar-face" style="--avatar-a:${member.colors[0]};--avatar-b:${member.colors[1]}">${member.initial}</span>
      <span class="member-name">${member.name}</span>
      <span class="member-team">${member.team}</span>
      <button class="monthly-link" type="button">월간 일정</button>
    `;
    teamWeekGrid.append(person);

    teamDays.forEach((_, dayIndex) => {
      const cell = document.createElement("div");
      cell.className = "week-cell";
      cell.style.setProperty("--row-height", `${member.height}px`);
      teamEvents
        .filter((event) => event.member === member.id && event.day === dayIndex)
        .forEach((event) => cell.append(eventBlock(event)));
      teamWeekGrid.append(cell);
    });
  });
}

function eventBlock(event) {
  const detail = buildTeamEventDetail(event);
  const block = document.createElement("button");
  block.type = "button";
  block.className = `event-pill ${event.own ? "own" : ""} ${event.narrow ? "narrow" : ""}`;
  block.style.top = `${event.top}px`;
  block.style.height = `${event.height}px`;
  block.innerHTML = `<strong>${event.time}</strong><span>${event.title}</span>`;
  wireEventDetailButton(block, detail);
  return block;
}

function renderPersonalDay() {
  personalDayGrid.innerHTML = `
    <div class="day-grid-head">
      <div class="time-zone-head">서울</div>
      <div class="day-date-head">26 금</div>
    </div>
    <div class="day-timeline">
      <div class="time-labels">${timeLabels()}</div>
      <div class="day-lane"></div>
    </div>
  `;
  const lane = personalDayGrid.querySelector(".day-lane");
  [
    { top: 150, height: 32, text: "오전 11:30 ui collect 업무 설명" },
    { top: 240, height: 86, text: "오후 02:00 [Tech Class] Antigravity 기본 과정 (온라인)" },
    { top: 327, height: 86, text: "오후 04:00 [Tech Class] Antigravity 심화 과정 (온라인)" },
  ].forEach((event) => {
    const detail = buildPersonalEventDetail(event.text, "2026.06.26 (금)");
    const node = document.createElement("button");
    node.type = "button";
    node.className = "day-event";
    node.style.top = `${event.top}px`;
    node.style.height = `${event.height}px`;
    node.textContent = event.text;
    wireEventDetailButton(node, detail);
    lane.append(node);
  });
}

function renderPersonalWeek() {
  const days = ["21 일", "22 월", "23 화", "24 수", "25 목", "26 금", "27 토"];
  personalWeekGrid.innerHTML = `<div class="week-time-head">서울</div>`;
  days.forEach((day) => {
    const head = document.createElement("div");
    head.className = "week-day-head";
    head.textContent = day;
    personalWeekGrid.append(head);
  });

  const timeCol = document.createElement("div");
  timeCol.className = "week-time-col";
  timeCol.innerHTML = timeLabels();
  personalWeekGrid.append(timeCol);

  const weeklyEvents = [
    { day: 1, top: 345, height: 42, text: "오후 05:00 디자인랭귀지 미팅" },
    { day: 2, top: 170, height: 42, text: "오전 11:00 주간 팀미팅" },
    { day: 3, top: 258, height: 42, text: "오후 01:00 iSX Play 6월 이벤트" },
    { day: 4, top: 170, height: 42, text: "오전 11:00 메타태그 수정/보완 사항 공유" },
    { day: 4, top: 302, height: 42, text: "오후 04:00 Tech Class Gemini Enterprise" },
    { day: 5, top: 190, height: 28, text: "오전 11:30 ui collect 업무 설명" },
    { day: 5, top: 260, height: 86, text: "오후 02:00 Tech Class Antigravity 기본 과정" },
    { day: 5, top: 347, height: 86, text: "오후 04:00 Tech Class Antigravity 심화 과정" },
  ];
  days.forEach((_, dayIndex) => {
    const col = document.createElement("div");
    col.className = "week-day-col";
    weeklyEvents
      .filter((event) => event.day === dayIndex)
      .forEach((event) => {
        const detail = buildPersonalEventDetail(event.text, personalWeekDateLabels[event.day]);
        const node = document.createElement("button");
        node.type = "button";
        node.className = "week-event";
        node.style.top = `${event.top}px`;
        node.style.height = `${event.height}px`;
        node.textContent = event.text;
        wireEventDetailButton(node, detail);
        col.append(node);
      });
    personalWeekGrid.append(col);
  });
}

function timeLabels() {
  const labels = ["오전 8시", "9시", "10시", "11시", "오후 12시", "1시", "2시", "3시", "4시", "오후 6시", "7시", "8시", "9시", "10시", "11시", "오전 12시"];
  return labels.map((label) => `<div class="time-label">${label}</div>`).join("");
}

function renderMonthView() {
  monthGridView.innerHTML = "";
  const monthCells = [
    ["31", "outside", []],
    ["1", "", monthSchedule["1"] || []],
    ["2", "", monthSchedule["2"] || []],
    ["3", "", monthSchedule["3"] || []],
    ["4", "", monthSchedule["4"] || []],
    ["5", "", monthSchedule["5"] || []],
    ["6", "saturday", monthSchedule["6"] || []],
    ["7", "sunday", monthSchedule["7"] || []],
    ["8", "", monthSchedule["8"] || []],
    ["9", "", monthSchedule["9"] || []],
    ["10", "", monthSchedule["10"] || []],
    ["11", "", monthSchedule["11"] || []],
    ["12", "", monthSchedule["12"] || []],
    ["13", "", monthSchedule["13"] || []],
    ["14", "sunday", monthSchedule["14"] || []],
    ["15", "", monthSchedule["15"] || []],
    ["16", "", monthSchedule["16"] || []],
    ["17", "", monthSchedule["17"] || []],
    ["18", "", monthSchedule["18"] || []],
    ["19", "", monthSchedule["19"] || []],
    ["20", "", monthSchedule["20"] || []],
    ["21", "sunday", monthSchedule["21"] || []],
    ["22", "", monthSchedule["22"] || []],
    ["23", "", monthSchedule["23"] || []],
    ["24", "", monthSchedule["24"] || []],
    ["25", "", monthSchedule["25"] || []],
    ["26", "", monthSchedule["26"] || []],
    ["27", "", monthSchedule["27"] || []],
    ["28", "sunday", monthSchedule["28"] || []],
    ["29", "", monthSchedule["29"] || []],
    ["30", "", monthSchedule["30"] || []],
    ["1", "outside", []],
    ["2", "outside", []],
    ["3", "outside", []],
    ["4", "outside", []],
  ];
  monthCells.forEach(([day, cls, schedules]) => {
    const cell = document.createElement("div");
    cell.className = `month-cell ${cls}`;
    const date = document.createElement("strong");
    date.textContent = day;
    cell.append(date);
    schedules.forEach((item) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "month-chip";
      chip.textContent = item;
      wireEventDetailButton(chip, buildPersonalEventDetail(item, monthDateLabel(day)));
      cell.append(chip);
    });
    monthGridView.append(cell);
  });
}

function renderAttendees() {
  attendeeBox.innerHTML = "";
  attendees.forEach((attendee) => {
    const card = document.createElement("div");
    card.className = "attendee-card";
    card.innerHTML = `
      <span class="${attendee.role === "필수" ? "required-pill" : "optional-pill"}">${attendee.role}</span>
      <span class="attendee-small-avatar">${attendee.initial}</span>
      <span class="attendee-copy"><strong>${attendee.name}</strong><span>${attendee.team}</span></span>
      <button class="remove-button" type="button" aria-label="${attendee.name} 삭제">×</button>
    `;
    attendeeBox.append(card);
  });
}

function renderAvailabilityGrid() {
  availabilityGrid.innerHTML = "";
  const blank = document.createElement("div");
  blank.className = "availability-cell head";
  blank.textContent = "0~";
  availabilityGrid.append(blank);
  availabilityHours.slice(1).forEach((hour) => {
    const head = document.createElement("div");
    head.className = "availability-cell head";
    head.textContent = hour;
    availabilityGrid.append(head);
  });
  availabilityPeople.forEach((person, rowIndex) => {
    const personCell = document.createElement("div");
    personCell.className = "availability-cell person";
    personCell.textContent = person;
    availabilityGrid.append(personCell);
    freePattern[rowIndex].forEach((state, colIndex) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = `availability-cell ${state}`;
      cell.setAttribute("aria-label", `${person} ${availabilityHours[colIndex + 1]}시 ${state}`);
      cell.addEventListener("click", () => showToast(`${availabilityHours[colIndex + 1]}시 기준으로 시간을 조정했습니다.`));
      availabilityGrid.append(cell);
    });
  });
}

function renderRecommendations() {
  recommendList.innerHTML = "";
  let renderedCount = 0;
  recommendCandidateGroups.forEach((group) => {
    const candidates = group.candidates.filter((candidate) => !onlyFree || candidate.allFree);
    if (candidates.length === 0) return;

    const day = document.createElement("section");
    day.className = "recommend-day candidate-section";
    const cards = candidates.map((candidate, index) => {
      const signals = candidate.signals.map((signal) => `<li>${signal}</li>`).join("");
      const alternates = candidate.alternates.map((chip) => {
        return `<button class="time-chip alt-chip" type="button" data-time-chip="${chip}">${chip}</button>`;
      }).join("");
      return `
        <article class="candidate-card ${index === 0 && renderedCount === 0 ? "selected" : ""}">
          <div class="candidate-head">
            <span class="candidate-label ${candidate.tone}">${candidate.label}</span>
            <button class="candidate-time" type="button" data-time-chip="${candidate.time}">
              <strong>${candidate.time}</strong>
              <span>${candidate.range}</span>
            </button>
          </div>
          <div class="candidate-copy">
            <h4>${candidate.title}</h4>
            <p>${candidate.reason}</p>
          </div>
          <ul class="candidate-signals">${signals}</ul>
          <p class="candidate-tradeoff">${candidate.tradeoff}</p>
          <div class="candidate-actions">
            <button class="candidate-select" type="button" data-time-chip="${candidate.time}">이 시간으로 설정</button>
            <div class="candidate-alts" aria-label="가까운 대안 시간">${alternates}</div>
          </div>
        </article>
      `;
    }).join("");
    day.innerHTML = `<strong>${group.day}</strong><div class="candidate-card-list">${cards}</div>`;
    renderedCount += candidates.length;
    recommendList.append(day);
  });

  if (renderedCount === 0) {
    recommendList.innerHTML = `
      <section class="recommend-empty compact">
        <p>모두 가능한 후보만으로는 조건을 만족하는 시간이 없습니다.</p>
        <button type="button" data-relax-recommend>확인 필요 후보까지 보기</button>
      </section>
    `;
    recommendList.querySelector("[data-relax-recommend]").addEventListener("click", () => {
      onlyFree = false;
      document.querySelector("[data-only-free]").checked = false;
      renderRecommendations();
    });
    return;
  }

  recommendList.querySelectorAll("[data-time-chip]").forEach((chip) => {
    chip.addEventListener("click", (event) => {
      const time = event.currentTarget.dataset.timeChip;
      showToast(`${time} 후보 시간을 선택했습니다.`);
      document.querySelector("[data-time-start]").textContent = time;
      recommendList.querySelectorAll(".candidate-card").forEach((card) => card.classList.remove("selected"));
      event.currentTarget.closest(".candidate-card")?.classList.add("selected");
    });
  });
}

function renderRooms() {
  roomTree.innerHTML = "";
  rooms.forEach((group) => {
    const groupNode = document.createElement("div");
    groupNode.className = "room-group";
    groupNode.innerHTML = `<div class="room-group-title">› ${group.group}</div>`;
    if (group.floors) {
      group.floors.forEach((floor) => {
        const floorTitle = document.createElement("div");
        floorTitle.className = "room-group-title";
        floorTitle.style.marginLeft = "22px";
        floorTitle.textContent = `› ${floor.name}`;
        groupNode.append(floorTitle);
        floor.rooms.forEach((room) => {
          const label = document.createElement("label");
          label.className = `room-row ${room.disabled ? "disabled" : ""}`;
          label.innerHTML = `
            <input type="checkbox" ${room.disabled ? "disabled" : ""} ${room.checked || room.name === selectedRoomName ? "checked" : ""}>
            <span class="room-icon"></span>
            <span class="room-copy"><strong>${room.name}</strong></span>
            <span class="room-capacity">${room.capacity}</span>
          `;
          label.querySelector("input").addEventListener("change", (event) => {
            if (event.target.checked) {
              selectedRoomName = room.name;
              renderSelectedRoom();
              renderRooms();
            }
          });
          groupNode.append(label);
        });
      });
    }
    roomTree.append(groupNode);
  });
}

function renderSelectedRoom() {
  selectedRoom.innerHTML = selectedRoomName
    ? `<span>${selectedRoomName}<button type="button" aria-label="선택 회의실 삭제">×</button></span>`
    : "";
  const remove = selectedRoom.querySelector("button");
  if (remove) {
    remove.addEventListener("click", () => {
      selectedRoomName = "";
      renderSelectedRoom();
      renderRooms();
    });
  }
}

function setScreen(screen) {
  shell.dataset.screen = screen;
  calendarScreen.classList.toggle("active", screen === "calendar");
  composeScreen.classList.toggle("active", screen === "compose");
  detailScreen.classList.toggle("active", screen === "detail");
  datepickerPopover.hidden = true;
  if (screen !== "detail") closeEventDetail();
}

function setCalendarMode(mode) {
  currentMode = mode;
  closeEventDetail();
  const isPersonal = mode.startsWith("personal");
  shell.classList.toggle("personal-mode", isPersonal);
  teamWeekGrid.hidden = mode !== "team-week";
  personalDayGrid.hidden = mode !== "personal-day";
  personalWeekGrid.hidden = mode !== "personal-week";
  monthGridView.hidden = mode !== "personal-month";
  teamFilter.hidden = mode !== "team-week";
  topSearch.hidden = !isPersonal;
  calendarTitle.textContent = {
    "team-week": "06.28-07.04",
    "team-day": "2026.06.26",
    "personal-day": "2026.06.26",
    "personal-week": "06.21-06.27",
    "personal-month": "2026.06",
    "personal-list": "목록",
  }[mode] || "06.28-07.04";
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === mode || (mode === "team-week" && button.dataset.view === "team-week"));
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

document.querySelectorAll("[data-open-compose]").forEach((button) => {
  button.addEventListener("click", () => setScreen("compose"));
});

document.querySelectorAll("[data-back-calendar]").forEach((button) => {
  button.addEventListener("click", () => setScreen("calendar"));
});

document.querySelector("[data-save-event]").addEventListener("click", () => {
  showToast("로컬 프로토타입에서 저장 흐름을 확인했습니다.");
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.view === "personal-week" ? "personal-week" : button.dataset.view;
    setCalendarMode(mode);
    setScreen("calendar");
  });
});

document.querySelectorAll("[data-personal-view] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-personal-view] button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const map = {
      day: "personal-day",
      week: "personal-week",
      month: "personal-month",
      list: "personal-week",
    };
    setCalendarMode(map[button.dataset.viewMode] || "personal-week");
  });
});

document.querySelectorAll("[data-team-view] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-team-view] button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    setCalendarMode(button.dataset.teamMode === "day" ? "team-week" : "team-week");
  });
});

document.querySelector("[data-datepicker]").addEventListener("click", () => {
  datepickerPopover.hidden = !datepickerPopover.hidden;
});

document.querySelectorAll("[data-avail-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-avail-tab]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const isRecommend = button.dataset.availTab === "recommend";
    emptyTimeView.hidden = isRecommend;
    recommendTimeView.hidden = !isRecommend;
  });
});

document.querySelector("[data-show-recommend]").addEventListener("click", () => {
  recommendationExpanded = true;
  recommendEmpty.hidden = true;
  recommendList.hidden = false;
  renderRecommendations();
});

document.querySelector("[data-only-free]").addEventListener("change", (event) => {
  onlyFree = event.target.checked;
  if (recommendationExpanded) renderRecommendations();
});

document.querySelector("[data-open-room]").addEventListener("click", () => {
  roomModal.hidden = false;
  renderRooms();
  renderSelectedRoom();
});

document.querySelectorAll("[data-close-room]").forEach((button) => {
  button.addEventListener("click", () => {
    roomModal.hidden = true;
    if (selectedRoomName) showToast(`${selectedRoomName} 회의실을 선택했습니다.`);
  });
});

roomModal.addEventListener("click", (event) => {
  if (event.target === roomModal) roomModal.hidden = true;
});

document.addEventListener("click", (event) => {
  if (eventDetail.hidden) return;
  if (eventDetail.contains(event.target)) return;
  if (event.target.closest("[data-event-detail-trigger]")) return;
  closeEventDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    roomModal.hidden = true;
    datepickerPopover.hidden = true;
    closeEventDetail();
  }
});

window.addEventListener("resize", () => {
  if (!eventDetail.hidden && activeDetailAnchor) positionEventDetail(activeDetailAnchor);
});

renderMiniGrid();
renderPickerGrid();
renderTeamWeekGrid();
renderPersonalDay();
renderPersonalWeek();
renderMonthView();
renderAttendees();
renderAvailabilityGrid();
renderRecommendations();
renderRooms();
renderSelectedRoom();
setCalendarMode("team-week");
