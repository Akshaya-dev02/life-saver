"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

import {
  getContacts,
  addContact,
  deleteContact,
} from "@/services/contactService";

export default function Contacts() {

  const [contacts, setContacts] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    relationship: "",
  });

  const loadContacts = async () => {
    try {
      const data = await getContacts();

      setContacts(
        Array.isArray(data)
          ? data
          : data.contacts || []
      );

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Unable to load contacts"
      );

    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const saveContact = async (e) => {

    e.preventDefault();

    try {

      await addContact(form);

      toast.success("Emergency Contact Added");

      setForm({
        fullName: "",
        phone: "",
        relationship: "",
      });

      loadContacts();

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Failed to save contact"
      );

    }
  };

  const remove = async (id) => {

    try {

      await deleteContact(id);

      toast.success("Contact Deleted");

      loadContacts();

    } catch {

      toast.error("Delete Failed");

    }

  };

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-10">

          {/* Header */}

          <motion.div

            initial={{ opacity: 0, y: -30 }}

            animate={{ opacity: 1, y: 0 }}

          >

            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              👥 Emergency Contacts

            </h1>

            <p className="text-slate-400 mt-3">

              Store trusted contacts that will receive emergency alerts.

            </p>

          </motion.div>

          {/* Form */}

          <motion.div

            initial={{ opacity: 0, y: 40 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: .2 }}

            className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"

          >

            <h2 className="text-2xl font-semibold mb-6">

              ➕ Add New Contact

            </h2>

            <form
              onSubmit={saveContact}
              className="grid md:grid-cols-3 gap-5"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    fullName: e.target.value,
                  })
                }
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none"
                required
              />

              <input
                type="text"
                placeholder="Relationship"
                value={form.relationship}
                onChange={(e) =>
                  setForm({
                    ...form,
                    relationship: e.target.value,
                  })
                }
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none"
                required
              />

              <button
                className="md:col-span-3 bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition"
              >

                Save Emergency Contact

              </button>

            </form>

          </motion.div>

          {/* Contact List */}

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: .4 }}

            className="mt-10"

          >

            <h2 className="text-3xl font-bold mb-6">

              📞 Saved Contacts

            </h2>

            {contacts.length === 0 ? (

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center border border-white/10">

                <h3 className="text-2xl">

                  No Contacts Available

                </h3>

                <p className="text-slate-400 mt-3">

                  Add your emergency contacts above.

                </p>

              </div>

            ) : (

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {contacts.map((contact, index) => (

                  <motion.div

                    key={contact._id}

                    initial={{
                      opacity: 0,
                      y: 30,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      delay: index * .08,
                    }}

                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}

                    className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-xl"

                  >

                    <div className="flex items-center justify-between">

                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-2xl">

                        👤

                      </div>

                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">

                        Active

                      </span>

                    </div>

                    <h2 className="text-2xl font-bold mt-5">

                      {contact.fullName}

                    </h2>

                    <p className="text-slate-400 mt-2">

                      {contact.relationship}

                    </p>

                    <p className="text-cyan-300 mt-2">

                      📱 {contact.phone}

                    </p>

                    <button

                      onClick={() => remove(contact._id)}

                      className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl py-3 font-semibold transition"

                    >

                      Delete Contact

                    </button>

                  </motion.div>

                ))}

              </div>

            )}

          </motion.div>

        </div>

      </div>

    </div>
  );
}