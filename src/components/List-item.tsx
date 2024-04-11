import React from "react";

const List_item = () => {
  return (
    <>
      <div>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <details open>
              <summary>Women's Fashion</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>Men's Fashion</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Electronics</a>
          </li>
          <li>
            <a>Home & Lifestyle</a>
          </li>
          <li>
            <a>Medicine</a>
          </li>
          <li>
            <a>Sports & Outdoor</a>
          </li>
          <li>
            <a>Boy's & Toys</a>
          </li>
          <li>
            <a>Health & Beauty</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default List_item;
