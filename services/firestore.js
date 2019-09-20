import firebase, { firestore } from 'firebase';

/**
 * ## Firestore Service
 * firestore crud operations for specified collection path
 */
class FirestoreService {
  /**
   * initialize the class with a collection name
   * @param {String} collectionName specified name for firestore collection
   */
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.collection = firestore().collection(collectionName);
  }
  /**
   * add a new document to the firestore collection
   * @param {object} data data to add to firestore
   */
  async create(data) {
    try {
      await this.collection.add(data);
    } catch (e) {
      this.handleError(e);
    }
  }
  /**
   * get the specified document from firestore
   * @param {String} id firestore document id
   * @returns {firestore.DocumentSnapshot}
   */
  async get(id) {
    try {
      const doc = await this.collection.doc(id).get();
      return doc;
    } catch (e) {
      this.handleError(e);
    }
  }
  /**
   * 
   * @param {String} id firestore document id
   * @param {Object} data new data to set in the document
   */
  async update(id, data) {
    try {
      await this.collection.doc(id).update(data);
    } catch (e) {
      this.handleError(e);
    }
  }
  /**
   * delete the firestore document from the collection
   * @param {String} id 
   */
  async delete(id) {
    try {
      await this.collection.doc(id).delete();
    } catch (e) {
      this.handleError(e);
    }
  }
  /**
   * handle the error from the firestore operation
   * @param {Error} e firestore error
   * @returns {Error} firestore error
   */
  handleError(e) {
    console.error('error adding', this.collectionName, e);
  }
}

/**
 * ## Post Service
 * post crud operations
 */
export const _postService = new FirestoreService('Posts');