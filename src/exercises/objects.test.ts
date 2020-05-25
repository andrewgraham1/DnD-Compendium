describe("Objects", () => {
  test("get a particular property", () => {
    const input = {
      hello: "world",
    };

    const result = input.hello;

    expect(result).toEqual("world");
  });

  test("get a property when the key can be anything", () => {
    const input = {
      hello: "world",
      how: "you doin",
    };

    const key1 = "hello";
    const result1 = input[key1];
    const result2 = input["how"];

    expect(result1).toEqual("world");
    expect(result2).toEqual("you doin");
  });

  test("get the keys of an object", () => {
    const input = {
      hello: "world",
      how: "you doin",
    };

    const result = Object.keys(input);

    expect(result).toEqual(["hello", "how"]);
  });

  test("get values", () => {
    const input = {
      hello: "world",
      how: "you doin",
    };

    const result = Object.values(input);

    expect(result).toEqual(["world", "you doin"]);
  });

  test("change a property in place", () => {
    const user = {
      name: "Andrew",
      age: 24,
    };

    user.age = 25;

    expect(user).toEqual({ name: "Andrew", age: 25 });
  });

  test("change a property on a copy of the object", () => {
    const user = {
      name: "Andrew",
      age: 24,
    };

    const result = {
      ...user,
    };

    expect(result).toEqual({ name: "Andrew", age: 25 });
  });

  test("taking only certain things from an object", () => {
    const user = {
      id: 0,
      name: "Andrew",
      age: 24,
      address: "",
      email: "",
    };

    const { id, ...rest } = user;
  });
});
