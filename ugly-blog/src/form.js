import {
    cloneTemplate,
    dateToTimestamp,
    err,
} from "./util.js";

/**
 * @typedef {object} CreateNewPostFormOpts
 * @property {(formEl: HTMLFormElement, post: Post) => void} onCreatePost
 *
 * @param {CreateNewPostFormOpts}
 * @returns {HTMLFormElement}
 */
export function createNewPostForm({ onCreatePost }) {
    /** @param {Post} post */
    const onSubmit = (post) => {
        post.timestamp = dateToTimestamp(new Date());
        onCreatePost && onCreatePost(formEl, post);
        clearFormInput(formEl);
    };

    const formEl = createPostForm(
        {},
        {
            submit: { label: "Create", onSubmit },
            template: { idSuffix: "new" },
        },
    );

    return formEl;
}

/**
 * @typedef {object} CreateEditPostFormOpts
 * @property {(post: Post) => void} onUpdatePost
 * @property {() => void} onCancel
 *
 * @param {Post} post
 * @param {CreateEditPostFormOpts}
 * @returns {HTMLFormElement}
 */
export function createEditPostForm(
    post,
    { onUpdatePost, onCancel },
) {
    /** @param {Post} post */
    const onSubmit = (post) => {
        post.timestamp = dateToTimestamp(new Date());
        onUpdatePost && onUpdatePost(post);
        clearFormInput(formEl);
    };

    const formEl = createPostForm(post, {
        submit: { label: "Update", onSubmit },
        cancel: { label: "Cancel", onCancel },
        template: { idSuffix: post.id },
    });

    return formEl;
}

/**
 * @param {Post | undefined} post
 * @param {CreateEditPostFormOptions} options
 * @returns {HTMLFormElement}
 *
 * @typedef {object} CreateEditPostFormOptions
 * @property {CloneTemplateOptions} template
 * @property {{ label: string, onSubmit: (post: Post) => void } | undefined} submit
 * @property {{ label: string, onCancel: (post: Post) => void } | undefined} cancel
 */
function createPostForm(
    post = {},
    { submit, cancel, template } = {},
) {
    template.idSuffix = template.idSuffix || "default";

    const templateSelector = "#edit-post-template";
    const templateEl = cloneTemplate(
        templateSelector,
        template,
    );
    const formEl = templateEl.querySelector("form");

    if (!formEl) {
        const msg = `Expected template "${templateSelector}" to contain a "form" tag`;
        err(msg, false);
        throw new Error(msg);
    }

    populatePostForm(formEl, post);

    if (submit) {
        const submitEl = formEl.querySelector(
            '[type="submit"]',
        );

        if (!submitEl) {
            const msg = `Expected form in template "${templateSelector}" to contain a "button" or "input" tag with "type=\"submit\""`;
            err(msg, false);
            throw new Error(msg);
        }

        submitEl.innerText = submit.label || "Update";
        if (submit.onSubmit) {
            setupFormSubmit(formEl, submit.onSubmit);
        }
    }

    const cancelSelector = `#edit-post-cancel-${template.idSuffix}`;
    const cancelEl = formEl.querySelector(cancelSelector);

    if (!cancelEl) {
        const msg = `Expected form in template "${templateSelector}" to contain a cancel button with selector "${cancelSelector}"`;
        err(msg, false);
        throw new Error(msg);
    }

    if (cancel) {
        cancelEl.hidden = false;
        cancelEl.innerText = cancel.label || "Cancel";
        if (cancel.onCancel) {
            cancelEl.addEventListener("click", () =>
                cancel.onCancel(post),
            );
        }
    } else {
        cancelEl.hidden = true;
    }

    return formEl;
}

/**
 * @param {HTMLFormElement} formEl
 * @param {Post} post
 */
function populatePostForm(formEl, post) {
    const inputEls = formEl.querySelectorAll("[name]");

    for (const inputEl of inputEls) {
        const key = inputEl.getAttribute("name");
        if (!key || !post[key]) continue;

        inputEl.value = post[key];
    }

    requestAnimationFrame(() =>
        [...inputEls]
            .filter((el) => el.tagName === "TEXTAREA")
            .forEach(setHeightForTextarea),
    );
}

/**
 * @param {HTMLTextAreaElement} textarea
 */
function setHeightForTextarea(textarea) {
    const MAX_HEIGHT = 512;
    const contentHeight = textarea.scrollHeight;
    const height = Math.min(contentHeight, MAX_HEIGHT);
    textarea.style.height = `${height}px`;
}

/**
 * @param {HTMLFormElement} formEl
 * @param {(post: Post) => void} onSubmit
 */
function setupFormSubmit(formEl, onSubmit) {
    const errSelector = ".form-error";
    const errEl = formEl.querySelector(errSelector);

    if (!errEl) {
        err(
            `Expected form to contain "${errSelector}" element`,
        );
    }

    const displayError = (err) => {
        if (!errEl) return;
        errEl.innerHTML = err;
        errEl.hidden = false;
    };

    const clearError = () => {
        if (!errEl) return;
        errEl.innerHTML = "";
        errEl.hidden = true;
    };

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        clearError();

        let newPost;
        try {
            newPost = newPostFromForm(formEl);
        } catch (err) {
            displayError(err);
            return;
        }

        onSubmit(newPost);
    });
}

/**
 * @typedef {Omit<Post, "id" | "timestamp">} PartialPost
 *
 * @param {HTMLFormElement} formEl
 * @throws {string}
 * @returns {PartialPost}
 */
function newPostFromForm(formEl) {
    /** @type {PartialPost} */
    const post = {
        // title: null,
        // author: null,
        // body: null,
    };

    const inputEls = formEl.querySelectorAll("[name]");

    for (const inputEl of inputEls) {
        const key = inputEl.getAttribute("name");
        post[key] = inputEl.value;
    }

    validatePost(post);

    return post;
}

/**
 * @param {HTMLFormElement} formEl
 */
function clearFormInput(formEl) {
    const inputEls = formEl.querySelectorAll(
        "input, textarea",
    );
    for (const inputEl of inputEls) {
        inputEl.value = "";
    }
}

/**
 * @param {PartialPost} post
 * @param {((error: string) => void) | undefined} onError
 * @throws {string}
 * @returns {Post}
 */
function validatePost(post, onError) {
    const errors = [];
    const fmtKey = (key) => fmt.strong(fmt.capitalize(key));

    for (const key in post) {
        if (typeof post[key] !== "string") continue;
        if (!post[key].trim()) {
            errors.push(`${fmtKey(key)} must be given.`);
        }
    }

    if (errors.length > 0) {
        const br = "<br />";
        const error = errors.join(br);
        if (onError) {
            onError(error);
        } else {
            throw error;
        }
    }

    return post;
}

const fmt = {
    strong: (s) => "<strong>" + s + "</strong>",
    capitalize: (s) =>
        s
            .replace(/([A-Z])/g, " $1")
            .replace(/(^| )\w/g, (c) => c.toUpperCase()),
};
