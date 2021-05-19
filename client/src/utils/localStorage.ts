class LocalStorage {
  nameStorage: string

  constructor() {
    this.nameStorage = 'cloud-storage'
  }

  set(data: any) {
    localStorage.setItem(this.nameStorage, JSON.stringify(data))
  }

  get() {
    const data = localStorage.getItem(this.nameStorage)

    if (data !== null) return JSON.parse(data)
    else return null
  }

  remove() {
    localStorage.removeItem(this.nameStorage)
  }
}

export const ls = new LocalStorage()
