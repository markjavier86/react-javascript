import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-info">
          <Link to="/multiplication-table">Multiplication Table</Link>
        </li>
        <li class="list-group-item list-group-item-secondary">
          <Link to="/sum-of-natural-numbers">Sum of Natural Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-light">
          <Link to="/sum-of-digits">Sum of Digits in a String</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          This is a dark list group item
        </li>
      </ol>
    </div>
  );
}

export default Home;
