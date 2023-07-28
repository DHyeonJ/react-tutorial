import React, { useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../modules/todo";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          // form 안에 버튼이 있으면 버튼 클릭시 onSubmit이 실행된다. 온서브밋에 다 작성하는게 낫다!
          onSubmit={(e) => {
            e.preventDefault();
            console.log("제출!");
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
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(addData({ title, content }));
              navigate("/");
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
