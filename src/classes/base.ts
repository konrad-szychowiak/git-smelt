export type IDLike = number | string;

export class UserLike {
    private _name: string;

    get name(): string {
      return this._name;
    }

    private _id: IDLike;

    get id(): IDLike {
      return this._id;
    }

    constructor(name: string, id: IDLike) {
      this._name = name;
      this._id = id;
    }
}
