interface Props {
  licenseName: string;
  licenseType: string;
}

const SubTitle = (props: {children: React.ReactNode}) => {
  return <div className="w-fit text-xl text-orange-600 font-bold pt-5 pb-1">{props.children}</div>;
}

const Content = (props: {children: React.ReactNode}) => {
  return <div className="w-fit text-sm text-lime-800 font-semibold bg-orange-100 rounded drop-shadow p-1 mb-2">{props.children}</div>
}

const BookContent = (props: {title: string, publisher: string, author: string, publishYear: string}) => {
  return (
    <div className="flex flex-col grow-0 shrink-0 w-32 bg-orange-100 rounded drop-shadow p-1 m-1.5">
      <div className="text-lime-800 font-bold pb-2">{props.title}</div>
      <div className="text-lime-800 text-sm">출판사: {props.publisher}</div>
      <div className="text-lime-800 text-sm">저자: {props.author}</div>
      <div className="text-lime-800 text-sm">출판 년도: {props.publishYear}</div>
    </div>
  );
}

const LicenseInfo = (props: Props) => {
  return (
    <>
      <div className="flex flex-col w-full pt-16 pl-5 pr-5">
        <div className="flex flex-row w-full border-b border-lime-800">
          <h1 className="grow text-3xl text-orange-600 font-bold self-center">{props.licenseName}</h1>
          <div className="grow-0 flex flex-col">
            <p className="text-sm text-orange-600 font-bold leading-none">MP</p>
            <p className="text-lg text-lime-800 font-bold leading-none">20</p>
          </div>
        </div>

        <SubTitle>증분류</SubTitle>
        <Content>{props.licenseType}</Content>

        <SubTitle>자격증 정보</SubTitle>
        <Content>① 시 행 처 : 한국산업인력공단 ② 관련학과 : 대학의 기계공학, 금속공학 등 관련학과③ 시험과목   - 필기 : 용접법, 용접야금, 용접재료, 용접구조설계, 용접시공관리, 용접관련장치,             안전위생, 용접부검사, 용접에 관한 법규 및 규격, 기계공작법 및 생산관리            에 관한 사항④ 검정방법   - 필기 : 단답형 및 주관식 논술현 (매교시당 100분, 총 400분)   - 면접 : 구술형 면접(30분 정도)⑤ 합격기준   - 필기·면접 : 100점을 만점으로 하여 60점 이상</Content>

        <SubTitle>시험 일정</SubTitle>
        <Content>20230103</Content>
        <Content>20230724</Content>

        <SubTitle>관련 서적</SubTitle>
      </div>
      <div className="flex flex-nowrap w-full overflow-x-scroll pl-5 pr-5">
        <BookContent title="전기(공사)기사 산업기사" publisher="에듀윌" author="김상훈" publishYear="2018" />
        <BookContent title="전기(공사)기사 산업기사" publisher="에듀윌" author="김상훈" publishYear="2018" />
        <BookContent title="전기(공사)기사 산업기사" publisher="에듀윌" author="김상훈" publishYear="2018" />
        <BookContent title="전기(공사)기사 산업기사" publisher="에듀윌" author="김상훈" publishYear="2018" />
      </div>
    </>
  );
}

export default LicenseInfo;