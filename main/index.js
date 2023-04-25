const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
};

const fetchTodo = async () => {
  const res = await fetch("https://jsonplaceholder..typicode.com/todos/2");
  return await res.json();
};

const handleResult = (result) => {
  if (result.status === "rejected") {
    console.error(result.reason);
  } else {
    console.error(result.value);
  }
};
const fetchData = async () => {
  const [usersResult, todoResult] = await Promise.allSettled([
    fetchUser(),
    fetchTodo(),
  ]);
  handleResult(usersResult);
  handleResult(todoResult);
};

fetchData();
