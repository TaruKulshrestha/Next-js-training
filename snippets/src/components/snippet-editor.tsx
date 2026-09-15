"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

interface SnippetEditorProps {
  name?: string;
  defaultValue?: string;
}

export default function SnippetEditor({
  name = "code",
  defaultValue = "",
}: SnippetEditorProps) {
  const [code, setCode] = useState(defaultValue);

  return (
    <>
      <input type="hidden" name={name} value={code} />
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </>
  );
}
