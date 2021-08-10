import React, { useImperativeHandle, useRef } from "react";
import Form, { FormRef } from "./Form";

export default function AppHanlde() {
  const formRef = useRef<FormRef>(null);

  return <Form ref={formRef} />;
}
