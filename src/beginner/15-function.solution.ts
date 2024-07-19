const addListener = (onFocusChange: (isFocus: boolean) => void) => {
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

