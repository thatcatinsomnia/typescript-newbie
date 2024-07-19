// TODO: how to make cache can accept dynamic key ?
const createCache = () => {
    const cache = {};

    const add = (id: string, value: string) => {
        cache[id] = value;
    };

    const remove = (id: string) => {
        delete cache[id]
    };

    return { cache, add, remove };
};


const myCache = createCache();
myCache.add('greet', 'hello world');
myCache.add('Elone', 'Musk');
myCache.remove('greet');

