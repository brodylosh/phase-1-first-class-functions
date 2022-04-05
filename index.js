function receivesAFunction (callBack) {
    callBack();
    return 'dog';
}

returnsANamedFunction = () => {
    let aFunction = () => {}
    return aFunction;
}

function returnsAnAnonymousFunction () {
    return function () { 
        console.log('dog');
    }
}
