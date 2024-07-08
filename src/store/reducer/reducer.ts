import { chickenReducer } from "../slices/chickenSlice";
import { detailReducer } from "../slices/detailSlice";

const reducer = {
  detail: detailReducer,
  chicken: chickenReducer,
};

export default reducer;
