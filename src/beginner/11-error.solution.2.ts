const someError = () => {
    try {
        throw new Error('fail');
    } catch (e) {
        return (e as Error).message;
    }
};

