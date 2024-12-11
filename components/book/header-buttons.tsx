'use client';

import { useState } from "react";
import styles from "./header-buttons.module.css";
import Button from "@/components/common/button";
import Link from "next/link";
import { patchBookAsAddStock, patchBookAsSale } from "@/lib/actions";

export default function HeaderButtons({ id, currentStock, totalSales }: { id: number; currentStock: number, totalSales: number }) {
  const [input, setInput] = useState<number>(1);

  const handleMinus = () => {
    setInput((prev) => (prev - 1 > 0 ? prev - 1 : 1));
  };

  const handlePlus = () => {
    setInput((prev) => prev + 1);
  };

  const handleSell = async () => {
    if (input > currentStock) {
      alert("판매 수량이 재고를 초과할 수 없습니다.");
      return;
    }

    try {
      const result = await patchBookAsSale(undefined, id, {
        currentStock: currentStock - input,
        totalSales: totalSales + input,
      });

      if (result?.message) {
        alert(result.message);
      }
    } catch (error) {
      console.error("판매 요청 에러:", error);
      alert("판매 요청 중 문제가 발생했습니다.");
    } finally {
      setInput(1);
    }
  };

  const handleAddStock = async () => {
    try {
      const result = await patchBookAsAddStock(undefined, id, {
        currentStock: currentStock + input,
      });

      if (result?.message) {
        alert(result.message);
      }
    } catch (error) {
      console.error("판매 요청 에러:", error);
      alert("판매 요청 중 문제가 발생했습니다.");
    } finally {
      setInput(1);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.sell}>
        <div className={styles.sellControl}>
          <button className={styles.sellMinus} onClick={handleMinus}>-</button>
          <input
            type="number"
            value={input}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              setInput(isNaN(value) || value < 1 ? 1 : Math.min(value, currentStock));
            }}
            className={styles.sellInput}
          />
          <button className={styles.sellPlus} onClick={handlePlus}>+</button>
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.stockButton} onClick={handleSell}>판매</button>
          <button className={styles.stockButton} onClick={handleAddStock}>재고 추가</button>
        </div>
      </section>
      <section className={styles.buttons}>
        <Link className={styles.modifyButton} href={`/book/${id}/modify`}>책 정보 수정</Link>
        <Button onClick={() => alert("책 정보 삭제 기능을 추가해야 합니다.")} variant="danger">책 정보 삭제</Button>
      </section>
    </div>
  );
}
