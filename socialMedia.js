//Do not alter the starter code.
function main(){
    //Create your class "User" here with all the properties and methods
    
    //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
      
    class User{
        #name;
        #email;
        #password;
        #post;

        constructor(name,email,password){
            this.#name=name;
            this.email=email;
            this.#password=password;
            this.#post=[];
        }
        get name() {
            return this.#name;
        }
    
        set name(newName) {
            this.#name = newName;
        }
    
        // Getter and Setter for email
        get email() {
            return this.#email;
        }
    
        set email(newEmail) {
            
            this.#email = newEmail;
        }
    
        // Getter and Setter for password
        get password() {
            return this.#password;
        }
    
        set password(newPassword) {
            
            this.#password = newPassword;
        }
    
        addPost(post){
          this.#post.push(post);
        }

        deletePost(postToDelete){
            const index = this.#post.findIndex(post => post === postToDelete);
            this.#post.splice(index, 1);
        }
        displayPosts() {
            console.log(`Posts by ${this.name}:`);
            for (let i = 0; i < this.#post.length; i++) {
                console.log(`- ${this.#post[i].title}`);
            }
        }
    }


    class Post extends User{
       #title;
       #content;
       #date;
       #likeCount;

       constructor(name, email, password, title, content, date ){
       super(name,email,password);
       this.#title=title;
       this.#content=content;
       this.#date=date;
       this.#likeCount=0;
       }
    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    // Getter and Setter for content
    get content() {
        return this.#content;
    }

    set content(newContent) {
        this.#content = newContent;
    }

    // Getter and Setter for date
    get date() {
        return this.#date;
    }

    set date(newDate) {
        this.#date = newDate;
    }

    
    get likeCount() {
        return this.#likeCount;
    }

       addLike(){
        this.#likeCount++;
       }

       displayDetails(){
        let obj={
            Owner: this.name,
            Title: this.#title,
            Content: this.#content,
            Date: this.#date,
            Likes:this.#likeCount
        }
    //     console.log("Owner:", obj.Owner);
    // console.log("Title:", obj.Title);
    // console.log("Content:", obj.Content);
    // console.log("Date:", obj.Date);
    // console.log("Likes:", obj.Likes);
    console.log( obj.Owner);
    console.log( obj.Title);
    console.log( obj.Content);
    console.log( obj.Date);
    console.log( obj.Likes);

       }
    }
    
    var a;
    console.log(a);
    let a=10;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const user1 = new User("John", "john@example.com", "password123");
      const post1 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My first post",
        "Lorem ipsum dolor sit amet",
        "2021-01-01"
      );
      const post2 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My second post",
        "Consectetur adipiscing elit",
        "2021-01-02"
      );
      
      user1.addPost(post1);
      user1.addPost(post2);
      
      post1.addLike();
      post1.addLike();
      
      user1.displayPosts();
      // Output:
      // Posts by John:
      // - My first post
      // - My second post
      
      post1.displayDetails();
      // Output:
      // Owner: John
      // Title: My first post
      // Content: Loremipsum dolor sit amet
      // Date: 2021-01-01
      // Likes: 2
      return {User,Post};
    }
    main();