import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <Link className="link" to={`/post/${post.id}`}>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
