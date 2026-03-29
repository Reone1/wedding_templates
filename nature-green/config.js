/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "최재원",
    nameEn: "Jaewon",
    father: "최태현",
    mother: "박지현",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "안채원",
    nameEn: "Chaewon",
    father: "안현수",
    mother: "이선미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-13",
    time: "17:00",
    venue: "트라디노이",
    hall: "6층",
    address: "서울특별시 강남구 도곡로99길 16",
    tel: "02-567-9916",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1290739532",
      naver: "https://map.naver.com/v5/search/트라디노이"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "Wedding Day",
    content: "저희 두 사람이 하나되는 날,\n곁에서 지켜봐 주신 소중한 분들을 초대합니다.\n\n귀한 걸음 하시어 축복해주시면\n그 마음 잊지않고 보답하며 살아가겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "이 길의 끝은 몰라도\n손잡고 함께 걸을게요\n\n맑은 하늘과 평탄한 길\n약속할 순 없겠지만\n늘 함께 걸을게요..\n\n— 뮤지컬『 하데스타운 』중 —"
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "아버지", name: "최태현", bank: "하나은행", number: "3389103101407" },
      { role: "어머니", name: "박지현", bank: "카카오뱅크", number: "3333128038902" },
      { role: "신랑", name: "최재원", bank: "기업은행", number: "06609059501013" }
    ],
    bride: [
      { role: "아버지", name: "안현수", bank: "우리은행", number: "1002140260251" },
      { role: "어머니", name: "이선미", bank: "농협은행", number: "21601451208588" },
      { role: "신부", name: "안채원", bank: "우리은행", number: "1002249698058" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "최재원 ♥ 안채원 결혼합니다",
    description: "2026년 6월 13일, 소중한 분들을 초대합니다."
  }
};
