import "./ProfileCard.css";

function ProfileCard({ name, role, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-img" />

      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>

      <button className="profile-btn">Follow</button>
    </div>
  );
}

export default ProfileCard;
