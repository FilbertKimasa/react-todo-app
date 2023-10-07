/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import { useState, useRef } from 'react';
import { useOnClickOutside } from './useOnClickOutside';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  console.log(ref);
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;