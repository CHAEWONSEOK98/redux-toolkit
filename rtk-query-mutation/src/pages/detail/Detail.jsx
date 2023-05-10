import './detail.css';
import { Accordion, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//rtkq
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} from '../../services/albumService';

const Detail = () => {
  const { artistId } = useParams();

  // fetch the albums based on artist id
  const { data, isLoading, error } = useFetchAlbumsQuery(artistId);

  const [addAlbum] = useAddAlbumMutation();
  const [deleteAlbum] = useDeleteAlbumMutation();

  const handleAddAlbum = (id) => {
    addAlbum(id);
  };

  const handleDeleteAlbum = (albumId) => {
    deleteAlbum(albumId);
  };

  return (
    <section className="detail-container">
      <h1>Album List</h1>
      <Button
        variant="primary"
        style={{ marginBottom: '1rem', alignSelf: 'flex-end' }}
        onClick={() => handleAddAlbum(artistId)}
      >
        Add Album
      </Button>
      {error ? (
        <>Something went wrong!</>
      ) : isLoading ? (
        <>Loading ...</>
      ) : data.length > 0 ? (
        <Accordion>
          {data.map((item) => {
            return (
              <div className="accordion-div" key={item.id}>
                <Button
                  variant="danger"
                  style={{
                    margin: '1rem',
                    width: '15%',
                    fontSize: '0.8rem',
                    alignSelf: 'flex-start',
                  }}
                  onClick={() => handleDeleteAlbum(item.id)}
                >
                  Delete Album
                </Button>
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            );
          })}
        </Accordion>
      ) : null}
    </section>
  );
};

export default Detail;
