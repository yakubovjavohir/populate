function ID() {
    const randimID = Math.trunc(Math.random() * 1000000)

    if (String(randimID).length === 5) {
        ID()
    }

    return randimID
}

export {ID}