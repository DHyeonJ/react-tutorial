import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { nanoid } from "nanoid";

function App() {
  const [contents, setContents] = useState([
    {
      id: nanoid(),
      title: "JavaScript",
      content: "JavaScript 공부하기",
      author: "홍길동",
    },
    {
      id: nanoid(),
      title: "React",
      content: "React 공부하기",
      author: "마이콜",
    },
    {
      id: nanoid(),
      title: "Redux",
      content: "Redux 공부하기",
      author: "고길동",
    },
    {
      id: nanoid(),
      title: "TypeScript",
      content: "TypeScript 공부하기",
      author: "둘리",
    },
  ]);
  // const editDataHandler = (e) => {
  //   const newContents = contents.map((content) => {
  // e는 내가 수정해서 가지고온 editData
  // contents 배열 안에 있는 content 하나하나를 가지고 와서 아래 조건문을 만족하는 애들은 내용을 바꿔주고 아니면 그냥 그대로 돌려줌
  // if(content.id === e.id) {return {...content, title: e.title, content: e.content}
  // } else {
  // return {...content}
  // }
  // })
  // setContents(newContents)
  // };
  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main contents={contents} />} />
      <Route
        path="/detail/:id"
        element={
          <Detail
            contents={contents}
            setContents={setContents}
            // editDataHandler={editDataHandler}
          />
        }
      />
      <Route
        path="/create"
        element={<Create contents={contents} setContents={setContents} />}
      />
      <Route
        path="/edit/:id"
        element={
          <Edit
            contents={contents}
            setContents={setContents}
            // editDataHandler={editDataHandler}
          />
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
