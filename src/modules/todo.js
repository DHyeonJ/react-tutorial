import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// jsx는 컴포넌트 관련하는 친구...
// todo.js가 redux랑 관련있어서 한 곳에 보관하는게 낫다.

// 초기값 설정
const initialState = [
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
];

// 리듀서 생성
const todolist = createSlice({
  name: "edit",
  initialState,
  reducers: {
    // 생성하는 리듀서
    addData: (state, action) => {
      // 제목, 내용은 들어가야해서 payload 보낼 때 담아서 보낸다.
      const { title, content } = action.payload;
      // push를 통해 입력할 제목, 내용과 id, 작성자정보를 추가한다.
      state.push({
        id: nanoid(),
        title,
        content,
        author: "작성자",
      });
    },
    // 수정 리듀서이다.
    editData: (state, action) => {
      // 수정할 때 같은 id만 변경해야하고, 제목과 내용도 변경해야하니까 payload값에 보낸다.
      const { id, title, content } = action.payload;
      // itemToEdit 변수에 state값에 find함수를 통해 선택한 정보의 id값과 payload값에서 보낸 id값이 일치해야한다.
      const itemToEdit = state.find((item) => item.id === id);
      // 위 조건이 일치할 때
      if (itemToEdit) {
        // 새로 입력한 제목, 내용, 작성자로 바꿔준다.
        itemToEdit.title = title;
        itemToEdit.content = content;
        itemToEdit.author = "수정자";
      }
    },
    // 삭제하는 리듀서
    removeData: (state, action) => {
      // 보낼 페이로드값을 idToRemove 변수에 담아 저장한다.
      const idToRemove = action.payload;
      // filter함수를 통해 위에서 payload값으로 보낸 id값과 선택한 id가 같지 않는 것만 걸러준다.
      return state.filter((item) => item.id !== idToRemove);
    },
  },
});

export const { addData, editData, removeData } = todolist.actions;
export default todolist.reducer;
