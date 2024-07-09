import { FiMinusSquare, FiXSquare } from "react-icons/fi";
import {
    button,
    clearButton,
    closeButton,
    header,
    tableBody,
    tableHeader,
    tableRow,
    tableWrapper,
    title,
    wrapper,
} from "./ComparisonTable.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setComparisonActive, clearComparisonData } from "../../store/slices/comparisonSlice";

const ComparisonTable = () => {
    const dispatch = useDispatch();
    const { comparisonData, comparisonActive } = useSelector(
        (state: RootState) => state.comparison
    );

    // 선택 비교 창 닫음
    const handleOnCloseButton = () => {
        dispatch(setComparisonActive(false));
    };
    
    // 모든 체크박스 선택 초기화
    const handleOnClearButton = () => {
        dispatch(clearComparisonData());
    };

    // 사이드바가 비활성화 상태면 null을 반환하여 렌더링하지 않음
    if (!comparisonActive) {
        return null;
    }

    return (
        <div className={wrapper}>
            <div className={header}>
                <div className={title}>
                    🍗 내가 가장 원하는 닭가슴살 제품은 ? 🍗
                </div>
                <div className={button}>
                    <div className={closeButton} onClick={handleOnCloseButton}>
                        <FiMinusSquare />
                        선택 창 숨기기
                    </div>
                    <div className={clearButton} onClick={handleOnClearButton}>
                        <FiXSquare />
                        선택 전체 해제
                    </div>
                </div>
            </div>
            <table className={tableWrapper}>
                <thead className={tableHeader}>
                    <tr>
                        <th> No. </th>
                        <th> 브랜드 </th>
                        <th> 제품명 </th>
                        <th> 단백질(g) </th>
                        <th> 에너지(kcal) </th>
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
                    {comparisonData.map((item) => (
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
                            <td>
                                {item.manufacturer ? item.manufacturer : "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;
