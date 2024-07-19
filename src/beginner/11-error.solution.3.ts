const someError = () => {
    try {
        throw new Error('fail');
    } catch (e) {
        if (e instanceof Error) {
            return e.message;
        }
    }
};

