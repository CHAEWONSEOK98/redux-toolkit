import './home.css';
import { Button } from 'react-bootstrap';

//components
import CardComponent from '../../components/card/CardComponent';

//rtkq
import {
  useFetchArtistListQuery,
  useAddArtistMutation,
} from '../../services/artistService';

const Home = () => {
  const { data, isLoading, error } = useFetchArtistListQuery();
  const [addArtist] = useAddArtistMutation();

  const renderList = data
    ? data.map((item) => {
        return <CardComponent key={item.id} artistData={item} />;
      })
    : null;

  const handleAddArtist = () => {
    addArtist();
  };
  return (
    <section className="home-container">
      <div className="title-container">
        <h1>Artists</h1>
        <Button variant="primary" onClick={handleAddArtist}>
          Add Artist
        </Button>
      </div>
      <div className="artist-list">
        {error ? (
          <>There is an error</>
        ) : isLoading ? (
          <>Loading ...</>
        ) : data ? (
          <>{renderList}</>
        ) : null}
      </div>
    </section>
  );
};

export default Home;
