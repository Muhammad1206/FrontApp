import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../redux/reducers/users-reducer";
import style from "./Users.module.css";

const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users, shallowEqual);
  const data = getUse0rsData();
  dispatch(data);
  const newSearchTextChange = (event) => {
    const body = event.target.value;
    const searchText = isNaN(body.trim());
    if(searchText) {
        
    }
  };
  return (
    <div className={style.container}>
      <div className={style.searchPanel}>
        <input
          type="text"
          placeholder="Search..."
          onChange={newSearchTextChange}
        />
      </div>
      <div className={style.cards}></div>
    </div>
  );
};

export default Users;
