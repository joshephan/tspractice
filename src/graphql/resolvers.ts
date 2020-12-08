export default {
  Query: {
    greet: () => {
      return "Hello from GraphQl side";
    },
    users: () => {
      return fetchData();
    },
    musers: () => {
      return MUsers.find();
    },
  },
};
