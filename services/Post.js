import { FirestoreService } from './Firestore';
import { Post } from '../Models/Post';
const postsCollection = 'Posts';
const _postService = new FirestoreService(postsCollection);

/**
 * get all posts from firestore collection
 * @return {Post[]} post array
 */
export async function _getAllPosts() {
  const docs = await _postService.getAll()
  var posts = [];
  docs.forEach(doc => {
    posts.push(new Post(doc.id, doc.data()))
  })
  return posts;
}
/**
 * add a new document to the posts collection in firestore
 * @param {Post} data 
 */
export async function _createPost(data) {
  await _postService.create(data);
}
/**
 * delete one post
 * @param {String} id 
 */
export async function _deletePost(id) {
  await _postService.delete(id);
}
/**
 * update one post with new data
 * @param {String} id post id
 * @param {Object} data new data to overwrite
 */
export async function _updatePost(id, data) {
  await _postService.update(id, data)
}