import axios from "axios";

const API = "http://localhost:5000/api/contacts";

const authHeader = () => {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getContacts = async () => {
  const res = await axios.get(API, authHeader());
  return res.data;
};

export const addContact = async (data) => {
  const res = await axios.post(API, data, authHeader());
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await axios.delete(`${API}/${id}`, authHeader());
  return res.data;
};