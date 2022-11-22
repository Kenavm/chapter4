import {
    dateToTimestamp,
    debounce,
    formatDate,
    timestampToDate,
} from "./util.js";
import { genMockPosts } from "./mock.js";

/**
 * @typedef {object} Data
 * @property {Post[]} posts
 * @property {number} nextPostId
 * @property {DataStats} stats
 *
 * @typedef {object} DataStats
 * @property {number} totalPosts
 * @property {string | null} lastUpdatedAt
 */

/**
 * @type {Data}
 */
const DATA = {
    posts: [],
    nextPostId: 0,
    stats: {
        totalPosts: 0,
        lastUpdatedAt: null,
    },
};

window.UGLY_BLOG = DATA;

const STORAGE_KEY = "ugly-blog-posts";

/**
 * @param {Post} post
 * @returns {Post}
 */
export function addPost(post) {
    if (typeof post.id === "number") return;

    post.id = DATA.nextPostId++;
    DATA.posts.push(post);
    updateStats();

    storePostsDebounce();

    return post;
}

/**
 * @param {Post} post
 * @returns {Post}
 */
export function removePost(post) {
    const postIndex = findPostIndex(post);
    if (postIndex === -1) return;

    DATA.posts.splice(postIndex, 1);
    updateStats();

    setNextPostId();

    post.id = undefined;

    storePostsDebounce();

    return post;
}

/**
 * @param {Post} post
 * @returns {Post}
 */
export function updatePost(post) {
    const postIndex = findPostIndex(post);
    if (postIndex === -1) {
        post.id = undefined;
        return addPost(post);
    }

    DATA.posts[postIndex] = post;
    updateStats();

    storePostsDebounce();

    return post;
}

/**
 * @returns {DataStats}
 */
export function getStats() {
    return DATA.stats;
}

function updateStats() {
    const lastUpdatedAtDate = DATA.posts.reduce(
        (last, post) => {
            const date = timestampToDate(post.timestamp);
            if (!last) return date;
            return date - last > 0 ? date : last;
        },
        /** @type {Date | null} */
        (null),
    );

    const lastUpdatedAt =
        lastUpdatedAtDate &&
        dateToTimestamp(lastUpdatedAtDate);

    DATA.stats = {
        ...DATA.stats,
        totalPosts: DATA.posts.length,
        lastUpdatedAt,
    };
}

/**
 * @returns {Post[]}
 */
export function loadPosts() {
    const posts = getPostsFromStorage();
    if (posts.length === 0) {
        return genMockPosts().map(addPost);
    }

    DATA.posts = posts;
    setNextPostId();
    updateStats();

    return DATA.posts;
}

export function storePosts() {
    const json = JSON.stringify(DATA.posts);
    localStorage.setItem(STORAGE_KEY, json);
}

function getPostsFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
        return [];
    }

    try {
        return JSON.parse(raw);
    } catch (e) {
        console.error(
            "Failed parsing posts data from localStorage",
            e,
        );
        return [];
    }
}

function setNextPostId() {
    DATA.nextPostId = DATA.posts.reduce(
        (next, post) =>
            post.id >= next ? post.id + 1 : next,
        DATA.nextPostId,
    );
}

/**
 * @param {Post} post
 * @returns {number}
 */
function findPostIndex(post) {
    return DATA.posts.findIndex((p) => p.id === post.id);
}

function storePostsDebounce() {
    debounce(storePosts, 1000);
}

window.addEventListener("unload", storePosts);
