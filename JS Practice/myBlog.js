//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');
    
      
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
      newBox.appendChild(newBlogPost);
      

    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

  // create a new div with className blog-buttons and append it to newBox

  
  const div_blog_buttons = document.createElement("div");
div_blog_buttons.className = "blog-buttons";
  
  newBox.append(div_blog_buttons);
  
  
  //Create moveup button with class blog-button and move-up
  
  const move_up_button=document.createElement("button");
  move_up_button.classList.add("blog-button", "move-up");
  move_up_button.textContent="Move Up";
  
  div_blog_buttons.append( move_up_button);
  
  
  //Add event listerner to moveup button
  
  move_up_button.addEventListener("click",function(){
      const prevPost = newBox.previousElementSibling;
if (prevPost) {
  blogList.insertBefore(newBox, prevPost);
}
  })
  
  

  //Create movedown button with class blog-button and move-down
  
  const move_down_button=document.createElement("button");
  move_down_button.classList.add("blog-button", "move-down");
  move_down_button.textContent="Move Down";
  
  div_blog_buttons.append( move_down_button);
  
  
  
  //Add event listerner to movedown button
  
    move_down_button.addEventListener("click", function () {
        const nextPost = newBox.nextElementSibling;
        if (nextPost) {
            blogList.insertBefore(nextPost, newBox);
        }
    })


  //Create delete button with class blog-button and delete
  
  const delete_button=document.createElement("button");
  delete_button.classList.add("blog-button", "delete");
  delete_button.textContent="Delete";
  
  div_blog_buttons.append(delete_button);
  
  
  
  //Add event listerner to delete button
      
  delete_button.addEventListener("click", () => {
newBox.remove();
});

    blogList.appendChild(newBox);

  // Add event listeners to the buttons
}

const blogData = [
{
title: 'First Blog Post',
date: 'January 1, 2022',
content: 'This is the content of the first blog post.'
},
{
title: 'Second Blog Post',
date: 'February 1, 2022',
content: 'This is the content of the second blog post.'
},
{
title: 'Third Blog Post',
date: 'March 1, 2022',
content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array