export class Post {
  /**
   * ### Post model
   * @param {String} id firestore doc id
   * @param {Object} data firestore doc data
   */
  constructor(id, data) {
    this.id = id;
    this.text = data.text;
    this.authorId = data.authorId;
    this.createdAt = data.createdAt;
  }
}