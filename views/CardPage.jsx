const React = require('react');
const Layout = require('./Layout');

function CardPage({ quizzes }) {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <input type="text" />
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = CardPage;
