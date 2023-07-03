const Info = () => {
  return (
    <div className="flex flex-col w-full pr-5 pl-5">
      <h1 className="text-2xl font-bold text-orange-600 mt-10">랭킹을 높여나가는 재미</h1>
      <p className="text-sm">장병 개인이 취득한 국가 기술 자격증에 점수, MP(Milisence Point) 를 부여하고, 장병들의 점수들은 모여 부대의 MP가 됩니다.</p>
      <br></br>
      <p className="text-sm">밀리센스 랭킹을 통해 소속된 부대에 대한 자부심 함양과 국가 기술 자격증 취득에 동기를 부여하고자 합니다.</p>

      <h1 className="text-2xl font-bold text-orange-600 mt-10">내 병과, 어떤 자격증이 필요할까?</h1>
      <p className="text-sm">밀리센스에서는 병과 별로 취득했을 때 도움이 될 국가 기술 자격증을 분류하여 장병 개개인에게 자격증을 추천합니다.</p>
      <br></br>
      <p className="text-sm">내 병과에 맞는 국가 기술 자격증을 취득하여 부대 전투력 향상에 도움을 줄 수 있다면 좋겠죠.</p>

      <h1 className="text-2xl font-bold text-orange-600 mt-10">교재비가 부담된다면?</h1>
      <p className="text-sm">밀리센스는 사용자가 취득하고 싶은 국가 기술 자격증을 공부할 수 있는 서적을 국방대 전자도서관 자료 기반으로 추천합니다.</p>
      <br></br>
      <p className="text-sm">교재, 구매하지 말고 전자도서관에서 이용하세요.</p>
    </div>
  );
}

export default Info;