const submitButton = document.getElementById("submit-button");
const usernameInputField = document.getElementById("username");
const tweetInputField = document.getElementById("tweet");
const imageInputField = document.getElementById("image-upload");
const POSTS = [
  {
    author: "Linus Torvalds",
    avatar: "images/torvalds.png",
    post: "Abstraction sucks!",
  },
  {
    author: "Richard Stallman",
    avatar: "images/stallman.jpg",
    post: "I'm a GNUru!",
  },
  {
    author: "Manuel Vanek",
    avatar: "images/manuel.jpg",
    post: "JOoo Passt SCho!",
  },
];

const postsElement = document.querySelector("#posts");

function main() {
  addTweetAndImageToPostElement();
}

function addTweetAndImageToPostElement() {
  for (const post of POSTS) {
    createTweetContainerAndAddTweet(post);
  }
}
function createTweetContainerAndAddTweet(post) {
  let contentContainer = document.createElement("div");
  contentContainer.classList.add("container");
  let newPostElement = document.createElement("div");
  newPostElement.classList.add("tweet");
  let newImageContainer = document.createElement("div");

  newPostElement = addPostToHTMLElement(post, newPostElement);
  newImageContainer = addImageToHTMLElement(post.avatar, newImageContainer);
  contentContainer.appendChild(newImageContainer);
  contentContainer.appendChild(newPostElement);
  contentContainer.appendChild(addDeleteButton(`<button class ="delete-button" type="button" class="btn btn-secondary">Delete</button>`));
  
  postsElement.appendChild(contentContainer);
}
/*
function createImageContainerAndAddImage(post) {
  let newImageContainer = document.createElement("div");
  newImageContainer = addImageToHTMLElement(post.avatar, newImageContainer);
  postsElement.appendChild(newImageContainer);
}
*/
function addPostToHTMLElement(post, newPostElement) {
  newPostElement.innerText = post.author + ": \n" + post.post;
  return newPostElement;
}

function addImageToHTMLElement(image, newImageContainer) {
  newImageContainer.innerHTML = `<img src=${image}>`;
  return newImageContainer;
}

function addDeleteButton(string) {
  let div = document.createElement("div");
  div.innerHTML = string.trim();
  div.firstChild.addEventListener("click", deletePost);
  return div.firstChild;
}

function deletePost() {
  this.parentElement.remove();
}

submitButton.addEventListener("click", getNameTweetAndUpload);

function getNameTweetAndUpload() {
  let name = getUsername();
  let tweet = getTweet();
  let image = getUploadedImage();

  POSTS.push({ author: name, avatar: image, post: tweet });
  createTweetContainerAndAddTweet({ author: name, avatar: image, post: tweet });
}

function getUsername() {
  let name = usernameInputField.value;
  return name;
}

function getTweet() {
  let tweet = tweetInputField.value;
  return tweet;
}

function getUploadedImage() {
  let image = imageInputField.value;
  let regex = new RegExp(/^.*\\/);
  image = image.replace(regex, "images/");
  return image;
}

main();