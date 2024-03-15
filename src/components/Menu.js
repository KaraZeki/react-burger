import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Lezzetlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            ></MenuItem>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
