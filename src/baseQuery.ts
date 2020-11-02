class BaseQuery {
  private static _cache: Cache = new Cache();

  private readonly _cacheKey: string;
  private readonly _func: () => void;

  constructor(cacheKey: string | string[], func: () => void) {
    this._cacheKey = Array.isArray(cacheKey) ? cacheKey.join(":") : cacheKey;
    this._func = func;
  }

  public execute() {}
}

export default BaseQuery;
