import {
  useNavigate,
  // NavLink
} from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  // Vi simulerar att vi får data från en databas endera via egen backend eller ett API
  const allUsers = [
    { name: "mandus", id: 1 },
    { name: "Per", id: 2 },
    { name: "Pele", id: 23 },
  ];

  return (
    <>
      <h2>Users</h2>
      {/* <p>{allUsers[0].name}</p>
      <p>{allUsers[1].name}</p>
      <p>{allUsers[2].name}</p> */}
      <section>
        {allUsers.map((user) => (
          <div key={user.id}>
            <p>
              {user.name}, {user.id}
              <button onClick={() => navigate(`/users/${user.id}`)}>
                Gå till din profilsida
              </button>
            </p>
            {/* <NavLink to={`/users/${user.id}`}>Gå till {user.name}</NavLink> */}
          </div>
        ))}
      </section>
    </>
  );
}

export default Users;
