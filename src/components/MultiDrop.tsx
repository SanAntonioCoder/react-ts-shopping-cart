import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "./DropdownItems";
import "./MultiDrop.css";

function MultiDrop() {
  return (
    <>
      <Dropdown className="d-inline mx-2 ">
        <Dropdown.Toggle
          variant="light"
          style={{ borderRadius: 50, marginLeft: 60 }}
          id="dropdown-autoclose-true"
        >
          New & Features
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-large">
          <Dropdown.Item href="#">
            <DropdownItem />
          </Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle
          variant="light"
          style={{ borderRadius: 50 }}
          id="dropdown-autoclose-inside"
        >
          Men
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle
          variant="light"
          style={{ borderRadius: 50 }}
          id="dropdown-autoclose-outside"
        >
          Women
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle
          variant="light"
          style={{ borderRadius: 50 }}
          id="dropdown-autoclose-false"
        >
          Kids
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle
          variant="light"
          style={{ borderRadius: 50 }}
          id="dropdown-autoclose-false"
        >
          Accessories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle
          variant="light"
          style={{ borderRadius: 50 }}
          id="dropdown-autoclose-false"
        >
          Sale
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default MultiDrop;
