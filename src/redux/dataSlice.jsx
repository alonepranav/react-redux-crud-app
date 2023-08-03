import { createSlice } from "@reduxjs/toolkit";

const getRandomId = () => {
  const text = "1234567890qwertyuiopasdfghjklzxcvbnm";
  let id = "";
  for (let i = 0; i < 6; i++)
    id += text[Math.floor((Math.random() * 100) % text.length)];
  return id;
};

const dataSlice = createSlice({
  name: "data",
  initialState: [],

  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: getRandomId() }];
    },

    del: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    edit: (state, action) => {
      let temp = [...state];
      const index = state.findIndex((x) => x.id === action.payload.id);

      temp[index] = {
        ...action.payload,
      };
      return temp;
    },
  },
});

export const { add, del, edit, setData } = dataSlice.actions;

export default dataSlice.reducer;
