const shell = document.querySelector(".app-shell");
const calendarScreen = document.querySelector("#calendarScreen");
const composeScreen = document.querySelector("#composeScreen");
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
  const block = document.createElement("button");
  block.type = "button";
  block.className = `event-pill ${event.own ? "own" : ""} ${event.narrow ? "narrow" : ""}`;
  block.style.top = `${event.top}px`;
  block.style.height = `${event.height}px`;
  block.innerHTML = `<strong>${event.time}</strong><span>${event.title}</span>`;
  block.addEventListener("click", () => showToast(`${event.time} ${event.title}`));
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
    const node = document.createElement("button");
    node.type = "button";
    node.className = "day-event";
    node.style.top = `${event.top}px`;
    node.style.height = `${event.height}px`;
    node.textContent = event.text;
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
        const node = document.createElement("button");
        node.type = "button";
        node.className = "week-event";
        node.style.top = `${event.top}px`;
        node.style.height = `${event.height}px`;
        node.textContent = event.text;
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
    cell.innerHTML = `<strong>${day}</strong>${schedules.map((item) => `<span class="month-chip">${item}</span>`).join("")}`;
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
  datepickerPopover.hidden = true;
}

function setCalendarMode(mode) {
  currentMode = mode;
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    roomModal.hidden = true;
    datepickerPopover.hidden = true;
  }
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
