/**
 * @param {string} selector
 * @param {CloneTemplateOptions | undefined} options
 * @returns {DocumentFragment | null}
 *
 * @typedef {object} CloneTemplateOptions
 * @property {string} idSuffix
 */
export function cloneTemplate(selector, { idSuffix } = {}) {
    /** @type HTMLTemplateElement */
    const templateEl = document.querySelector(
        `template${selector}`,
    );
    if (!templateEl) {
        const msg = `Template with selector "${selector}" doesn't exist`;
        err(msg, false);
        throw new Error(msg);
    }

    const fragment = templateEl.content.cloneNode(true);

    idSuffix = idSuffix ?? "default";

    const inputEls = fragment.querySelectorAll('[id$="-"]');
    const labelEls = fragment.querySelectorAll(
        'label[for$="-"]',
    );
    inputEls.forEach((el) => (el.id += idSuffix));
    labelEls.forEach((el) => (el.htmlFor += idSuffix));

    return fragment;
}

/**
 * @param {Date | string} date
 */
export function formatDate(date) {
    const pad = (n) => n.toString().padStart(2, "0");

    typeof date === "string" &&
        (date = timestampToDate(date));

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

/**
 * @param {Date} date
 * @returns {string}
 */
export function dateToTimestamp(date) {
    return date.toISOString();
}

/**
 * @param {string} timestamp
 * @returns {Date}
 */
export function timestampToDate(timestamp) {
    return new Date(timestamp);
}

/**
 * @type {Map<Function, number>}
 */
let debounces = new Map();

/**
 * @param {() => void} func
 * @param {number} delayMs
 */
export function debounce(func, delayMs) {
    const storedTimeoutId = debounces.get(func);
    if (storedTimeoutId !== undefined) {
        clearTimeout(storedTimeoutId);
    }

    const timeoutId = setTimeout(() => {
        debounces.delete(func);
        func();
    }, delayMs);
    debounces.set(func, timeoutId);
}

/**
 * @param {string} msg
 * @param {boolean | undefined} printConsole
 */
export function err(msg, printConsole = true) {
    if (printConsole) {
        console.error(msg);
    }
    alert(`Error:\n${msg}`);
}

/**
 * @param {string} selector
 * @returns {string}
 */
export function genErrMsgElementNotFound(selector) {
    return `Element with selector "${selector}" not found`;
}
