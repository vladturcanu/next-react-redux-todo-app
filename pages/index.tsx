import TodoColumn from "@/components/TodoColumn";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const todoColumns = useAppSelector((state) => state.todoList.columns);

  return (
    <main
      className={`flex min-h-screen justify-center p-24 ${inter.className}`}>
      {todoColumns.map((column) => (
        <TodoColumn
          key={column.id}
          column={column}
        />
      ))}
    </main>
  );
}
