import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeindex: -1,
  accordionData: [
    {
      id: 0,
      title: "유기동물을 발견했어요",
      content: `유기동물을 발견하셨다면 120 또는 해당 구청 담당부서로 연락주세요!

 

서울시 내에서 유기동물이 발견되어 구조요청이 들어오면 각 구청에서 지정한 동물보호센터의 동물구조요원이 구조합니다.
      
       
      
- 공공장소를 떠돌거나 버려진 동물을 발견한 경우 관할 구청과 해당 유기동물 보호시설에 신고해야 합니다.
      
- 유기동물을 주인 없는 동물이라 여겨 마음대로 잡아서 죽이면 3년 이하의 징역 또는 3천만원 이하의 벌금을 내게 됩니다.
      
- 구청·시청은 관내에서 발견된 유기동물이 보호받을 수 있도록 필요한 조치를 하고, 주인을 찾을 수 있도록 그 사실을 7일 이상 공고합니다.
      
- 공고 후 10일이 지나도 주인을 찾지 못한 경우, 해당 구청·시청이 동물의 소유권을 갖게 되어 개인에게 기증하거나 분양할 수 있습니다.
      
       
      
유기동물을 발견하셨다면 120 다산콜센터 또는 해당 구청 유기동물 담당부서로 연락바랍니다.`,
    },
    {
      id: 1,
      title: "서울동물복지지원센터에는 어떤 동물들이 있나요? ",
      content: `서울동물복지지원센터에서는 유기된 개와 고양이를 보호하고 있습니다.

서울시 내에 아프거나 다친 유기동물이 발견되면 서울시 각 구청에서 지정한 동물보호센터의 동물구조요원이 유기동물을 구조하고,
      
공고기간이 끝난 유기동물에 한하여 우리 센터로 인계되어 치료와 보호가 이루어집니다.
      
       
      
혹시 아프거나 다친 유기동물을 발견하셨다면
      
120 다산콜센터 또는 해당 구청의 유기동물 담당부서로 연락주세요.`,
    },
    {
      id: 2,
      title: "연락처 및 운영시간 안내",
      content: `서울동물복지지원센터 입양 및 기타 문의사항
마포센터 Tel. 02)2.1.2.4.-2.8.3.9.
구로센터 Tel. 02)2.6.3.6.-7.6.4.5.
      
운영시간안내
평일 및 주말(연중무휴)
마포센터 09:00 ~ 18:00
구로센터 10:00 ~ 18:00
*입양과 방문은 사전에 유선으로 예약하여 주시기 바랍니다.*`,
    },
  ],
};

const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    change: (state, action) => {
      if (state.activeindex === action.payload) {
        state.activeindex = -1;
      } else {
        state.activeindex = action.payload;
      }
    },
  },
});

export const questionSliceAction = questionSlice.actions;
export default questionSlice.reducer;
