/* global kakao */
import { useEffect } from "react";
import styled from "styled-components";

const AnimalplayMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.56678590369445, 126.97861548283734),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }
    setZoomable();

    let marker = "";
    let infowindow = "";
    const positions = [
      {
        content: "<div>어린이 대공원</div>",
        latlng: new kakao.maps.LatLng(37.545708198552035, 127.08429468755494),
      },
      {
        content: "<div>월드컵공원</div>",
        latlng: new kakao.maps.LatLng(37.56636783676561, 126.89316008981604),
      },
      {
        content: "<div>보라매공원</div>",
        latlng: new kakao.maps.LatLng(37.49083327008494, 126.91989711024847),
      },
      {
        content: "<div>초안산근린공원</div>",
        latlng: new kakao.maps.LatLng(37.64756584189025, 127.04061137402581),
      },
      {
        content: "<div>송파구 반려견 놀이터</div>",
        latlng: new kakao.maps.LatLng(37.495762952218236, 127.10196430913003),
      },
      {
        content: "<div>영등포구 반려견 놀이터</div>",
        latlng: new kakao.maps.LatLng(37.52256509097824, 126.88068282964788),
      },
      {
        content: "<div>구로구 반려견 놀이터</div>",
        latlng: new kakao.maps.LatLng(37.50710867608557, 126.87445016168374),
      },
      {
        content: "<div>동대문구 반려견 놀이터</div>",
        latlng: new kakao.maps.LatLng(37.588743488650586, 127.07182631415708),
      },
      {
        content: "<div>마포구 반려견놀이터</div>",
        latlng: new kakao.maps.LatLng(37.538257631643255, 126.9432848811398),
      },
      {
        content: "<div>북서울꿈의숲</div>",
        latlng: new kakao.maps.LatLng(37.62359251022714, 127.04165746461118),
      },
    ];

    for (let i = 0; i < positions.length; i++) {
      marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
      });

      infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content,
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }

    marker.setMap(map);
    infowindow.open(map, marker);
  }, []);

  return (
    <Container>
      <div id="map"></div>
    </Container>
  );
};

export default AnimalplayMap;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  #map {
    width: 100%;
    height: 600px;
    z-index: 0;
  }
`;
