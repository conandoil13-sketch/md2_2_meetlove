const meetings = [
  {
    id: 1,
    title: "연세대 경영 남 3:3, 텐션 좋은 저녁 미팅",
    school: "연세대",
    hostLine: "연세대 경영 남자 3:3",
    gender: "남자",
    teamSize: "3:3",
    category: "인문계",
    desired: "인문계 / 예체능계",
    description:
      "주최자 포함 전원 분위기 좋고 대화 잘 이어가는 편이에요. 시험 끝난 주에 성수나 한강 쪽에서 가볍게 만나고 싶습니다.",
    host: {
      name: "민준",
      major: "경영학과",
      school: "연세대",
      rating: "S",
      reviews: 18,
      proofs: 7,
      initials: "MJ",
      bio: "미팅 후기도 꼼꼼히 남기고 일정 조율이 빠른 주최자",
      reviewList: [
        "분위기 진짜 편했고 주최자가 일정 조율을 깔끔하게 해줬어요.",
        "후기랑 인증이 많아서 안심됐고 실제로도 매너 좋았습니다."
      ],
      proofList: ["성수 3:3 미팅 인증", "한강 2:2 미팅 인증", "건대 4:4 미팅 인증"]
    }
  },
  {
    id: 2,
    title: "이대 심리 여 2:2, 대화 위주 선호",
    school: "이화여대",
    hostLine: "이화여대 심리 여자 2:2",
    gender: "여자",
    teamSize: "2:2",
    category: "인문계",
    desired: "자연계",
    description:
      "너무 시끄러운 곳보다는 대화 잘 되는 와인바나 조용한 펍을 선호해요. 서로 예의 있고 편하게 이야기 나눌 팀이면 좋아요.",
    host: {
      name: "서연",
      major: "심리학과",
      school: "이화여대",
      rating: "A",
      reviews: 11,
      proofs: 4,
      initials: "SY",
      bio: "후기 점수가 높고 노쇼 없는 안정형 주최자",
      reviewList: [
        "사진과 분위기가 비슷했고 미팅 진행이 자연스러웠어요.",
        "응답이 빨라서 일정 잡기 수월했습니다."
      ],
      proofList: ["연남 2:2 인증", "합정 2:2 인증"]
    }
  },
  {
    id: 3,
    title: "홍익대 디자인 혼합 4:4, 유쾌한 분위기",
    school: "홍익대",
    hostLine: "홍익대 디자인 혼합 4:4",
    gender: "혼합",
    teamSize: "4:4",
    category: "예체능계",
    desired: "인문계 / 자연계",
    description:
      "친구처럼 편하게 놀 수 있는 팀을 찾고 있어요. 1차는 식사, 2차는 보드게임이나 펍 느낌이면 좋겠습니다.",
    host: {
      name: "하람",
      major: "디자인학부",
      school: "홍익대",
      rating: "B",
      reviews: 6,
      proofs: 2,
      initials: "HR",
      bio: "텐션 높은 자리 세팅에 강한 에너지형 주최자",
      reviewList: ["대화 주제 잘 던져줘서 어색하지 않았어요."],
      proofList: ["상수 4:4 인증"]
    }
  },
  {
    id: 4,
    title: "고려대 통계 여 3:3, 밝은 텐션 선호",
    school: "고려대",
    hostLine: "고려대 통계 여자 3:3",
    gender: "여자",
    teamSize: "3:3",
    category: "자연계",
    desired: "인문계 / 자연계",
    description:
      "처음부터 너무 과한 자리보다 자연스럽게 웃고 떠들 수 있는 팀이면 좋아요. 안암이나 성수에서 보기 편한 팀 찾고 있어요.",
    host: {
      name: "지우",
      major: "통계학과",
      school: "고려대",
      rating: "S",
      reviews: 15,
      proofs: 6,
      initials: "JW",
      bio: "응답 빠르고 후기 만족도가 높은 상위 주최자",
      reviewList: [
        "장소 픽이 좋아서 어색하지 않게 만났어요.",
        "매칭 전에 분위기 설명을 잘 해줘서 편했습니다."
      ],
      proofList: ["성수 3:3 인증", "혜화 3:3 인증"]
    }
  },
  {
    id: 5,
    title: "서울대 경제 남 2:2, 차분한 대화형",
    school: "서울대",
    hostLine: "서울대 경제 남자 2:2",
    gender: "남자",
    teamSize: "2:2",
    category: "인문계",
    desired: "인문계",
    description:
      "시끄러운 분위기보다 서로 알아가는 자리를 선호해요. 샤로나 강남 쪽에서 식사 위주로 만나면 좋겠습니다.",
    host: {
      name: "도윤",
      major: "경제학부",
      school: "서울대",
      rating: "A",
      reviews: 9,
      proofs: 4,
      initials: "DY",
      bio: "차분한 대화형 자리 운영이 강점인 주최자",
      reviewList: ["부담 없이 이야기하기 좋았고 일정 조율이 깔끔했어요."],
      proofList: ["강남 2:2 인증", "샤로수길 2:2 인증"]
    }
  },
  {
    id: 6,
    title: "성균관대 반도체 남 3:3, 깔끔한 분위기",
    school: "성균관대",
    hostLine: "성균관대 반도체 남자 3:3",
    gender: "남자",
    teamSize: "3:3",
    category: "자연계",
    desired: "인문계 / 자연계",
    description:
      "전반적으로 매너 좋고 대화 밸런스 잘 맞는 팀이에요. 혜화나 종로에서 적당히 캐주얼한 자리 원합니다.",
    host: {
      name: "현우",
      major: "반도체시스템공학과",
      school: "성균관대",
      rating: "A",
      reviews: 8,
      proofs: 3,
      initials: "HW",
      bio: "노쇼 없이 안정적으로 미팅을 여는 타입",
      reviewList: ["분위기 편했고 사진이랑 느낌이 비슷했어요."],
      proofList: ["혜화 3:3 인증"]
    }
  },
  {
    id: 7,
    title: "서강대 영문 여 2:2, 센스 있는 팀 찾는 중",
    school: "서강대",
    hostLine: "서강대 영문 여자 2:2",
    gender: "여자",
    teamSize: "2:2",
    category: "인문계",
    desired: "인문계 / 예체능계",
    description:
      "너무 무겁지 않고 대화 잘 이어지는 팀이면 좋아요. 합정이나 상수 쪽 감도 있는 공간 선호합니다.",
    host: {
      name: "수빈",
      major: "영문학과",
      school: "서강대",
      rating: "A",
      reviews: 10,
      proofs: 5,
      initials: "SB",
      bio: "공간 취향과 분위기 연출이 좋은 주최자",
      reviewList: ["장소랑 분위기 모두 만족스러웠어요."],
      proofList: ["합정 2:2 인증", "상수 2:2 인증"]
    }
  },
  {
    id: 8,
    title: "한양대 기계 혼합 4:4, 편한 단체 미팅",
    school: "한양대",
    hostLine: "한양대 기계 혼합 4:4",
    gender: "혼합",
    teamSize: "4:4",
    category: "자연계",
    desired: "인문계 / 자연계 / 예체능계",
    description:
      "어색함 덜한 단체 미팅을 원해서 게임이나 가벼운 액티비티도 열어둘 생각이에요. 왕십리 근처 선호합니다.",
    host: {
      name: "태윤",
      major: "기계공학부",
      school: "한양대",
      rating: "B",
      reviews: 5,
      proofs: 2,
      initials: "TY",
      bio: "캐주얼하고 활동적인 자리 기획이 강점",
      reviewList: ["여럿이 만나서 오히려 덜 어색했어요."],
      proofList: ["왕십리 4:4 인증"]
    }
  },
  {
    id: 9,
    title: "경희대 호텔관광 여 3:3, 리액션 좋은 팀",
    school: "경희대",
    hostLine: "경희대 호텔관광 여자 3:3",
    gender: "여자",
    teamSize: "3:3",
    category: "인문계",
    desired: "인문계 / 자연계",
    description:
      "서로 배려 있으면서도 텐션은 좋은 팀을 찾고 있어요. 회기보단 성수나 건대 이동도 가능해요.",
    host: {
      name: "가은",
      major: "호텔관광학과",
      school: "경희대",
      rating: "B",
      reviews: 7,
      proofs: 3,
      initials: "GE",
      bio: "부드럽고 밝은 자리 분위기를 잘 만드는 주최자",
      reviewList: ["리액션이 좋아서 대화가 계속 이어졌어요."],
      proofList: ["건대 3:3 인증"]
    }
  },
  {
    id: 10,
    title: "외대 스페인어 남 2:2, 유쾌한 대화 가능",
    school: "한국외대",
    hostLine: "한국외대 스페인어 남자 2:2",
    gender: "남자",
    teamSize: "2:2",
    category: "인문계",
    desired: "인문계 / 예체능계",
    description:
      "말 재미있게 하는 편이고 텐션도 무난히 맞출 수 있어요. 외대나 성수 쪽에서 편하게 보면 좋겠습니다.",
    host: {
      name: "준호",
      major: "스페인어과",
      school: "한국외대",
      rating: "B",
      reviews: 4,
      proofs: 1,
      initials: "JH",
      bio: "첫인상보다 대화가 강점인 주최자",
      reviewList: ["말이 잘 통해서 분위기 괜찮았어요."],
      proofList: ["성수 2:2 인증"]
    }
  },
  {
    id: 11,
    title: "건국대 수의예 여 2:2, 안정감 있는 미팅",
    school: "건국대",
    hostLine: "건국대 수의예 여자 2:2",
    gender: "여자",
    teamSize: "2:2",
    category: "자연계",
    desired: "자연계 / 인문계",
    description:
      "너무 가볍기보다 편안하고 매너 있는 자리 선호해요. 건대입구 쪽에서 식사 후 카페 코스면 좋겠습니다.",
    host: {
      name: "예린",
      major: "수의예과",
      school: "건국대",
      rating: "A",
      reviews: 12,
      proofs: 5,
      initials: "YR",
      bio: "안정감 있고 후기 평점이 꾸준한 주최자",
      reviewList: ["조용한데 어색하지 않게 분위기 잘 풀어줬어요."],
      proofList: ["건대 2:2 인증", "성수 2:2 인증"]
    }
  },
  {
    id: 12,
    title: "동국대 연영 남 3:3, 에너지 좋은 팀",
    school: "동국대",
    hostLine: "동국대 연영 남자 3:3",
    gender: "남자",
    teamSize: "3:3",
    category: "예체능계",
    desired: "인문계 / 예체능계",
    description:
      "리액션 좋고 센스 있는 팀이면 재밌게 놀 수 있을 것 같아요. 을지로나 성수 쪽으로 열려 있습니다.",
    host: {
      name: "재민",
      major: "연극학부",
      school: "동국대",
      rating: "B",
      reviews: 6,
      proofs: 2,
      initials: "JM",
      bio: "에너지가 좋아서 초반 분위기를 잘 띄우는 편",
      reviewList: ["어색할 틈 없이 분위기 잘 이끌어줬어요."],
      proofList: ["을지로 3:3 인증"]
    }
  },
  {
    id: 13,
    title: "국민대 광고 여 3:3, 밸런스 좋은 자리",
    school: "국민대",
    hostLine: "국민대 광고 여자 3:3",
    gender: "여자",
    teamSize: "3:3",
    category: "인문계",
    desired: "인문계 / 자연계",
    description:
      "대화도 잘 되고 외모보다 분위기나 매너 보는 편이에요. 성수, 한남 쪽 모두 괜찮습니다.",
    host: {
      name: "나연",
      major: "광고홍보학과",
      school: "국민대",
      rating: "A",
      reviews: 8,
      proofs: 4,
      initials: "NY",
      bio: "조율이 빠르고 후기가 고른 주최자",
      reviewList: ["부담 없이 재밌게 만날 수 있었어요."],
      proofList: ["한남 3:3 인증"]
    }
  },
  {
    id: 14,
    title: "숭실대 컴공 남 2:2, 대화 잘 통하는 팀",
    school: "숭실대",
    hostLine: "숭실대 컴공 남자 2:2",
    gender: "남자",
    teamSize: "2:2",
    category: "자연계",
    desired: "인문계 / 자연계",
    description:
      "편하게 웃으면서 이야기할 팀을 찾고 있어요. 너무 과한 자리보다 깔끔한 식사 미팅 원합니다.",
    host: {
      name: "시우",
      major: "컴퓨터학부",
      school: "숭실대",
      rating: "B",
      reviews: 5,
      proofs: 2,
      initials: "SW",
      bio: "잔잔하지만 대화 흐름이 좋은 주최자",
      reviewList: ["차분한데 재미있어서 좋았어요."],
      proofList: ["상도 2:2 인증"]
    }
  },
  {
    id: 15,
    title: "세종대 무용 여 4:4, 화끈한 단체 미팅",
    school: "세종대",
    hostLine: "세종대 무용 여자 4:4",
    gender: "여자",
    teamSize: "4:4",
    category: "예체능계",
    desired: "인문계 / 예체능계",
    description:
      "텐션 좋고 에너지 있는 팀이랑 단체로 만나고 싶어요. 건대 쪽에서 재밌게 놀 수 있는 자리 선호합니다.",
    host: {
      name: "다인",
      major: "무용과",
      school: "세종대",
      rating: "B",
      reviews: 7,
      proofs: 3,
      initials: "DI",
      bio: "단체전에서 강한 분위기 메이커형 주최자",
      reviewList: ["4:4인데도 흐름이 끊기지 않았어요."],
      proofList: ["건대 4:4 인증"]
    }
  },
  {
    id: 16,
    title: "단국대 치대 남 3:3, 깔끔하고 매너 좋은 팀",
    school: "단국대",
    hostLine: "단국대 치대 남자 3:3",
    gender: "남자",
    teamSize: "3:3",
    category: "자연계",
    desired: "인문계 / 자연계",
    description:
      "너무 가볍지 않은 자리 선호하고, 서로 매너 있게 보면 좋겠어요. 강남이나 잠실 쪽도 괜찮습니다.",
    host: {
      name: "우진",
      major: "치의예과",
      school: "단국대",
      rating: "A",
      reviews: 9,
      proofs: 4,
      initials: "WJ",
      bio: "깔끔하고 신뢰감 있는 자리 운영이 장점",
      reviewList: ["응답 빠르고 전체적으로 안정적이었어요."],
      proofList: ["잠실 3:3 인증"]
    }
  },
  {
    id: 17,
    title: "성신여대 미디어 여 2:2, 편안한 분위기 선호",
    school: "성신여대",
    hostLine: "성신여대 미디어 여자 2:2",
    gender: "여자",
    teamSize: "2:2",
    category: "인문계",
    desired: "인문계 / 자연계",
    description:
      "편안하고 배려 있는 팀이면 좋겠어요. 성신여대입구나 한성대 근처에서 가볍게 만나도 좋습니다.",
    host: {
      name: "하은",
      major: "미디어커뮤니케이션학과",
      school: "성신여대",
      rating: "A",
      reviews: 10,
      proofs: 5,
      initials: "HE",
      bio: "후기 관리가 잘 된 안정형 주최자",
      reviewList: ["부드럽게 리드해줘서 편하게 만났어요."],
      proofList: ["성북 2:2 인증", "한성대 2:2 인증"]
    }
  }
];

const requests = [
  {
    id: "r1",
    teamName: "성균관대 반도체 남 3:3",
    note: "분위기 좋은 카페 선호, 다음주 목 가능",
    matchTargetId: 2,
    kept: true
  },
  {
    id: "r2",
    teamName: "서울대 경제 남 2:2",
    note: "대화 잘하는 팀, 압구정 쪽 선호",
    matchTargetId: 2,
    kept: true
  }
];

const state = {
  gender: "전체",
  school: "전체",
  query: "",
  activeMeetingId: null,
  selectedProfileId: null,
  acceptedRequestId: null,
  screen: "home"
};

const genderOptions = ["전체", "남자", "여자", "혼합"];

const searchInput = document.getElementById("searchInput");
const meetingList = document.getElementById("meetingList");
const resultCount = document.getElementById("resultCount");
const requestStack = document.getElementById("requestStack");
const chatRoomPreview = document.getElementById("chatRoomPreview");
const genderTabs = document.getElementById("genderTabs");
const schoolFilters = document.getElementById("schoolFilters");
const detailSheet = document.getElementById("detailSheet");
const profileSheet = document.getElementById("profileSheet");
const createSheet = document.getElementById("createSheet");
const detailContent = document.getElementById("detailContent");
const profileContent = document.getElementById("profileContent");
const scrim = document.getElementById("scrim");
const createForm = document.getElementById("createForm");
const navItems = Array.from(document.querySelectorAll("[data-nav-screen]"));
const screenPanels = Array.from(document.querySelectorAll("[data-screen]"));

function rankClass(rating) {
  if (rating === "S") return "rank-s";
  if (rating === "A") return "rank-a";
  return "rank-b";
}

function filterMeetings() {
  return meetings
    .filter((meeting) => (state.gender === "전체" ? true : meeting.gender === state.gender))
    .filter((meeting) => (state.school === "전체" ? true : meeting.school === state.school))
    .filter((meeting) => {
      const haystack = [
        meeting.title,
        meeting.school,
        meeting.hostLine,
        meeting.category,
        meeting.description,
        meeting.desired
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(state.query.toLowerCase());
    })
    .sort((a, b) => "SAB".indexOf(a.host.rating) - "SAB".indexOf(b.host.rating));
}

function renderTabs() {
  const schoolOptions = ["전체", ...new Set(meetings.map((meeting) => meeting.school))];

  genderTabs.innerHTML = genderOptions
    .map(
      (option) =>
        `<button class="tab-button ${state.gender === option ? "active" : ""}" data-gender="${option}">${option}</button>`
    )
    .join("");

  schoolFilters.innerHTML = schoolOptions
    .map(
      (option) =>
        `<button class="chip-button ${state.school === option ? "active" : ""}" data-school="${option}">${option}</button>`
    )
    .join("");
}

function renderMeetings() {
  const filtered = filterMeetings();
  resultCount.textContent = `${filtered.length}개`;

  if (!filtered.length) {
    meetingList.innerHTML = `
      <article class="detail-card">
        <h3>조건에 맞는 미팅이 아직 없어요</h3>
        <p class="detail-paragraph">검색어를 바꾸거나 직접 미팅을 개설해서 먼저 분위기를 만들어볼 수 있어요.</p>
      </article>
    `;
    return;
  }

  meetingList.innerHTML = filtered
    .map(
      (meeting) => `
        <article class="meeting-card">
          <div class="card-main">
            <div class="card-top">
              <button class="avatar-button" data-profile-id="${meeting.id}" aria-label="${meeting.host.name} 프로필 보기">
                ${meeting.host.initials}
              </button>
              <div class="card-copy">
                <div class="badge-row">
                  <span class="badge">${meeting.host.rating} 등급</span>
                  <span class="badge">${meeting.teamSize}</span>
                  <span class="badge">${meeting.category}</span>
                </div>
                <h3>${meeting.title}</h3>
                <div class="meta-row">
                  <span class="meta-pill">${meeting.school}</span>
                  <span class="meta-pill">${meeting.gender}</span>
                  <span class="meta-pill">희망 ${meeting.desired}</span>
                </div>
                <p class="host-line">${meeting.host.name} · ${meeting.host.major} · 리뷰 ${meeting.host.reviews}개</p>
                <p class="card-description">${meeting.description}</p>
              </div>
            </div>
          </div>
          <div class="rank-bar ${rankClass(meeting.host.rating)}">
            <strong>${meeting.host.rating} 등급 주최자 우선 노출</strong>
            <div class="card-actions">
              <button class="secondary-button" data-detail-id="${meeting.id}">설명 보기</button>
              <button class="primary-button" data-join-id="${meeting.id}">참여하기</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRequests() {
  const keptRequests = requests.slice(0, 2);
  if (!keptRequests.length) {
    requestStack.innerHTML = `
      <article class="request-card">
        <h3>대기 중인 요청이 없어요</h3>
        <p class="detail-paragraph">새로운 참여 요청이 들어오면 여기서 수락하거나 거절할 수 있어요.</p>
      </article>
    `;
    return;
  }

  requestStack.innerHTML = keptRequests
    .map(
      (request) => `
        <article class="request-card">
          <div>
            <h3>${request.teamName}</h3>
            <p class="detail-paragraph">${request.note}</p>
          </div>
          <div class="request-actions">
            <button class="secondary-button" data-request-reject="${request.id}">거절</button>
            <button class="primary-button" data-request-accept="${request.id}">이 팀 수락</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderChat() {
  const request = requests.find((item) => item.id === state.acceptedRequestId);
  if (!request) {
    chatRoomPreview.innerHTML = `
      <article class="chat-card">
        <h3>아직 열린 채팅방이 없어요</h3>
        <p class="detail-paragraph">요청 두 팀 중 한 팀을 수락하면 내부 채팅방이 열리고, 이후 초대코드 공유나 카톡방 이동을 자유롭게 선택할 수 있어요.</p>
      </article>
    `;
    return;
  }

  const inviteCode = `GWA-${request.id.toUpperCase()}-27`;
  chatRoomPreview.innerHTML = `
    <article class="chat-card">
      <div class="chat-header">
        <span class="badge">매칭 완료</span>
        <span class="badge">알림 전송됨</span>
      </div>
      <h3>${request.teamName} 와 채팅 시작</h3>
      <p class="detail-paragraph">현재는 주선자와 요청자만 입장해 있어요. 필요하면 초대코드로 팀원을 불러오거나 외부 톡방으로 이동할 수 있습니다.</p>
      <div class="detail-grid">
        <span class="meta-pill">초대코드 ${inviteCode}</span>
        <span class="meta-pill">팀원 확장 가능</span>
      </div>
      <div class="list-stack">
        <div class="chat-message">
          <strong>나</strong>
          <span>수락했어요. 이번 주 토요일 저녁 어때요?</span>
          <time>방금 전</time>
        </div>
        <div class="chat-message">
          <strong>${request.teamName}</strong>
          <span>좋아요. 시간 맞추고 팀원 초대코드도 여기서 공유할게요.</span>
          <time>1분 전</time>
        </div>
      </div>
    </article>
  `;
}

function openSheet(sheet) {
  scrim.classList.remove("hidden");
  [detailSheet, profileSheet, createSheet].forEach((item) => {
    if (item !== sheet) item.classList.add("hidden");
  });
  sheet.classList.remove("hidden");
}

function closeSheets() {
  scrim.classList.add("hidden");
  [detailSheet, profileSheet, createSheet].forEach((item) => item.classList.add("hidden"));
}

function showDetail(meetingId) {
  const meeting = meetings.find((item) => item.id === meetingId);
  if (!meeting) return;

  detailContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="section-kicker">설명 보기</p>
        <h2>${meeting.title}</h2>
      </div>
      <span class="badge">${meeting.host.rating} 등급</span>
    </div>
    <div class="detail-card">
      <div class="detail-grid">
        <span class="meta-pill">${meeting.hostLine}</span>
        <span class="meta-pill">희망 상대 ${meeting.desired}</span>
        <span class="meta-pill">${meeting.school}</span>
      </div>
      <p class="detail-paragraph">${meeting.description}</p>
      <p class="detail-paragraph">미팅 인증 ${meeting.host.proofs}회, 리뷰 ${meeting.host.reviews}개로 신뢰도를 쌓은 주최자예요.</p>
    </div>
    <div class="card-actions">
      <button class="secondary-button" onclick="closeSheets()">닫기</button>
      <button class="primary-button" data-join-id="${meeting.id}">신청하기</button>
    </div>
  `;
  openSheet(detailSheet);
}

function showProfile(meetingId) {
  const meeting = meetings.find((item) => item.id === meetingId);
  if (!meeting) return;
  const { host } = meeting;

  profileContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="section-kicker">주최자 프로필</p>
        <h2>${host.name}</h2>
      </div>
      <span class="badge">${host.rating} 등급</span>
    </div>
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">${host.initials}</div>
        <div>
          <div class="profile-name">${host.school} · ${host.major}</div>
          <p class="detail-paragraph">${host.bio}</p>
        </div>
      </div>
      <div class="detail-grid">
        <span class="meta-pill">리뷰 ${host.reviews}개</span>
        <span class="meta-pill">인증 ${host.proofs}회</span>
      </div>
    </div>
    <div class="section-head">
      <div>
        <p class="section-kicker">미팅 리뷰</p>
        <h2>남겨진 후기</h2>
      </div>
    </div>
    <div class="list-stack">
      ${host.reviewList.map((review) => `<div class="review-item">${review}</div>`).join("")}
    </div>
    <div class="section-head">
      <div>
        <p class="section-kicker">미팅 인증</p>
        <h2>검증 기록</h2>
      </div>
    </div>
    <div class="list-stack">
      ${host.proofList.map((proof) => `<div class="proof-item">${proof}</div>`).join("")}
    </div>
  `;
  openSheet(profileSheet);
}

function joinMeeting(meetingId) {
  const meeting = meetings.find((item) => item.id === meetingId);
  if (!meeting) return;
  alert(`${meeting.title}에 참여 요청을 보냈어요. 주최자 ${meeting.host.name}에게 알림이 전송됩니다.`);
  closeSheets();
}

function acceptRequest(requestId) {
  state.acceptedRequestId = requestId;
  renderChat();
  switchScreen("chat");
}

function rejectRequest(requestId) {
  const index = requests.findIndex((item) => item.id === requestId);
  if (index === -1) return;
  const [removed] = requests.splice(index, 1);
  if (state.acceptedRequestId === requestId) {
    state.acceptedRequestId = null;
  }
  renderRequests();
  renderChat();
  alert(`${removed.teamName} 요청을 거절했어요.`);
}

function handleCreateMeeting(event) {
  event.preventDefault();
  const formData = new FormData(createForm);
  const newMeeting = {
    id: Date.now(),
    title: `${formData.get("school")} ${formData.get("hostLine").toString().split(" ").slice(1).join(" ")}, 새로 개설된 미팅`,
    school: formData.get("school"),
    hostLine: formData.get("hostLine"),
    gender: formData.get("gender"),
    teamSize: formData.get("teamSize"),
    category: formData.get("targetCategory"),
    desired: formData.get("targetCategory"),
    description: formData.get("description"),
    host: {
      name: "새 주최자",
      major: "학과 미정",
      school: formData.get("school"),
      rating: "B",
      reviews: 0,
      proofs: 0,
      initials: "NW",
      bio: "첫 미팅을 개설한 신규 주최자",
      reviewList: ["아직 리뷰가 없어요. 첫 후기가 등급을 올려줄 수 있어요."],
      proofList: ["첫 인증을 기다리는 중"]
    }
  };

  meetings.unshift(newMeeting);
  renderTabs();
  renderMeetings();
  closeSheets();
  createForm.reset();
}

function switchScreen(screen) {
  state.screen = screen;
  screenPanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.screen !== screen);
  });
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.navScreen === screen);
  });
}

genderTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gender]");
  if (!button) return;
  state.gender = button.dataset.gender;
  renderTabs();
  renderMeetings();
});

schoolFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-school]");
  if (!button) return;
  state.school = button.dataset.school;
  renderTabs();
  renderMeetings();
});

meetingList.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail-id]");
  const profileButton = event.target.closest("[data-profile-id]");
  const joinButton = event.target.closest("[data-join-id]");

  if (detailButton) showDetail(Number(detailButton.dataset.detailId));
  if (profileButton) showProfile(Number(profileButton.dataset.profileId));
  if (joinButton) joinMeeting(Number(joinButton.dataset.joinId));
});

detailContent.addEventListener("click", (event) => {
  const joinButton = event.target.closest("[data-join-id]");
  if (joinButton) joinMeeting(Number(joinButton.dataset.joinId));
});

requestStack.addEventListener("click", (event) => {
  const acceptButton = event.target.closest("[data-request-accept]");
  const rejectButton = event.target.closest("[data-request-reject]");
  if (acceptButton) acceptRequest(acceptButton.dataset.requestAccept);
  if (rejectButton) rejectRequest(rejectButton.dataset.requestReject);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderMeetings();
});

document.getElementById("openCreateHero").addEventListener("click", () => openSheet(createSheet));
document.getElementById("openCreateNav").addEventListener("click", () => openSheet(createSheet));
navItems.forEach((item) => {
  item.addEventListener("click", () => switchScreen(item.dataset.navScreen));
});
scrim.addEventListener("click", closeSheets);
createForm.addEventListener("submit", handleCreateMeeting);

renderTabs();
renderMeetings();
renderRequests();
renderChat();
switchScreen("home");

window.closeSheets = closeSheets;
