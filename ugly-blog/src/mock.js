import { dateToTimestamp } from "./util.js";

/**
 * @type {Exclude<Post, "id">[]}
 */
const MOCK_POSTS = [
    {
        title: "Hello World",
        author: "Noah",
        timestamp: dateToTimestamp(new Date()),
        body: "This is my first post! Lorem ipsum",
    },
];

/**
 * @returns {Omit<Post, "id">[]}
 */
export function genMockPosts(totalMockPosts = 5) {
    while (MOCK_POSTS.length < totalMockPosts) {
        MOCK_POSTS.push(genMockPost());
    }
    return MOCK_POSTS;
}

function genMockPost() {
    const pick = (arr) =>
        arr[Math.floor(Math.random() * arr.length)];

    const post = {
        title: pick([
            "Post",
            "Hello World",
            "First",
            "Second",
            "Cool Post",
            "New Feature",
            "Release",
            "How To",
            "Guide",
            "Walkthrough",
            "Review",
        ]),
        author: pick([
            "Noah",
            "nr",
            "User",
            "Guest",
            "anonymous",
        ]),
        timestamp: dateToTimestamp(new Date()),
        body: pick([
            "Look at me!\nI'm another post",
            "Cool Post right here",
            "Filler description is written here\nover many lines\nFiller.",
            "This is how you learn a new skill:\n1) learn\n2) practice\n3) repeat",
            "Amet saepe ipsa perspiciatis voluptates.",
            "Dolor error a aperiam mollitia corporis placeat. Quidem adipisicing iste",
            "Dolor fugit saepe reprehenderit ut earum Sunt aliquam dolore iusto vel eos. Ut dolore ipsam.",
        ]),
    };

    return post;
}
