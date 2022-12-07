import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    { name: "abc", phonenumber: "123", email: "a@b.com" },
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: "new appt",
      contact: { name: "abc", phonenumber: "123", email: "a@b.com" },
      date: "12/11/2021",
      time: "9:51",
    },
  ]);
  console.log(contacts);
  /*
  Define state variables for 
  contacts and appointments 
  */
  const addContacts = (cname, cphonenum, cemail) => {
    setContacts((prevContacts) => {
      const contact = {
        name: cname,
        phonenumber: cphonenum,
        email: cemail,
      };
      return [...prevContacts, contact];
    });
  };
  const addAppointments = (atitle, contactobj, adate, atime) => {
    setAppointments((prevAppointments) => {
      const appointment = {
        title: atitle,
        contact: contactobj,
        date: adate,
        time: atime,
      };
      return [...prevAppointments, appointment];
    });
  };
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContacts={addContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointments={addAppointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
