/* 
  Data, 메인페이지 적용 전 기능 테스트 위해
  임시 데모 페이지 구현
*/

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { ChickenData } from "../types/ChickenData";

const DemoPage = () => {
  const [selectedItems, setSelectedItems] = useState<ChickenData[]>([]);

  const handleCheckboxChange = (id: number, item: ChickenData) => {
    const foundItem = selectedItems.find((i) => i.id === id);

    if (foundItem) {
      setSelectedItems(selectedItems.filter((i) => i.id !== id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const [data, setData] = useState<ChickenData[]>([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        {/* 체크박스 */}
        {data.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(item.id, item)}
            />
            {item.id}
          </label>
        ))}
      </div>
      {
        /* 선택된 아이템이 하나 이상이어야 사이드바 열림. */
        selectedItems.length > 0 ? (
          <Sidebar selectedItems={selectedItems} />
        ) : null
      }
    </div>
  );
};

export default DemoPage;

