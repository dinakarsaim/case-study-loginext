import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaPhone,
  FaGlobe
} from "react-icons/fa";

const Card = (props) => {
    const { username, email, phone, name, website } = props.userData;

    const [like, setLike] = useState(false);

    console.log(username);

    const imageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}&mood=happy`;

  return (
    <div className="card">
        
        <img src={imageUrl} alt={`${username}'s avatar`} className="image" />
        <div className="info">
        <h3>{name}</h3>
        <p><FaEnvelope /> {email}</p>
        <p><FaPhone /> {phone}</p>
        <p><FaGlobe /> {website}</p>
        </div>

        <div className="actions">
            <span onClick={() => setLike(!like)}>
                {like ? <FaHeart className="icon liked" /> : <FaRegHeart className="icon heart" />}
            </span>
            <span onClick={props.editFunc}>
                <FaEdit className="icon" />
            </span>
            <span onClick={props.deleteFunc}>
                <FaTrash className="icon" />
            </span>
        </div>
    </div>
    );
};

export default Card;