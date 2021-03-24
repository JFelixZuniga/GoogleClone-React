import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    textString: "",
  },

  reducers: {
    setTextstring: (state, action) => {
      state.textString = action.payload;
    },
  },
});

export const { setTextstring } = textSlice.actions;

// Exportamos la funcionalidad que nos permite consumir el estado inicial en cualquier componente
export const selectTextstring = (state) => state.text.textString;

export default textSlice.reducer;
