'use client';

import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();

  return <button>
    {pending ? '제출 중...' : '제출'}
  </button>
}