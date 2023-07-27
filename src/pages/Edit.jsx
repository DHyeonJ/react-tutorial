import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit({ contents, setContents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const newData = contents.find((item) => item.id === id);
  const [title, setTitle] = useState(newData.title); // 초기데이터는 여기다 작성 수정 버튼 클릭시 기존 데이터가 먼저 보이게 해야한다.
  const [content, setContent] = useState(newData.content);
  console.log("newData", newData);
  return (
    <Fragment>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <div>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="제목"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="내용"
              style={{
                resize: "none",
                height: "100%",
                width: "100%",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "orange",
              cursor: "pointer",
            }}
            onClick={() => {
              const editData = {
                id: newData.id,
                title,
                content,
                author: "수정자",
              };
              // 최상위 배열 -> 중괄호 객체 -> 정보 ex) id:홍길동, title:Js,content:공부하기 key-value 페어 형태로 들어가있음
              setContents(
                // item은 배열 안에 있는 객체 형태이고, contents.map은 안에 선언한 매개변수(item)를 통해서 map함수를 이용할 수 있다.
                // 파라미터대해 공부하기
                contents.map((item) => (item.id === id ? editData : item))
              );
            }}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
