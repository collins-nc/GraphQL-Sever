// In-memory data store
const users = require("../MOCK_DATA.json");

const getByGender = (args) => {
  if (args.gender) {
    let gender = args.gender;
    return users.filter((user) => user.gender === gender);
  }
  return users;
};
const getById = (args) => {
  if (args.id) {
    let id = args.id;
    return users.filter((user) => user.id === id)[0];
  }
};
const updateAddress = ({ id, address }) => {
  users.map((user) => {
    if (user.id === id) {
      user.address = address;
    }
  });
  return users.filter((user) => user.id === id)[0];
};
const insertData = ({
  first_name,
  last_name,
  email,
  gender,
  phone_no,
  address,
}) => {
  let size = users.length;
  let newData = {
    id: size + 1,
    first_name,
    last_name,
    email,
    gender,
    phone_no,
    address,
  };
  users.push(newData);
  return users;
};

module.exports = { getByGender, getById, updateAddress, insertData };
