export function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}