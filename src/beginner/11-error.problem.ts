// TODO: how to type error ?
const someError = () => {
    try {
        throw new Error('fail');
    } catch (error) {
        return e.message;
    }
};

