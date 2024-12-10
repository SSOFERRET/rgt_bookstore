import styles from "./page.module.css";

export default function ModifyBook({ params }) {
  return (
    <div>
      폼 컴포넌트(수정) 
      {params.id}
    </div>
  );
}
