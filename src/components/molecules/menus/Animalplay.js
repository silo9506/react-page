import styled from "styled-components";
import AnimalplayMap from "../../atoms/AnimalplayMap";
import reul from "../../../assets/jpg/playground reul.png";

const Animalplay = () => {
  return (
    <Container>
      <Reulbox>
        <h1>반려견 놀이터 이용자가 지켜야 할 사항</h1>
        <Reul>
          <ul>
            <li>
              반려견은 <strong>관할 구청에 반드시 동물등록</strong>(소유주,주소
              연락처 변경시 변경 등록)을 해야합니다.
            </li>
            <li>
              놀이터에서는 반드시
              <strong>반려견과 견주(소유자 또는 관리자)가 함께 입장</strong>하여
              직접 관리해 주십시오.
            </li>
            <li>
              단,<strong>13세미만 어린이는 성인 보호자와 함께</strong>반려견을
              동반하여 입장해야 합니다. 특히, 동반 입장한 어린이 및 영·유아는
              안전사고의 위험 우려가 크므로 보호자는 더욱 큰 관심을 갖고
              보호·관리해 주세요.
            </li>
            <li>
              놀이터 출입 시,<strong>배변봉투와 목줄을 꼭 지참</strong> 한 후
              입장해야 합니다. 반려견이 배변시 즉시 처리하고, 놀이터 입·퇴장
              시에도 반드시 목줄을 착용해야 합니다.
            </li>
            <li>
              반려견주께서는
              <strong>
                반려견간 싸움 또는 반려견에 의한 교상이 발생하지 않도록 주의
              </strong>
              를 갖고 항상 주시해 주세요. 사고 발생 시 피해를 준 반려견
              소유주께서 책임지셔야 합니다.
            </li>
            <li>
              <strong>맹견, 질병이 있는 견</strong>, 발정이 있는 견등은 출입할
              수 없습니다.
            </li>
            <li>
              놀이터 내에서는 <strong>흡연과 음식물 반입을 삼가</strong>
              해주십시오. 사람 음식물, 반려견 사료 및 간식류 등 모든 음식물을
              금지합니다.
            </li>
            <li>
              놀이터와 주변에서는 반려견과 다른 이용자들에게 위협을 주는
              <strong>고성방가 및 불쾌한 행동을 삼가</strong>해 주십시오.
            </li>
            <li>
              ※ 준수사항을 지키지 않을 경우 퇴장할 수 있습니다. ☎ 문의:
              2124-2835(ARS)
            </li>
          </ul>
          <img src={reul} alt={"reuls"}></img>
        </Reul>
      </Reulbox>
      <Mapwrapper>
        <h1>- 반려견 놀이터 최대 이용인원</h1>
        <p>① 어린이대공원 : 중소형견 25명 / 대형견 25명</p>
        <p> ② 월드컵공원 : 중소형견 40명 / 대형견 70명 </p>
        <p>③ 보라매공원 : 중소형견 55명 / 대형견 35명 </p>
        <h1>- 반려견 놀이터 현황</h1>
        <AnimalplayMap />
        <table>
          <thead>
            <tr>
              <th>공원명</th>
              <th>규모(㎡)</th>
              <th>위치</th>
              <th>운영시간</th>
              <th>전화번호</th>
              <th>상세보기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>어린이대공원</strong>
              </td>
              <td>747</td>
              <td>광진구 능동로 216(구의문주차장 옆)</td>
              <td>24시간 상시개방</td>
              <td>02-2124-2835</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>월드컵공원</strong>
              </td>
              <td>1638</td>
              <td>마포구 증산로 32(평화의 공원 주차장 옆)</td>
              <td>24시간 상시개방</td>
              <td>02-2124-2835</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>보라매공원</strong>
              </td>
              <td>1300</td>
              <td>동작구 여의대방로20마길 11(보라매공원 향기원 옆)</td>
              <td>24시간 상시개방</td>
              <td>02-2124-2835</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>초안산근린공원</strong>
              </td>
              <td>800</td>
              <td>도봉구 해등로3길 48-11 (초안산근린공원)</td>
              <td>유선문의</td>
              <td>02-2091-4474</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>송파구 반려견 놀이터</strong>
              </td>
              <td>1221</td>
              <td>송파구 가락동 508 탄천유수지</td>
              <td>10:00 ~ 17:00</td>
              <td>02-2147-2836</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>영등포구 반려견 놀이터</strong>
              </td>
              <td>116</td>
              <td>영등포구 문래동6가 52(안양천 오목교 부근)</td>
              <td>10:00 ~ 19:00</td>
              <td>02-2670-3417</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>구로구 반려견 놀이터</strong>
              </td>
              <td>700</td>
              <td>구로구 신도림동 285-34일대(안양천 오금교 남단)</td>
              <td>유선문의</td>
              <td>02-860-2265</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>동대문구 반려견 놀이터</strong>
              </td>
              <td>420</td>
              <td>동대문구 장안동 316-15(중랑천 장안교 하부)</td>
              <td>유선문의</td>
              <td>02-2127-4273</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>마포구 반려견놀이터 (댕댕이 놀이터)</strong>
              </td>
              <td>372</td>
              <td>마포구 마포대로1길 3 (마포동)</td>
              <td>10:00 ~ 18:00</td>
              <td>02-3153-8542</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>북서울꿈의숲</strong>
              </td>
              <td>815</td>
              <td>서울 강북구 월계로 173 (번동)</td>
              <td>10:00 ~ 19:00</td>
              <td>02-901-6463</td>
              <td>
                <button>자세히 보기</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Mapwrapper>
    </Container>
  );
};

export default Animalplay;

const Container = styled.div``;

const Reulbox = styled.div`
  padding: 20px;
  h1 {
    font-size: 24px;
    color: #333;
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    h1 {
      text-align: center;
    }
    padding: 0px;
  }
`;

const Reul = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-left: 20px;
    height: 300px;
  }
  ul {
    padding-left: 20px;
    width: 100%;
  }
  li {
    margin-top: 10px;
    font-size: 18px;
    color: #555;
    list-style-type: disc;
  }
  li:last-child {
    list-style-type: none;
    color: red;
  }
  strong {
    font-weight: 700;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    img {
      width: 100%;
      padding-left: 0px;
      margin-top: 30px;
      height: 450px;
    }
  }
`;

const Mapwrapper = styled.div`
  h1 {
    font-size: 17px;
    color: #333;
    font-weight: bold;
    margin: 10px 0px;
  }
  p {
    font-size: 17px;
    color: #555;
    margin-top: 10px;
  }
  padding: 30px;
  background-color: #f5f5f5;
  overflow: hidden;
  margin-top: 30px;
  table {
    border-top: 3px solid #594940;
    width: 100%;
    margin-top: 20px;
  }

  th {
    padding: 21px 10px 21px;
    text-align: center;
    background-color: #f8f8f8;
    border-bottom: 1px solid #d4d4d4;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  td {
    padding: 21px 10px 21px;
    background-color: #ffffff;
    border-bottom: 1px solid #d4d4d4;
    font-size: 17px;
    color: #333;
    text-align: center;
    word-break: keep-all;
  }
  button {
    background-color: #009d8f;
    border-radius: 5px;
    padding: 10px 21px;
    color: #fff;
    font-size: 16px;
    border-color: transparent;
  }
  strong {
    font-weight: 700;
  }
  @media screen and (max-width: 700px) {
    th {
      display: none;
    }
    td {
      border: none;
      padding: 5px 10px;
      text-align: left;
    }
    tr {
      display: flex;
      border-bottom: 1px solid black;
      flex-direction: column;
    }
  }
`;
