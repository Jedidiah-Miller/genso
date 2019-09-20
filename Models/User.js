export default class User {
  /**
   * ### User model
   * @param {String} uid firestore doc id
   * @param {Object} data firestore doc data
   */
  constructor(uid, data) {
    this.uid = uid;
    this.userName = data.userName;
    this.createdAt = data.createdAt;
    // this.devices = data.devices;
  }
}