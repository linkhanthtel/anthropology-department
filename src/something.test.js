const forEach = (items,callBack) => {
    for (let x = 0; x <= items.length; x++) {
        callBack(items[x])
    }
}

test('Mock Callback', () => {
    const mockCallback = jest.fn(x => 42 + x)
})