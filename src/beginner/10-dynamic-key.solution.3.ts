interface Cache = {

};

const createCache = () => {
    const cache: {
        [id: string]: string;
    } = {};

    const add = (id: string, value: string) => {
        cache[id] = value;
    };

    const remove = (id: string) => {
        delete cache[id];
    };

    return { cache, add, remove };
};

const myCache = createCache();
myCache.add('greet', 'hello world');
myCache.add('Elone', 'Musk');
myCache.remove('greet');

