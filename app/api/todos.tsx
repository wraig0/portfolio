import { QueryResultRow, sql } from "@vercel/postgres";
import exp from "constants";

export async function getTodos(user: string): Promise<QueryResultRow[]> {
  const { rows } = await sql`SELECT * from TODOS where user_id=${user}`;
  return rows;
}

export async function addTodo(
  user: string,
  todo: string
): Promise<QueryResultRow> {
  const result =
    await sql`INSERT INTO TODOS (user_id, todo) VALUES (${user}, ${todo})`;
  return result;
}

export async function deleteTodo(
  user: string,
  id: string
): Promise<QueryResultRow> {
  const result =
    await sql`DELETE FROM TODOS WHERE user_id=${user} AND id=${id}`;
  return result;
}

export async function toggleTodo(
  user: string,
  id: string
): Promise<QueryResultRow> {
  const result = await sql`
    UPDATE TODOS
    SET done = NOT done
    WHERE user_id=${user} AND id=${id}
  `;
  return result;
}
