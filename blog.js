document.addEventListener('DOMContentLoaded', function () {
    const blogPosts = [
        {
            title: 'Discover the Art of Mixology',
            content: 'In this blog post, we delve into the world of mixology and share some exciting cocktail recipes that you can try at home. Cheers to creativity and fine cocktails!'
        },
        {
            title: 'Exploring Rare Whiskies',
            content: 'Join us on a journey through the world of rare and aged whiskies. We'll introduce you to some of the most sought-after bottles and provide insights into their unique flavors.'
        },
        {
            title: 'Pairing Wine with Cuisine',
            content: 'Wine enthusiasts, this one\'s for you! Learn how to pair the perfect wine with your favorite dishes, and elevate your dining experience to new heights.'
        },
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    // Dynamically create and display blog posts
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogPostsContainer.appendChild(postElement);
    });
});
