import { Node } from "./Node";

export interface LinkedList<T> {
  insertInBegin(data: T): Node<T>;
  insertInEnd(data: T): Node<T>;
  deleteNode(node: Node<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): Node<T> | null;
}
