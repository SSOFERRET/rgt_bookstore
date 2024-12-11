'use client';

import { useFormStatus } from "react-dom";
import Button from "../common/button";

export default function Submit() {
  const { pending } = useFormStatus();

  return <Button>
    {pending ? '제출 중...' : '제출'}
  </Button>
}