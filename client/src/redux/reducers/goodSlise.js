import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  goods: [], // Массив товаров
  loading: false, // Флаг загрузки
  error: null, // Ошибка при загрузке товаров
};

const goodSlice = createSlice({
  name: "goodReducer",
  initialState,
  reducers: {
    // Действие для установки флага загрузки
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // Действие для установки ошибки при загрузке товаров
    setError(state, action) {
      state.error = action.payload;
    },
    // Действие для добавления товара
    addGood(state, action) {
      state.goods.push(action.payload);
    },
    // Действие для установки всех товаров
    setGoods(state, action) {
      state.goods = action.payload;
    },
  },
});

export const { setLoading, setError, addGood, setGoods } = goodSlice.actions;

export default goodSlice.reducer;
