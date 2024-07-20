import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/addProd">Add Product</Link>
      </button>
      <button>
        <Link to="/Cart">Cart</Link>
      </button>
      <button>
        <Link to="/signup">SignUp</Link>
      </button>
      <button>
        <Link to="/Login">Login</Link>
      </button>
    </>
  );
};

export default Navbar;
