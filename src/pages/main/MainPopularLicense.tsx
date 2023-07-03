const PopularLicense = () => {
    return (
      <div className="flex flex-col w-full pt-10 pr-4 pl-4">
        <p className="text-sm">전우들은 어떤 자격증을 취득했을까?</p>
        <h1 className="text-2xl font-bold text-orange-600">군 내 인기 국가 기술 자격증</h1>

        <div className="w-full bg-orange-100 rounded-lg drop-shadow mt-1.5 mb-1.5 pt-1.5 pb-1.5 text-lime-800 text-center text-xl font-bold">지게차운전기능사</div>
        <div className="w-full bg-orange-100 rounded-lg drop-shadow mt-1.5 mb-1.5 pt-1.5 pb-1.5 text-lime-800 text-center text-xl font-bold">정보처리기능사</div>
        <div className="w-full bg-orange-100 rounded-lg drop-shadow mt-1.5 mb-1.5 pt-1.5 pb-1.5 text-lime-800 text-center text-xl font-bold">자동차정비기능사</div>

        <p className="text-sm text-orange-600 text-center underline mt-1">인기가 많은 국가 기술 자격증을 추천해드려요.</p>
      </div>
    );
  }

  export default PopularLicense;