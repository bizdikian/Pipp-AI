export const mockData = {
  users: [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ],
  products: [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 599.99 }
  ],
  posts: [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', userId: 1 },
    { id: 2, title: 'Second Post', content: 'This is some other content.', userId: 2 }
  ],
  journeys: [
    { id: 1, userId: 1, steps: ['signup', 'profile setup', 'first purchase'] },
    { id: 2, userId: 2, steps: ['signup', 'profile setup'] }
  ],
  wallet: [
    { userId: 1, balance: 1000 },
    { userId: 2, balance: 500 }
  ]
};