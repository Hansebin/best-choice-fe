type Member = {
  memberId: number;
  nickname: string;
};

export type Post = {
  postId: number;
  member: Member;
  title: string;
  content: string;
  optionA: string;
  optionB: string;
  tag: string[];
  createdDate: string;
  popoularityDate: string | null;
  heartCount: number;
  choiceCount: number;
  commentCount: number;
  chattingActive?: boolean;
  liveChatUserCount?: number;
};

type Pageable = {
  sort: { sorted: boolean; unsorted: boolean; empty: boolean };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type PostListData = {
  content: Post[];
  pageable: Pageable;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  sort: { sorted: boolean; unsorted: boolean; empty: boolean };
  empty: boolean;
};

export const postListData: PostListData = {
  content: [
    {
      postId: 1,
      member: { memberId: 1, nickname: "person1" },
      title: "깻잎 논쟁에 대해 어떻게 생각하시나요?",
      content: "남자친구가 여사친 깻잎을 떼어줘도 될까요?",
      optionA: "떼어줘도 된다",
      optionB: "떼어주면 안 된다.",
      tag: ["연애"],
      createdDate: "2023.08.10",
      popoularityDate: null,
      heartCount: 12,
      choiceCount: 50,
      commentCount: 10,
      chattingActive: false,
    },
    {
      postId: 2,
      member: { memberId: 2, nickname: "person2" },
      title: "소개팅 장소 어디가 좋을까요?",
      content: "분위기 좋은 카페와 레스토랑 중에 고민 중인데 어디로 잡을까요?",
      optionA: "카페",
      optionB: "레스토랑",
      tag: ["데이트", "소개팅"],
      createdDate: "2023.08.10",
      popoularityDate: null,
      heartCount: 12,
      choiceCount: 10,
      commentCount: 5,
      chattingActive: true,
    },
    {
      postId: 3,
      member: { memberId: 3, nickname: "person3" },
      title: "여행 타입 투표!",
      content: "여행은 친구랑? 아니면 혼자",
      optionA: "친구랑",
      optionB: "혼자",
      tag: ["여행"],
      createdDate: "2023.08.10",
      popoularityDate: null,
      heartCount: 4,
      choiceCount: 10,
      commentCount: 2,
      chattingActive: false,
    },
    {
      postId: 4,
      member: { memberId: 4, nickname: "person4" },
      title: "여사친 이사 도와주는 남자친구",
      content: "여사친 이사 도와주는 남자친구 저만 이해 못하나요?",
      optionA: "도와줄 수 있다.",
      optionB: "절대 안 된다.",
      tag: ["연애"],
      createdDate: "2023.08.11",
      popoularityDate: "2023.8.15",
      heartCount: 50,
      choiceCount: 100,
      commentCount: 12,
      chattingActive: false,
    },
    {
      postId: 5,
      member: { memberId: 5, nickname: "person5" },
      title: "요즘 날씨에 어울리는 옷은?",
      content: "긴팔 입을까 반팔 입을까",
      optionA: "긴팔",
      optionB: "반팔",
      tag: ["코디", "날씨"],
      createdDate: "2023.08.11",
      popoularityDate: null,
      heartCount: 10,
      choiceCount: 10,
      commentCount: 5,
      chattingActive: true,
    },
    {
      postId: 6,
      member: { memberId: 6, nickname: "person6" },
      title: "야식으로 메뉴 추천!",
      content: "야식 메뉴 골라주세요.",
      optionA: "라면",
      optionB: "피자",
      tag: ["음식"],
      createdDate: "2023.08.11",
      popoularityDate: null,
      heartCount: 20,
      choiceCount: 30,
      commentCount: 12,
      chattingActive: false,
    },
    {
      postId: 7,
      member: { memberId: 7, nickname: "person7" },
      title: "민초 호불호 투표",
      content: "민초파 있나요??",
      optionA: "호",
      optionB: "불호",
      tag: ["음식"],
      createdDate: "2023.08.12",
      popoularityDate: null,
      heartCount: 2,
      choiceCount: 5,
      commentCount: 0,
      chattingActive: true,
    },
    {
      postId: 8,
      member: { memberId: 8, nickname: "person8" },
      title: "영화 vs 드라마",
      content: "영화가 좋다 드라마가 좋다",
      optionA: "영화",
      optionB: "드라마",
      tag: ["취미"],
      createdDate: "2023.08.13",
      popoularityDate: null,
      heartCount: 12,
      choiceCount: 20,
      commentCount: 2,
      chattingActive: true,
    },
    {
      postId: 9,
      member: { memberId: 9, nickname: "person9" },
      title: "월200 백수 vs 월500 직장인",
      content: "백수는 알바도 못하고 취업도 못함",
      optionA: "백수",
      optionB: "직장인",
      tag: ["밸런스"],
      createdDate: "2023.08.14",
      popoularityDate: null,
      heartCount: 13,
      choiceCount: 20,
      commentCount: 4,
      chattingActive: false,
    },
    {
      postId: 10,
      member: { memberId: 10, nickname: "person10" },
      title: "딱복 vs 말복",
      content: "여러분의 선택은?",
      optionA: "딱복",
      optionB: "말복",
      tag: ["밸런스"],
      createdDate: "2023.08.15",
      popoularityDate: "2023.08.22",
      heartCount: 60,
      choiceCount: 120,
      commentCount: 12,
      chattingActive: false,
    },
    {
      postId: 11,
      member: { memberId: 11, nickname: "person11" },
      title: "쇼미더머니 지원 영상 올리기 vs 미스터트롯 출연",
      content: "랩에 소질 없음 트로트도 소질 없음",
      optionA: "쇼미더머니",
      optionB: "미스터트롯",
      tag: ["밸런스"],
      createdDate: "2023.08.15",
      popoularityDate: null,
      heartCount: 22,
      choiceCount: 50,
      commentCount: 10,
      chattingActive: true,
    },
    {
      postId: 12,
      member: { memberId: 12, nickname: "person12" },
      title: "1주일 동안 삼시세끼 치킨만 먹기 vs 3년 동안 치킨 못 먹기",
      content: "1주일 동안 삼시세끼 꼬박꼬박 치킨만 먹어야함.",
      optionA: "3년 동안 치킨 못 먹기",
      optionB: "삼시세끼 치킨 먹기",
      tag: ["밸런스"],
      createdDate: "2023.08.16",
      popoularityDate: null,
      heartCount: 0,
      choiceCount: 0,
      commentCount: 0,
      chattingActive: true,
    },
  ],
  pageable: {
    sort: { sorted: true, unsorted: false, empty: true },
    pageNumber: 1,
    pageSize: 10,
    offset: 10,
    paged: true,
    unpaged: false,
  },
  number: 1,
  numberOfElements: 10,
  first: false,
  last: false,
  size: 10,
  sort: { sorted: true, unsorted: false, empty: true },
  empty: false,
};
