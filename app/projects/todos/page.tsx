"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Check, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

type Todo = {
  id: string;
  text: string;
  done: boolean;
  created: Date;
};

export default function Projects() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);
  const { toast } = useToast();

  const showToast = (title: string, description?: string, error?: boolean) => {
    toast({
      title: title,
      description: description,
      variant: error ? "destructive" : "default",
      duration: error ? undefined : 3000,
    });
  };

  const persistTodos = (newTodos: Todo[]) => {
    const newTodosString = JSON.stringify(newTodos);
    localStorage.setItem("todos", newTodosString);
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos !== newTodosString) {
      console.error("Failed to store todos");
      showToast("Failed to store todos", "Check if you have too many", true);
    } else {
      setTodos(newTodos);
    }
  };
  const addTodo = (todo: string) => {
    if (!todo.length) return;

    let id = uuid();
    const MAX_ATTEMPTS = 10;
    let attempts = 0;
    while (todos.some((todo) => todo.id === id)) {
      if (attempts >= MAX_ATTEMPTS) {
        showToast("Failed to generate unique id", "Please try again", true);
        throw new Error("Failed to generate unique id");
      }
      id = uuid();
      attempts += 1;
    }

    const newTodos = [
      ...todos,
      {
        id: uuid(),
        text: todo,
        done: false,
        created: new Date(),
      },
    ];
    persistTodos(newTodos);
  };

  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    newTodos[index].done = !newTodos[index].done;

    persistTodos(newTodos);
  };

  const submit = () => {
    addTodo(todoText);
    setTodoText("");
    inputRef.current?.focus();
  };

  const deleteTodo = (id: string) => {
    persistTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    if (!firstLoad) return;
    setFirstLoad(false);

    const storedTodos = localStorage.getItem("todos");
    const newTodos: Todo[] = storedTodos ? JSON.parse(storedTodos) : [];
    for (const todo of newTodos) {
      // recreate the date object as it is stored as a string
      todo.created = new Date(todo.created);
    }

    setTodos(newTodos);
  }, [firstLoad]);

  return (
    <div className="flex flex-col gap-4 ">
      <section className="w-full flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-row items-center gap-2">
          <Input
            title="Add todo text"
            ref={inputRef}
            spellCheck
            autoFocus
            type="text"
            placeholder="Read a book"
            className="p-2 border border-gray-400 rounded-lg"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
          />
          <Button
            title="Add todo"
            disabled={!todoText.length}
            className="p-2 bg-blue-500 hover:bg-blue-500 text-white rounded-lg"
            onClick={submit}
          >
            Add
          </Button>
          <Card className="flex flex-row gap-2 p-2">
            <Trash2 />
            <Switch
              title={isDeleteEnabled ? "Disable delete" : "Enable delete"}
              checked={isDeleteEnabled}
              onCheckedChange={() => setIsDeleteEnabled((enabled) => !enabled)}
            />
          </Card>
        </div>
      </section>
      <section className="w-full pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-64 lg:pr-64 flex flex-col justify-center items-center">
        {firstLoad ? (
          <div className="flex items-center space-x-4 w-full">
            <div className="w-full gap-4 p-4 flex flex-row items-center">
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-16 w-1/12" />
              <Skeleton className="h-16 w-1/12" />
              <Skeleton className="h-16 w-1/12" />
            </div>
          </div>
        ) : (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableCell className="w-3/4">Todo</TableCell>
                <TableCell className="w-1/12">Done</TableCell>
                <TableCell className="w-1/12">Delete</TableCell>
                <TableCell className="w-1/12">Added</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="max-h-80">
              {todos
                .sort((a, b) => (a.created > b.created ? -1 : 1))
                .map((todo, index) => (
                  <TableRow key={todo.id}>
                    <TableCell className={todo.done ? "line-through " : ""}>
                      {todo.text}
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        title="Toggle todo done"
                        checked={todo.done}
                        onClick={() => toggleTodo(todo.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        title="Delete todo"
                        disabled={!isDeleteEnabled}
                        onClick={() => deleteTodo(todo.id)}
                        variant="destructive"
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      {todo?.created instanceof Date
                        ? `${todo.created.toLocaleDateString()} ${todo.created.toLocaleTimeString()}`
                        : `${todo.created}`}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </section>
    </div>
  );
}
