import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail({ contents, setContents }) {
  const navigate = useNavigate();
  const { id } = useParams();
  // 배열은 기본적으로 .id 해서 배열의 값을 불러올 수 없다.
  // 내가 실수 한 것은 contents에서 find함수를 통해 데이터 찾겠다고 해놓고 안에서 item.id랑 contents.id를 비교한다고 해서
  // find를 왜 썼는지...? =>
  const newData = contents.find((item) => item.id === id);
  const onDeleteHandler = (id) => {
    const deleteData = contents.filter((item) => item.id !== id);
    setContents(deleteData);
    alert(deleteData);
  };
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
              // onDeleteHandler();
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
