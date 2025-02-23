//Heading
const heading = document.createElement("h1");
heading.textContent = "My Blogs";

//document.body.style.backgroundColor = "cyan";

//ul
const ul_blog_list = document.createElement("ul");
ul_blog_list.className = "blog-list";

//ul_blog_list.style.backgroundColor = "white";

function addBlog(blog) {
  //Create a new div element with the class blog-post.
  const div_blog_post = document.createElement("div");
  div_blog_post.className = "blog-post";

  //Create a div element with the class blog-header.
  const div_blog_header = document.createElement("div");
  div_blog_header.className = "blog-header";

  //Create an h2 element with the class blog-title and set its text to the title property of the blog object.
  const h2_blog_title = document.createElement("h2");
  h2_blog_title.className = "blog-title";
  h2_blog_title.textContent = blog.title;

  //Create a p element with the class blog-date and set its text to the date property of the blog object.
  const p_blog_date = document.createElement("p");
  p_blog_date.className = "blog-date";
  p_blog_date.textContent = blog.date;

  //Create a p element with the class blog-content and set its text to the content property of the blog object.
  const p_blog_content = document.createElement("p");
  p_blog_content.className = "blog-content";
  p_blog_content.textContent = blog.content;

  //Append the h2 (blog title) and p (blog date) elements to the div with the class blog-header.

  div_blog_header.append(h2_blog_title, p_blog_date);

  //Append the div with the class blog-header to the div with the class blog-post.

  div_blog_post.append(div_blog_header);

  //Append the p (blog content) to the div with the class blog-post.

    div_blog_post.append(p_blog_content);
    
    

  //Append the entire div with the class blog-post to the ul element with the class blog-list.

    ul_blog_list.append(div_blog_post);
    
    // Add a horizontal line after each blog post
    // const hr = document.createElement("hr");
    // ul_blog_list.append(hr);
    
}

const blog_data = [
  {
    title: "First Blog Post",
    date: "January 1, 2022",
    content: "this is content of the first blog page.",
  },
  {
    title: "Second Blog Post",
    date: "February 1, 2022",
    content: "this is content of the Second blog page.",
  },
  {
    title: "Third Blog Post",
    date: "March 1, 2022",
    content: "this is content of the third blog page.",
  },
];

blog_data.map((blog) => {
  addBlog(blog);
});

document.body.append(heading, ul_blog_list);

// const blogPosts = document.querySelectorAll(".blog-post");
// console.log(`Number of blog posts: ${blogPosts.length}`); 

