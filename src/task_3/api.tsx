export interface TreeNode {
  name: string;
  id: number;
  children?: TreeNode[];
}

export const data: TreeNode[] = [
  {
    name: "src",
    id: 1,
    children: [
      {
        name: "task_1",
        id: 2,
        children: [
          { name: "styles.css", id: 3 },
          {
            name: "todo.tsx",
            id: 4,
            children: [
              { name: "todo_1.tsx", id: 5 },
              { name: "todo_2.tsx", id: 6 },
            ],
          },
        ],
      },
      {
        name: "task_2",
        id: 7,
        children: [
          { name: "styles.css", id: 8 },
          { name: "searchinput.tsx", id: 9 },
        ],
      },
      {
        name: "task_3",
        id: 10,
        children: [
          { name: "styles.css", id: 11 },
          { name: "generatedirs.tsx", id: 12 },
        ],
      },
    ],
  },
  {
    name: "public",
    id: 13,
    children: [
      {
        name: "assets",
        id: 14,
        children: [
          { name: "pic1", id: 15 },
          { name: "pic2", id: 16 },
        ],
      },
    ],
  },
];
