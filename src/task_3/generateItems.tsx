import { type TreeNode } from "./api";
import "./styles.css";
import GenerateItem from "./generateItem";
import { useState } from "react";
const DEPTH_STEP = 15;

export default function GenerateItems(
  data: TreeNode,
  depth = 0,
): React.ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const changeVisibility = () => setIsVisible(!isVisible);
  if (!data.children)
    return <div>{GenerateItem(data.name, true, depth + DEPTH_STEP)}</div>;
  return (
    <div>
      <span>
        {GenerateItem(
          data.name,
          false,
          depth + DEPTH_STEP,
          changeVisibility,
          isVisible,
        )}
      </span>
      <div style={{ display: isVisible ? "block" : "none" }}>
        {data.children.map((item) => (
          <div>{GenerateItems(item, depth + 10)}</div>
        ))}
      </div>
    </div>
  );
}
