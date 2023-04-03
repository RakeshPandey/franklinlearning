export default function decorate(block) {
    const ele = document.querySelector('body')
    const removeEle = document.querySelector('.error-page > div')
    ele.classList.add('background-white')
    removeEle.classList.add('vertically-center-align')
}