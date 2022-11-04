const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

function Main({ title, topics }) {
  return (
    <Layout title={title} topics={topics}>
      <Navbar />
      <h3>All topics:</h3>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {topics.map((topic) => (
          <div key={topic.id} className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{topic.title}</h5>
              <a href={`/cards/${topic.id}`} className="btn btn-outline-secondary">go to the hell</a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
