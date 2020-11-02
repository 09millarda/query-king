declare class BaseQuery {
    private static _cache;
    private readonly _cacheKey;
    private readonly _func;
    constructor(cacheKey: string | string[], func: () => void);
    execute(): void;
}
export default BaseQuery;
