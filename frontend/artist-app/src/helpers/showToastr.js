import toastr from 'toastr'

/**
 * @param {string} type - Тип всплывающего окна (warning, success, error)
 * @param {string} text - Текст всплываюшего окна
 * @param {string} title - Заголовок всплывающего окна (необязательно)
 * @description Инициализация toastr с заданными: типом, текстом и заголовком
 */
export default function showToastr (type, text, title = '') {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: 300,
    hideDuration: 1000,
    timeOut: 3000,
    extendedTimeOut: 1000,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  }
  toastr[type](text, title)
}
