import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

//from root directory, points towards posts file
const postDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent); // matter returns two keys within an object, data and content

  const postSlug = fileName.replace(/\.md$/, ''); //replaces the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// reads all the posts in the post folder then sorts
export function getAllPosts() {
  //grabs all within posts in a blocking fashion
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}
