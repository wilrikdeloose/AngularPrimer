export class Person {
  get name() { return this._name; }
  get age() { return this._age; }

  constructor(private _name: string, private _age: number) { }
  toString() { return this._name + " - " + this._age; }
}