import { FiX } from "react-icons/fi";
import {
  closeButton,
  header,
  tableBody,
  tableHeader,
  tableRow,
  tableWrapper,
  title,
  wrapper,
} from "./DetailSideTable.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

const DetailSideTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const detailOnSelectedItems = useSelector(
    (state: RootState) => state.details
  );

  const handleOnCloseButton = () => {
    dispatch();
  };

  if (!detailOnSelectedItems.selectedData[0]) {
    return <></>;
  }

  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={title}> 🍗 내가 가장 원하는 닭가슴살 제품은 ? 🍗 </div>
        <FiX className={closeButton} onChange={handleOnCloseButton} />
      </div>
      <table className={tableWrapper}>
        <thead className={tableHeader}>
          <tr>
            <th> No. </th>
            <th> 브랜드 </th>
            <th> 제품명 </th>
            <th> 칼로리(kcal) </th>
            <th> 단백질(g) </th>
            <th> 지방(g) </th>
            <th> 탄수화물(g) </th>
            <th> 당류(g) </th>
            <th> 나트륨(mg) </th>
            <th> 콜레스테롤(mg) </th>
            <th> 포화지방산(g) </th>
            <th> 중량(g) </th>
            <th> 제조사 </th>
          </tr>
        </thead>
        <tbody className={tableBody}>
          {detailOnSelectedItems.selectedData.map((item) => (
            <tr key={item.id} className={tableRow}>
              <td>{item.id}</td>
              <td>{item.brand ? item.brand : "-"}</td>
              <td>{item.product_name}</td>
              <td>{item.calories}</td>
              <td>{item.protein}</td>
              <td> {item.fat}</td>
              <td> {item.calbohydrate}</td>
              <td> {item.sugars}</td>
              <td> {item.sodium}</td>
              <td> {item.cholesterol}</td>
              <td> {item.saturated_fat}</td>
              <td> {item.weight}</td>
              <td>{item.manufacturer ? item.manufacturer : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailSideTable;
