import {
    loadPosts,
    addPost,
    updatePost,
    removePost,
    getStats,
} from "./data.js";
import {
    createPostElement,
    insertPostElement,
    updatePostElement,
} from "./post.js";
import {
    createNewPostForm,
    createEditPostForm,
} from "./form.js";
import {
    dateToTimestamp,
    err,
    formatDate,
    genErrMsgElementNotFound,
} from "./util.js";

function main() {
    const posts = loadPosts();

    // generatePostElements(posts);

    for (const post of posts) {
        const postEl = createPostElement(post);
        setupUpdateAndCancelForPostElement(postEl, post);
        insertPostElement(postEl);
    }

    const newPostForm = createNewPostForm({
        onCreatePost: (_formEl, post) => {
            post = addPost(post); // Add first so the post gets an ID
            const postEl = createPostElement(post);
            setupUpdateAndCancelForPostElement(
                postEl,
                post,
            );
            insertPostElement(postEl);
            updateStatsElements();
        },
    });

    const newPostEl = document.querySelector("#new-post");

    if (!newPostEl) {
        const msg = genErrMsgElementNotFound("#new-post");
        err(msg, false);
        throw new Error(msg);
    }

    newPostEl.appendChild(newPostForm);

    updateStatsElements();
}

/**
 * @param {HTMLElement} postEl
 * @param {Post} post
 */
function setupUpdateAndCancelForPostElement(postEl, post) {
    setupEditPostButton(postEl, post, {
        onUpdatePost: (postEl, updatedPost) => {
            updatePost(updatedPost);
            updatePostElement(postEl, updatedPost);
            updateStatsElements();
        },
    });
    setupDeletePostButton(postEl, post, {
        onDelete: (post) => {
            postEl.remove();
            removePost(post);
            updateStatsElements();
        },
    });
}

/**
 * @typedef {object} SetupEditPostButtonOpts
 * @property {(postEl: HTMLElement, post: Post) => void} onUpdatePost
 * @property {(postEl: HTMLElement) => void} onCancel
 *
 * @param {HTMLElement} postEl
 * @param {Post} post
 * @param {SetupEditPostButtonOpts}
 */
function setupEditPostButton(
    postEl,
    post,
    { onUpdatePost, onCancel },
) {
    const selector = `#post-edit-${post.id}`;
    const editBtnEl = postEl.querySelector(selector);

    if (!editBtnEl) {
        err(genErrMsgElementNotFound(selector));
        return;
    }

    editBtnEl.onclick = () => {
        postEl.hidden = true;

        const showPostEl = () => {
            editEl.remove();
            postEl.hidden = false;
        };

        /** @param {Post} newPost */
        const onClickSubmit = (newPost) => {
            post = {
                ...post,
                ...newPost,
                timestamp: dateToTimestamp(new Date()),
            };
            onUpdatePost && onUpdatePost(postEl, post);
            showPostEl();
        };

        const onClickCancel = () => {
            onCancel && onCancel(postEl);
            showPostEl();
        };

        const editEl = createEditPostForm(post, {
            onUpdatePost: onClickSubmit,
            onCancel: onClickCancel,
        });

        postEl.insertAdjacentElement("afterend", editEl);
    };
}

/**
 * @param {HTMLElement} postEl
 * @param {Post} post
 * @param {{ onDelete: (post: Post) => void }}
 */
function setupDeletePostButton(postEl, post, { onDelete }) {
    const selector = `#post-delete-${post.id}`;
    const deleteBtnEl = postEl.querySelector(selector);

    if (!deleteBtnEl) {
        err(genErrMsgElementNotFound(selector));
        return;
    }

    deleteBtnEl.onclick = () => {
        onDelete && onDelete(post);
    };
}

function updateStatsElements() {
    const stats = getStats();

    const totalPostsSelector = "#stats-total-posts";
    const lastUpdateSelector = "#stats-last-update";
    const totalPostsEl = document.querySelector(
        totalPostsSelector,
    );
    const lastUpdateEl = document.querySelector(
        lastUpdateSelector,
    );

    if (totalPostsEl) {
        totalPostsEl.innerText = stats.totalPosts;
    } else {
        err(genErrMsgElementNotFound(totalPostsSelector));
    }
    if (lastUpdateEl) {
        lastUpdateEl.innerText = stats.lastUpdatedAt
            ? formatDate(stats.lastUpdatedAt)
            : "-";
    } else {
        err(genErrMsgElementNotFound(lastUpdateSelector));
    }
}

main();
