import axios from "axios";
import React, { useEffect, useState } from "react";
import "./create.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import SideBar from "../../Account/SideBar";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
function Create() {
  const ariaLabel = { "aria-label": "description" };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [des, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [color, setColor] = useState("");
  const [last, setLast] = useState("");
  const [newp, setNewprice] = useState("");
  const [size, setSize] = useState("");
  const [seller, setSeller] = useState("");
  const [cate, setCate] = useState([]);
  const [category, setCategory] = useState("");
  const [user, setUser] = useState({});
  const [idu, setIdu] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories/get")
      .then((res) => {
        const idd = Cookies.get("id");
        setCate(res.data);
        setIdu(idd);
        console.log("categories", res.data);
        if (idu)
          axios
            .get("http://localhost:3000/api/product/jib/" + idu)
            .then((ress) => {
              setUser(ress.data[0].name);
            })
            .catch((err) => {
              console.log(err);
            });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idu]);

  const add = () => {
    const obj = {
      name: name,
      image: [image],
      lastprice: last,
      newprice: newp,
      categorys_idcat: category,
      users_idu: idu,
      rate: rate,
      discription: des,
      color: color,
      size: size,
      sellername: user,
    };
    console.log(obj);
    axios
      .post("http://localhost:3000/api/product/add", obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);

  return (
    <div className="post-form">
      <h1>Create a new Product</h1>

      <Input
        className="input-field"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="Rate"
        onChange={(e) => setRate(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="last price"
        onChange={(e) => setLast(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="New price"
        onChange={(e) => setNewprice(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="Size"
        onChange={(e) => setSize(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
      />

      {cate.length > 0 && (
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            defaultValue={""}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {cate.map((el, i) => (
              <MenuItem key={i} value={el.idcat}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <div className="button-container">
        <button
          className="add-button"  
          onClick={() => {
            add();
          }}
        >
          <Link to="/products">Add</Link>
        </button>
      </div>
      <SideBar/>
    </div>
  );
}

export default Create;
