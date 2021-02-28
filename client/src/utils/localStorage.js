class LocalStorage {
  constructor() {
    this.nameStorage = 'cloud-storage'
  }

  set(data) {
    localStorage.setItem(this.nameStorage, JSON.stringify(data))
  }

  get() {
    const data = localStorage.getItem(this.nameStorage)
    if (data !== null) return JSON.parse(data)
  }

  remove() {
    localStorage.removeItem(this.nameStorage)
  }
}

export const ls = new LocalStorage()
