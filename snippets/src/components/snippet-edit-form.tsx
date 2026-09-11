"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { startTransition, useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const handleSave = () => {
    startTransition(async () => {
      await actions.editSnippet(snippet.id, code);
    });
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <button type="button" onClick={handleSave} className="p-2 border rounded mt-2">
        Save
      </button>
    </div>
  );
}
