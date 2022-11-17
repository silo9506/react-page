import styled from "styled-components";
import DropDown from "../atoms/DropDown";

const NavMenu = () => {
  const data = [
    {
      ul: "센터",
      li: [
        "센터소개",
        "주요산업",
        "센터 오시는길",
        "공지사항",
        "자주묻는질문",
        "자원봉사",
      ],
    },
    {
      ul: "입양",
      li: [
        "입양대기 동물소개",
        "입양절차",
        "입양후기",
        "유기동물공고",
        "임시보호 프로그램 안내",
        "입양 지원",
        "서울시 입양센터",
      ],
    },
    {
      ul: "교육",
      li: [
        "서울반려동물 시민학교",
        "반려동물 입양교육 및 돌봄교육",
        "길고양이 보호관리 문화교실",
      ],
    },
    {
      ul: "동물보호 정보",
      li: [
        "달라지는 동물보호법",
        "웹툰",
        "우리동네 동물병원",
        "동물보호 동영상",
        "카드 뉴스",
        "예방접종 동물등록",
        "길고양이 중성화",
        "우리동네 펫위탁소",
      ],
    },
    { ul: "반려견 놀이터", li: false },
  ];
  return (
    <Container>
      {data.map((data) => (
        <Menu key={data.ul}>
          {data.ul}
          <DropDown item={data.li}></DropDown>
        </Menu>
      ))}
    </Container>
  );
};

export default NavMenu;

const Container = styled.div`
  display: flex;
  font-size: 24px;
`;
const Menu = styled.div`
  position: relative;
  padding: 0 25px;
  :last-child {
    padding-right: 0pc;
  }
`;
