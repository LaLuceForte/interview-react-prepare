import type React from "react";
import { data } from "./api";
import { type TreeNode } from "./api";

function File({ name }: { name: string }) {
  return (
    <span>
      <img src="file.png" alt="" width="16px" height="16px" />
      {name}
    </span>
  );
}

function Folder({ name, depth }: { name: string; depth: number }) {
  return (
    <span style={{ marginLeft: depth }}>
      <img src="folder.png" alt="" width="16px" height="16px" />
      {name}
    </span>
  );
}

function rec(item: TreeNode, depth = 0) {
  if (!item.children)
    return (
      <div key={item.id}>
        <File name={item.name} key={item.id} />
      </div>
    );

  return (
    <div style={{ marginLeft: depth }} key={item.id}>
      <Folder name={item.name} depth={depth} />
      <div style={{ marginLeft: depth + 10 }}>
        {item.children.map((child) => rec(child, (depth += 10)))}
      </div>
    </div>
  );
}

export default function GenerateDirs(): React.ReactElement {
  return <div>{data.map((item) => rec(item))}</div>;
}
