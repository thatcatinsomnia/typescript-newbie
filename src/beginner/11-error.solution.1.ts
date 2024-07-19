const someError = () => {
    try {
        throw new Error('fail');
    } catch (e: any) {
        // WARN: DO NOT USE "any"
        return e.message;
    }
};

