function generatePerson() {
    return {
        name: generateName(),
        memes: [
            memes[Math.floor(Math.random() * memes.length)],
        ],
        relations: [],
    }
}