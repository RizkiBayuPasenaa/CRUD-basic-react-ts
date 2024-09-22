import Button from "../components/Button";

interface CardProps {
  imgURL: string;
  title: string;
  deskripsi: string;
  harga: number;
  onDelete: () => void;
  onEdit: () => void; 
}

function Card({ imgURL, title, deskripsi, harga, onDelete, onEdit }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={imgURL} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{deskripsi}</p>
        <p>{harga}</p>
      </div>
      <div className="card-footer">
        <Button type="button" onClick={onEdit}>Edit</Button>
        <Button type="button" onClick={onDelete}>Delete</Button>  
      </div>
    </div>
  );
}

export default Card;
