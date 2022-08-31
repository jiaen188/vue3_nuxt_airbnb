class DB {
  private dbName: string
  private db:any
  constructor (dbName: string) {
    this.dbName = dbName
  }

  // 打开数据库
  public openStore (storeName: string, keyPath:string, indexs?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 1)
    request.onsuccess = (event: any) => {
      console.log('success 数据库打开成功', event)
      this.db = event.target.result
    }
    request.onerror = (event) => {
      console.log('onerror 数据库打开失败', event)
    }
    request.onupgradeneeded = (event) => {
      console.log('onupgradeneeded 数据库升级失败', event)
      const { result }:any = event.target
      const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
      if (indexs && indexs.length > 0) {
        indexs.map((v:string) => {
          store.createIndex(v, v, { unique: false })
        })
      }
      store.transaction.oncomplete = (e: any) => {
        console.log('oncomplete 创建对象成功', e)
      }
    }
  }

  // 新增/修改数据库数据
  updateItem (storeName: string, data: any) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.put({ ...data, updateTime: new Date().getTime() })
    request.onsuccess = (event: any) => {
      console.log('数据写入成功', event)
    }
    request.onerror = (event: any) => {
      console.log('数据写入失败', event)
    }
  }

  // 新增/修改数据库数据
  deleteItem (storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.delete(key)
    request.onsuccess = (event: any) => {
      console.log('数据删除成功', event)
    }
    request.onerror = (event: any) => {
      console.log('数据删除失败', event)
    }
  }

  // 查询所有数据
  getList (storeName: string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.getAll()
    request.onsuccess = (event: any) => {
      console.log('查询所有数据成功', event, event.target.result)
    }
    request.onerror = (event: any) => {
      console.log('查询所有数据失败', event)
    }
  }

  // 查询某一条数据
  getItem (storeName: string, key: number | string) {
    const store = this.db.transaction(storeName).objectStore(storeName)
    const request = store.get(key)
    request.onsuccess = (event: any) => {
      console.log('查询某一条数据成功', event, event.target.result)
    }
    request.onerror = (event: any) => {
      console.log('查询某一条数据失败', event)
    }
  }
}

export default DB
