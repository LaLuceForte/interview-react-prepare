import GenerateItems from "./generateItems";
import { data } from "./api";

import "./styles.css";

export default function generateDirs(): React.ReactElement {
  return (
    <div>
      {data.map((item) => (
        <div>{GenerateItems(item)}</div>
      ))}
    </div>
  );
}
