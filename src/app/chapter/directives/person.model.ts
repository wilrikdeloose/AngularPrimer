export class Person {
  constructor(private name: string, private age: number) { }
  public toString() { return this.name + " - " + this.age; }
}