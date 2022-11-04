const React = require('react');
const Layout = require('./Layout');

const Main = ( { title, topics }) => {
return (
<Layout title={title}>

    <ul className=''>
        { topics.map((topic) => (
        <li id={topic.id} key={topic.id}>
            <h3>{topic.title}</h3>
            <a href={`/cards/${topic.id}`}></a>
        </li>
        ))}
    </ul>
    {/* <h1>Hello</h1> */}
</Layout>
);
};

module.exports = Main;