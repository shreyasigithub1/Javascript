// The code given below is for one object refactor the code it for using the JSON Data.
let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
    image: "https://files.codingninjas.in/image2-28694.jpg",
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
    image: "https://files.codingninjas.in/oip-28704.jpg",
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
    image: "https://files.codingninjas.in/th-2-28706.jpg",
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
    image: "https://files.codingninjas.in/image1-28708.jpg",
  },
];

// Listen for form submission
const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  

  // Get post content
  const post_content = document.getElementById("postInput").value.trim();
  console.log(post_content);

  // Get image file (if any)
  const post_image = document.getElementById("imageInput");
  const imageFile = post_image.files.length > 0 ? post_image.files[0] : null;
  const imageURL = imageFile ? URL.createObjectURL(imageFile) : "";

  
  // Create new post object
  const new_post = {
    id: postsData.length + 1,
    author: "You", // Set the author value
    content: post_content,
    likes: 0,
    comments: [],
    image: imageURL,
  };

  // Push new post to array & render it
  postsData.push(new_post);
  renderPosts(new_post);
  console.log(postsData);

  // Clear input fields after submission
  document.getElementById("postInput").value = "";
  document.getElementById("imageInput").value = "";
  document.getElementById("authorInput").value = ""; // Clear the author input field as well
});

//Object destructuring
postsData.forEach((post) => {
  renderPosts(post);
});

// Function to render the post1 object on the screen.
function renderPosts(post) {
  let { id, author, content, likes, comments, image } = post;
  // Get the container where the post will be added.
  const div_class_posts = document.getElementById("posts");

  // Clear any existing content in the posts container.

  //div_class_posts.innerHTML = "";

  // Create a new div element for the post and set its class.

  const div_class_post = document.createElement("div");
  div_class_post.className = "post";

  // Create an h3 element for the author's name and set its text content.
  const h3Element = document.createElement("h3");
  h3Element.textContent = author;

  // Create an img element for the post's image and set its source and alt text.

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = "Alternative text for the image";

  // Create a p element for the post's content and set its text content.
  const pElement = document.createElement("p");
  pElement.textContent = content;

  // Create a button element for "Like" and set its text content.
  const likeButton = document.createElement("button");
  likeButton.textContent = "Like";
  likeButton.classList.add("like-button");
  //Add eventListerner here to update the likes.
  likeButton.addEventListener("click", function () {
    likes++;
    likeButton.style.backgroundColor = "red";
    likeButton.disabled = true;
    div_class_post_footer.textContent = `Likes: ${likes} Comments: ${comments.length}`;
  });

  // Create an input element for writing comments and set its type and placeholder.
  const InputElement_comment = document.createElement("input");
  InputElement_comment.type = "text";
  InputElement_comment.placeholder = "Comment here...";

  // Create a button element for "Comment" and set its text content.

  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";
  commentButton.classList.add("comment-button");

  //Create eventListener here for the comment button
  commentButton.addEventListener("click", function () {
    comments.push(InputElement_comment.value);
    div_class_post_footer.textContent = `Likes: ${likes} Comments: ${comments.length}`;

    div_class_comments_container.innerHTML = "";

    comments.forEach((i) => {
      const comment_p_element = document.createElement("p");
      comment_p_element.textContent = i;
      div_class_comments_container.append(comment_p_element);
    });
  });

  // Create a div element for the post footer and set its class and text content.

  const div_class_post_footer = document.createElement("div");
  div_class_post_footer.className = "post-footer";
  div_class_post_footer.textContent = `Likes: ${likes} Comments: ${comments.length}`;

  // Create a div element for the comments container and set its class.
  // Initially, set its display style to 'none' to hide it.

  const div_class_comments_container = document.createElement("div");
  div_class_comments_container.className = "comments-container";
  div_class_comments_container.style.display = "none";

  // For each comment in the comments array, create a p element and append it to the comments container.

  comments.forEach((i) => {
    const comment_p_element = document.createElement("p");
    comment_p_element.textContent = i;
    div_class_comments_container.append(comment_p_element);
  });

  // Append all created elements to the post container.
  div_class_post.append(
    h3Element,
    imageElement,
    pElement,
    likeButton,
    InputElement_comment,
    commentButton,
    div_class_post_footer,
    div_class_comments_container
  );

  // Add a click event listener to toggle the visibility of commentsContainer.
  div_class_post_footer.addEventListener("click", function () {
    if (div_class_comments_container.style.display === "none") {
      div_class_comments_container.style.display = "block";
    } else {
      div_class_comments_container.style.display = "none";
    }
  });

  // Append the post element to the posts container.
  div_class_posts.append(div_class_post);
}

// Call the renderPosts function to display the post on the screen.

//renderPosts();
