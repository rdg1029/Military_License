import Image from "next/image";

const Header = () => {
return (
    <div className="relative w-fill h-96">
      <img src="https://picsum.photos/200" className="object-cover w-full h-96"/>
      {/* Image 컴포넌트로 변경 예정 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
        <h1 className="text-white text-4xl text-center font-bold drop-shadow-md">국군 정예화의 초석</h1>
        <h1 className="text-orange-600 text-4xl text-center font-bold mt-1.5 drop-shadow-md">밀리센스</h1>
        <p className="text-white text-sm text-center mt-8 ml-10 mr-10 drop-shadow-md">밀리센스는 기술을 통한 국군 정예화를 위해 탄생한 부대 별 자격증 취득 랭킹 커뮤니티입니다.</p>
        <p className="text-white text-sm text-center mt-8 ml-10 mr-10 drop-shadow-md">2022년 한 해, <span className="text-orange-600 font-medium underline">5196개의 자격증</span>이 국군 정예화에 도움이 되고 있습니다.</p>
      </div>
    </div>
  );
};

export default Header;
