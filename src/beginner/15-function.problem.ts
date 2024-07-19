// TODO: how to type onFocusChange 

const addListener = (onFocusChange: unknown) => void) => {
    window.addEventListener('focus', () => {
        onFocusChange(true);
    });

    window.addEventListener('blur', () => {
        onFocusChange(false);
    });
};

addListener((isFocus) => {
    console.log(isFocus);
});

