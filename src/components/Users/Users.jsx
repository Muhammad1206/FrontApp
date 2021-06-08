import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getDataUserById,
  getDataUserByName,
  getUsersData,
} from "../../redux/reducers/users-reducer";
import { UserCard } from "./User/UserCard";
import style from "./Users.module.css";

const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users.users, shallowEqual);
  const usersCard = usersData.map((users, index) => (
    <UserCard
      key={index}
      idUser={users.char_id}
      img={users.img}
      name={users.name}
      category={users.category}
      occupation={users.occupation}
      birthday={users.birthday}
      portrayed={users.portrayed}
      status={users.status}
    />
  ));

  
//newSearchTextChange - Функция для поисковика
  const newSearchTextChange = (event) => {
    const body = event.target.value.replace(/\s/g, "");
    const searchText = isNaN(body);

    if (searchText) {
      dispatch(getDataUserByName(body));
    } else {
      dispatch(getDataUserById(body));
    }
  };

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className={style.container}>
      <div className={style.searchPanel}>
        <input
          type="text"
          placeholder="Search..."
          onChange={newSearchTextChange}
        />
      </div>
      <div className={style.cards}>{usersCard}</div>
    </div>
  );
};

export default Users;
