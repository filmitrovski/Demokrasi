var chunks = [
    'der', 'dob', 'da', 'per', 'pa', 'ag', 'an', 'ad', 'cyr', 'def', 'fa', 'fi', 'po', 'pi', 'ken',
    'sa', 'sa', 'is', 'il', 'li', 'di', 'len', 'lo', 're', 'ris', 'ky', 'ra', 're', 'ben', 'bar', 'op',
    'ar', 'ad', 'ann', 'an', 'fed', 'dre', 'bra', 'arg', 'org'
];

/* a b c d e f g h i j k l m n o p q r s t u v w x y z */

function randomChunk() {
    return chunks[Math.floor(Math.random()*chunks.length)];
}

function generateName() {
    return randomChunk() + randomChunk() + (Math.random() < 0.5 ? randomChunk() : '').toString() + ' ' + 
            randomChunk() + randomChunk() + (Math.random() < 0.5 ? randomChunk() : '').toString();
}