export const register = async (data) => {
  try {
    console.log("Data", data);
    const result = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return result.json();
  } catch (exception) {
    console.log(exception);
  }
};

export const login = async (data) => {
  try {
    console.log("Data", data);
    const result = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json",
      },
    });
    return result.json();
  } catch (exception) {
    console.log(exception);
  }
};
