export function generateImage(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // You shoud push your rgba values to this imageDataArray
    const imageDataArray: number[] = [];

    const imageData = ctx.createImageData(imgWidth, imgHeight);

    // Your code goes here:

    for (let i = 0; i < imgHeight; ++i) {
        for (let j = 0; j < imgWidth; ++j) {
            let r = Math.floor(0.999 * j / (imgWidth - 1))
            let g = Math.floor(255.999 * i / (imgHeight - 1))
            let b = Math.floor(255.999 * 0)

            imageDataArray.push(r, g, b, 255)

        }
    }

    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i + 0] = imageDataArray[i + 0]; // R value
        imageData.data[i + 1] = imageDataArray[i + 1]; // G value
        imageData.data[i + 2] = imageDataArray[i + 2]; // B value
        imageData.data[i + 3] = imageDataArray[i + 3]; // A value
    }

    ctx.putImageData(imageData, 0, 0);
}
