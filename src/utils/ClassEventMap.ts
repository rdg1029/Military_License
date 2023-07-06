const ArmyClassEventMap = [
  {
    classCode: "a1",
    className: "보병",
    eventArr: [2, 12, 14, 16, 20, 25, 26]
  },
  {
    classCode: "a2",
    clssName: "기갑",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a3",
    clssName: "포병",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a4",
    clssName: "방공",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a5",
    clssName: "항공",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a6",
    clssName: "정보",
    eventArr: [2, 20, 21]
  },
  {
    classCode: "a7",
    clssName: "정보통신",
    eventArr: [2, 20, 21]
  },
  {
    classCode: "a8",
    clssName: "화생방",
    eventArr: [15, 17, 18, 20, 25, 26]
  },
  {
    classCode: "a9",
    clssName: "공병",
    eventArr: [14, 15, 16, 17, 20, 21, 25]
  },
  {
    classCode: "a10",
    clssName: "군수",
    eventArr: [2, 15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a11",
    clssName: "병기",
    eventArr: [2, 15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a12",
    clssName: "병참",
    eventArr: [2, 15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "a13",
    clssName: "수송",
    eventArr: [2, 9, 14, 16, 17, 20, 25, 26]
  },
  {
    classCode: "a14",
    clssName: "인사",
    eventArr: [2, 7]
  },
  {
    classCode: "a15",
    clssName: "재정",
    eventArr: [2, 7]
  },
  {
    classCode: "a16",
    clssName: "군사경찰",
    eventArr: [2, 7]
  },
  {
    classCode: "a17",
    clssName: "공보정훈 / 군악",
    eventArr: [2, 8, 12, 21, 23]
  },
  {
    classCode: "a18",
    clssName: "의무",
    eventArr: [2, 6, 26]
  },
  {
    classCode: "a19",
    clssName: "법무",
    eventArr: [2]
  },
  {
    classCode: "a20",
    clssName: "군종",
    eventArr: [2, 7]
  },
];

const NavyClassEventMap = [
  {
    classCode: "n1",
    clssName: "함정",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "n2",
    clssName: "항공",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "n3",
    clssName: "정보",
    eventArr: [2, 20, 21]
  },
  {
    classCode: "n4",
    clssName: "정보통신",
    eventArr: [2, 20, 21]
  },
  {
    classCode: "n5",
    clssName: "병기",
    eventArr: [2, 15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "n6",
    clssName: "보급",
    eventArr: [2, 15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "n7",
    clssName: "공병",
    eventArr: [14, 15, 16, 17, 20, 21, 25]
  },
  {
    classCode: "n8",
    clssName: "조함",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "n9",
    clssName: "재정",
    eventArr: [2, 7]
  },
  {
    classCode: "n10",
    clssName: "공보정훈",
    eventArr: [2, 8, 12, 21, 23]
  },
  {
    classCode: "n11",
    clssName: "군사경찰",
    eventArr: [2, 7]
  },
  {
    classCode: "n12",
    clssName: "의무",
    eventArr: [2, 6, 26]
  },
  {
    classCode: "n13",
    clssName: "법무",
    eventArr: [2]
  },
  {
    classCode: "n14",
    clssName: "군종",
    eventArr: [2, 7]
  },
]

const AirForceClassEventMap = [
  {
    classCode: "af1",
    clssName: "조종",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "af2",
    clssName: "항공통제",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "af3",
    clssName: "방공포병",
    eventArr: [15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "af4",
    clssName: "정보",
    eventArr: [2, 20, 21]
  },
  {
    classCode: "af5",
    clssName: "군수",
    eventArr: [2, 15, 16, 17, 18, 20, 21, 25, 26]
  },
  {
    classCode: "af6",
    clssName: "정보통신",
    eventArr: [2, 20, 21]
  },
  {
    classCode: "af7",
    clssName: "기상",
    eventArr: [25, 26]
  },
  {
    classCode: "af8",
    clssName: "공병",
    eventArr: [14, 15, 16, 17, 20, 21, 25]
  },
  {
    classCode: "af9",
    clssName: "재정",
    eventArr: [2, 7]
  },
  {
    classCode: "af10",
    clssName: "공보정훈",
    eventArr: [2, 8, 12, 21, 23]
  },
  {
    classCode: "af11",
    clssName: "군사경찰",
    eventArr: [2, 7]
  },
  {
    classCode: "af12",
    clssName: "인사교육",
    eventArr: [2, 7]
  },
  {
    classCode: "af13",
    clssName: "의무",
    eventArr: [2, 6, 26]
  },
  {
    classCode: "af14",
    clssName: "법무",
    eventArr: [2]
  },
  {
    classCode: "af15",
    clssName: "군종",
    eventArr: [2, 7]
  }
]