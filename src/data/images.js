
async function loadImage(lazyFile) {
    const { default: image } = await lazyFile()
    return image 
}
const showcase = import.meta.glob('/src/images/what-is-upa');

console.log(showcase)
export async function showcasingUpa(pathname) {
    return pathname in showcase ? await loadImage(showcase[pathname]) : undefined;
}