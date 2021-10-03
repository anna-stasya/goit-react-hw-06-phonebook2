import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={s.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p className={s.name}>{name}</p>
        <p className={s.tel}>{number}</p>
        <button className={s.btnDel} onClick={() => onDeleteContacts(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

//-----------------поиск по фильтру
const getVisisbleContacts = (allContacts, filter) => {
  const normoliseFilter = filter.toLowerCase();

  console.log(allContacts);

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normoliseFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisisbleContacts(state.items, state.filter),
});


const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);






//-----------------другой вариант записи mapStateToProps
// const mapStateToProps = state => {
//   const { filter, items } = state;
//   const visibilContacts = getVisisbleContacts(items, filter);

//   return { contacts: visibilContacts };
// };