const path = require('path');
module.exports = {
  title: 'My BlogY',
  template: {
    dir: path.join(process.cwd(), 'templates', 'default'),
    public: path.join(process.cwd(), 'templates', 'default', 'public'),
    layout: 'layout'
  },
  ops: ['create', 'delete'],
  types: ['page', 'post'],
  post: {
    dir: `${process.cwd()}/data/posts`,
    timestamp: 'YYYY-MM-DD', // this is used to create post URL.
    limit: 5,
    excerpt: 600
  },
  page: {
    dir: `${process.cwd()}/data/pages`
  },
  data: {
    dir: `${process.cwd()}/data`
  },
  connection: {
    port: 3000
  },
  author: {
    name: 'Your Name',
    avatar: '/img/nodejs-logo.png'
  }
};
