import { LinkedList } from "./LinkedList";
import { Node } from "./Node";

export class LinkedListPhren<T> implements LinkedList<T> {
  public head: Node<T> | null = null;


  insertInBegin(data: T): Node<T> {
    const node = new Node(data);

    if(!this.head) {
      this.head = node;
    }
    else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  insertInEnd(data: T): Node<T> {
    const node = new Node(data);

    if(!this.head) {
      this.head = node;
    }
    else {
      const getLast = (node: Node<T>): Node<T> => {
        return node.next ? getLast(node.next) : node;
      }

      const lastNode = getLast(this.head);
      node.prev = lastNode;
      lastNode.next = node;
    }

    return node;
  }

  deleteNode(node: Node<any>): void {
    if(!node.prev) {
      this.head = node.next;
    }
    else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
  }
  traverse(): T[] {
    const result: T[] = [];
    if(!this.head) {
      return result;
    }

    const addToResults = (node: Node<T>): T[] => {
      result.push(node.data);
      return node.next ? addToResults(node.next) : result;
    };

    return addToResults(this.head);
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  search(comparator: (data: any) => boolean): Node<any> | null {
    throw new Error("Method not implemented.");
  }

}
