export function fetchContacts () {
  return new Promise((resolve, reject) => global.setTimeout(() => resolve([
    { id: 0, name: "John", friend: false },
    { id: 1, name: "Lilian", friend: true },
    { id: 2, name: "Thomas", friend: true },
    { id: 3, name: "Bruno", friend: true },
    { id: 4, name: "Nicolas", friend: true }
  ]), 500))
}
