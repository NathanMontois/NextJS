import axios from 'axios';
import Link from 'next/link'
import Layout from '../components/layout';

const Home = ({ scenarios, error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Layout>
      <div>
        <div>
          <h1>
            Notre entreprise d'escape games Zombies vous propose des épreuves à thème que vous
            reconnaîtrez sûrement, mais serez-vous prêts à les surmonter ?
          </h1>
        </div>
        <div style={{ padding: 50 }}>
          <p>
            Basés au 85 Rue Victor Hugo, nous vous offrons des tarifs réduits si vous arrivez
            à convaincre vos amis de vous accompagner dans l'une de ces trois salles :
          </p>
          <ul>
            {scenarios.data.slice(0, 3).map(scenario => (
              <li key={scenario.id}>{scenario.attributes.title}</li>
            ))}
          </ul>
          <Link
            href={{
              pathname: '/posts',
              query: { search: scenarios }
            }}>Salles</Link>
        </div>
      </div>
    </Layout>
  );
}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/scenarios');
    const scenarios = res.data;
    console.log(scenarios);
    return { scenarios };
  } catch (error) {
    return { error };
  }
};

export default Home;