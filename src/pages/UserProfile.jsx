import { useParams } from "react-router-dom";

function UserProfile() {
  //   console.log("useParams: ", useParams);

  const { id } = useParams();

  console.log("id: ", typeof id);

  let user = "User nummer: ";

  //   id är just nu en sträng, jag formaterar om det till en Number för att min if else sats ska fungera och vara mer läsbar.

  let idResult = Number(id);

  if (idResult === 23) {
    user += "Användare med id 23 visas just nu";
  } else {
    user += "Användare som INTE har id 23 visas just nu";
  }

  return (
    <h2>
      UserProfile: {id}
      <br></br>
      <br></br>
      <br></br>
      {user}
    </h2>
  );
}

export default UserProfile;
