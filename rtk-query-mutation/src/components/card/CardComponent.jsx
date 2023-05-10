import './card.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// rtkq
import { useDeleteArtistMutation } from '../../services/artistService';

const CardComponent = ({ artistData }) => {
  const [deleteArtist] = useDeleteArtistMutation();

  const handleDeleteArtist = (id) => {
    deleteArtist(id);
  };
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={artistData.image} alt={artistData.id} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>{artistData.firstname}</Card.Title>
        <Button variant="primary" style={{ margin: '2px' }}>
          <Link className="link" to={`/${artistData.id}`}>
            View Albums
          </Link>
        </Button>

        <Button
          variant="danger"
          style={{ margin: '2px' }}
          onClick={() => handleDeleteArtist(artistData.id)}
        >
          Delete Artist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
