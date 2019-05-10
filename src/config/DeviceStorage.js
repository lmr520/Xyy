import React, {
    AsyncStorage
} from 'react-native';

class DeviceStorage {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     */

    static get(key) {

            return   AsyncStorage.getItem('key', (error, result) => {
            let value = "读取数据成功："
            let obj = JSON.parse(result);
            if (error) {
                value = "读取数据失败："
            }
            alert(value + obj)
            return obj;
        });
        // return AsyncStorage.getItem(key).then((value) => {
        //     const jsonValue = JSON.parse(value);
        //     return jsonValue;
        // });
    }


    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
    static save(key, value) {
        return AsyncStorage.setItem(key, "afhdahfhah", (error) => {
            let value = "保存数据成功："
            if (error) {
                value = "保存数据失败："
            }
            alert(value + key)
        });;
    }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}

export default DeviceStorage;