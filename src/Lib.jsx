import React, {useState,useEffect} from 'react'
import axios from "axios";
import SingleBook from "./SingleBook";

function Lib() {
    let [arr, setArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let res =await axios.get("https://www.googleapis.com/books/v1/volumes?q=%22%22");
    console.log(res.data.items);
    setArr([...res.data.items]);
  }
  return (
    <>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {arr.map((item, index) => (
                  <SingleBook
                    key={index}
                    title={item.volumeInfo.title}
                    descrption={item.volumeInfo.description}
                    image={item.volumeInfo.imageLinks?.smallThumbnail}
                  />
                ))}
            </div>
    </>
  )
}

export default Lib