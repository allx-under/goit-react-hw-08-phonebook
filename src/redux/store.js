import { configureStore, createReducer } from '@reduxjs/toolkit';
import { setFilter } from './contactsRedux/contactsActions';
import contactsReducer from './contactsRedux/contactsSlice';
import authReducer from './authRedux/authSlice';

const filter = createReducer('', {
  [setFilter]: (_, action) => action.payload,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filter,
  },
});

// const reducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return { ...store, items: [...store.items, action.payload] };

//     case REMOVE_CONTACT:
//       return {
//         ...store,
//         items: store.items.filter(({ id }) => id !== action.payload),
//       };
//     case SET_FILTER:
//       return { ...store, filter: action.payload };
//     default:
//       return store;
//   }
// };

// const items = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],

//   [removeContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

export default store;
