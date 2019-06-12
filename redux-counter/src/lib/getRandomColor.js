export function getRandomColor() {
    const colors = ['white','blue','red','orange'];

    const random = Math.floor(Math.random() * 4); // 4가지 색상

    return colors[random];
}
