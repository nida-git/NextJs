export default async function UsersPage() {

    const response = await fetch("http://localhost:3000/api/v1/signup")
    const data = await response.json();
    console.log(data)
    
  return (
    <div>
      <h1>Users Page</h1>
      {/* {data.username} */}
    </div>
  );
}