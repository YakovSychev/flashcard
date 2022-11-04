const React = require('react');
const Layout = require('./Layout');

function CardPage({ quizzes, topic }) {
  return (
    <Layout quizzes={quizzes}>
      <div className="js-answer-f">

        <div className="row row-cols-2 row-cols-md-2 g-4">
          {quizzes.map((quiz) => (
            <form
              className="js-card"
              method="POST"
              id={quiz.id}
            >
              <div className="js-answer card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{quiz.question}</h5>
                  <input type="text" className="form-control" name="answer" placeholder="answer" />
                  <button type="submit" className="btn btn-outline-secondary">ok</button>
                </div>
                <p className="right-answer" />
              </div>
            </form>
          ))}
        </div>
      </div>
      <script defer src="/js/cardPage.js" />
    </Layout>
  );
}

module.exports = CardPage;
