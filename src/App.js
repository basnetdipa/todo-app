import logo from "./logo.svg";
import "./App.css";
import TestingItem from "./testingitem";
import Room1 from "./component/Room1/Room1";
import Room2 from "./component/Room2/Room2";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [taskName, setTaskName] = useState();
  const [editItem, setEditItem] = useState();
  const [myTodoList, setTodoList] = useState([
    {
      id: 1,
      todo: "Changes app.js",
      complete: false,
    },
    {
      id: 2,
      todo: "major task 2",
      complete: false,
    },
    {
      id: 3,
      todo: "major task 3",
      complete: false,
    },
  ]);
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => setTodoList(data.todos));

  // fetch("https://dummyjson.com/todos")
  //.then ((res)=> console.log("success"))
  //.catch((e)=> console.log("failure"))
  //.finally((res)=> console.log("everything done"))

  const changeFunc = (id) => {
    let updatedArray = myTodoList.map((item) => {
      if (item.id == id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    setTodoList(updatedArray);

    // myTodoList[index].complete=true;

    //setTodoList([...myTodoList, {
    // ...myTodoList[index],
    //complete: true,
  };
  const deleteItems = (id) => {
    const filteredItems = myTodoList.filter((item) => {
      return item.id != id;
    });
    setTodoList(filteredItems);
  };

  const updateTaskList = () => {
    setTodoList([
      ...myTodoList,
      {
        id: myTodoList.length + 1,
        todo: taskName,
        complete: false,
      },
    ]);
    console.log(myTodoList);
  };

  const editItems = () => {
    console.log("hey");
  };

  return (
    <div className="all_wrapper">
      <div className="creating">
        <ul className={"todo_wrapper"}>
          {myTodoList.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`single_task ${
                  item.complete ? "complete" : "uncomplete"
                }`}
              >
                {item.todo}
                <div className="action_wrapper">
                  <div className="action">
                    <input
                      type="checkbox"
                      onChange={(e) => changeFunc(item.id)}
                    />
                  </div>

                  <DeleteOutlined onClick={() => deleteItems(item.id)} />
                  <EditOutlined onClick={() => editItems(item.id)} />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="input_wrapper">
          <input
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />

          <button
            className=" ml-3 btn btn-primary"
            disabled={taskName == "" ? true : false}
            onClick={() => updateTaskList()}
          >
            create new task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
