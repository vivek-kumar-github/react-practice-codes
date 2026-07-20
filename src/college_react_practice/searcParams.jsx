import { useSearchParams } from "react-router-dom";

function Profile() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Profile;