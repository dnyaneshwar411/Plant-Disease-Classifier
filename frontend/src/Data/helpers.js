export const setLocalItem = (name, value) => localStorage.setItem(name, JSON.stringify(value))

export const getLocalItem = (name) => JSON.parse(localStorage.getItem(name));