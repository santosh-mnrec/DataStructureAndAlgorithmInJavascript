import { expect } from "chai";
import { LinkedList } from "../LinkedList/LinkedList";

describe("LinkedList", () => {
  it("Should add element at head", () => {
    const list = new LinkedList();
    list.addFirst(10);
    list.addFirst(-1);
    expect("-1->10->NULL").to.equal(list.toString());
  });
  it("Should add element at tails", () => {
    const list = new LinkedList();
    list.addLast(10);
    list.addLast(-1);
    expect("10->-1->NULL").to.equal(list.toString());
  });
  it("Should insert element at give position", () => {
    const list = new LinkedList();
    list.addFirst(10);
    list.addFirst(20);
    list.addLast(30);
    list.insertAt(0, -100);
    list.insertAt(1, 100);
    expect("-100->100->20->10->30->NULL").to.equal(list.toString());
  });
  it("Should remove head", () => {
    const list = new LinkedList();
    list.addFirst(10);
    list.addFirst(20);
    list.addLast(30);
    list.insertAt(0, -100);
    list.insertAt(1, 100);
    list.removeHead();

    expect("100->20->10->30->NULL").to.equal(list.toString());
  });
  it("should return the length of the list", () => {
    const list = new LinkedList();
    list.addFirst(10);
    list.addFirst(20);
    list.addLast(30);
    list.insertAt(0, -100);
    list.insertAt(1, 100);
    expect(list.length).to.equal(5);
  });
  it("should remove the element at given position", () => {
    const list = new LinkedList();
    list.addFirst(10);
    list.addFirst(20);
    list.addFirst(30);
    list.removeAt(2);
    expect("30->20->NULL").to.equal(list.toString());
    list.removeAt(0);
    expect("20->NULL").to.equal(list.toString());
  });
});
