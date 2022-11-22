import {
    cloneTemplate,
    err,
    formatDate,
    genErrMsgElementNotFound,
} from "./util.js";

/**
 * TODO @deprecated
 *
 * @param {Post[]} posts
 */
function generatePostElements(posts) {
    posts.map(createPostElement).forEach(insertPostElement);
}

/** @type {HTMLElement} */
let POSTS_CONTAINER_EL = null;
/**
 * @param {HTMLElement} postEl
 */
export function insertPostElement(postEl) {
    const selector = "#posts";
    POSTS_CONTAINER_EL =
        POSTS_CONTAINER_EL ||
        document.querySelector(selector);

    if (!POSTS_CONTAINER_EL) {
        const msg = genErrMsgElementNotFound(selector);
        err(msg, false);
        throw new Error(msg);
    }

    POSTS_CONTAINER_EL.prepend(postEl);
}

/**
 * @param {Post} post
 * @returns {HTMLElement}
 */
export function createPostElement(post) {
    const templateEl = cloneTemplate("#post-template", {
        idSuffix: post.id,
    });

    const postEl = templateEl.firstElementChild;

    updatePostElement(postEl, post);

    return postEl;
}

/**
 * @param {HTMLElement} postEl
 * @param {Post} post
 */
export function updatePostElement(postEl, post) {
    const els = postEl.querySelectorAll("[name]");

    for (const el of els) {
        const key = el.getAttribute("name");
        if (!key || !post[key]) continue;

        let value = post[key];
        // TODO this is bad
        if (key === "timestamp") {
            value = formatDate(value);
        }
        el.innerText = value;
    }
}
