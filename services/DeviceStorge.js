import { AsyncStorage } from 'react-native';

/**
 * ## DeviceStorage
 * ### helper class for storing and retrieving data stored locally on the device
 */
class DeviceStorage {

  /**
   * Initialize the class with a storage key - must be unique
   * @param {String} storage_Key key for adding / retrieving data
   */
  constructor(storage_Key) {
    this.storage_Key = '@' + storage_Key
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem(this.storage_Key)
      if(value !== null) {
        return JSON.parse(value)
      }
    } catch(e) {
      console.error(e)
      // throw e
    }
  }

  storeData = async (data) => {
    try {
      await AsyncStorage.setItem(this.storage_Key, JSON.stringify(data))
    } catch (e) {
      // saving error
      console.error(e)
      // throw e
    }
  }

  editData = async (data) => {
    try {
      await AsyncStorage.mergeItem(this.storage_Key, data)
    } catch (e) {
      console.error(e)
    }
  }

  deleteData = async () => {
    try {
      await AsyncStorage.removeItem(this.storage_Key)
    } catch (e) {
      console.error(e)
    }
  }
}

export const _userStorage = new DeviceStorage('user')