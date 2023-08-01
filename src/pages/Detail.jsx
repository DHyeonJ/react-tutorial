import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../modules/todo";

export default function Detail() {
  const navigate = useNavigate();
  //url로 정보를 넘겨 줄 때 사용
  const { id } = useParams();
  const dispatch = useDispatch();
  // 배열은 기본적으로 .id 해서 배열의 값을 불러올 수 없다.
  // 내가 실수 한 것은 contents에서 find함수를 통해 데이터 찾겠다고 해놓고 안에서 item.id랑 contents.id를 비교한다고 해서
  // find를 왜 썼는지...? =>
  const data = useSelector((state) => state.todo);
  const newData = data.find((item) => item.id === id);
  // 초기데이터는 여기다 작성 수정 버튼 클릭시 기존 데이터가 먼저 보이게 해야한다.
  return (
    <>
      <Header />
      <Container>
        <h1
          style={{
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {newData.title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {newData.content}
        </div>
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button
            onClick={() => {
              // 최상위 배열 -> 중괄호 객체 -> 정보 ex) id:홍길동, title:Js,content:공부하기 key-value 페어 형태로 들어가있음
              // item은 배열 안에 있는 객체 형태이고, contents.map은 안에 선언한 매개변수(item)를 통해서 map함수를 이용할 수 있다.
              // 파라미터대해 공부하기

              navigate(`/edit/${newData.id}`);
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "orange",
              color: "white",
              cursor: "pointer",
              marginRight: "6px",
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              alert("삭제할까?");
              dispatch(removeData(data.id));
              navigate("/");
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "red",
              color: "white",
              cursor: "pointer",
            }}
          >
            삭제
          </button>
        </div>
      </Container>
    </>
  );
}
