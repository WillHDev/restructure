import Link from 'next/link';

//import React form 'react';

// class Home extends React.Component {
//     render() {
//         return <p>Hey!</p>
//     }
// }


//stateless fn'l
const Home = props => ( 
    <div>
    <p>Hey!</p>
<Link href="/Sell"><a>Sell</a></Link>
    </div>
);

export default Home;