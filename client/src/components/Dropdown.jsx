

//     const Dropdown = () => {
//   return (
//     <div>
//     </div>
//   );
// };

// export default Dropdown;



// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];


//   return (
//     <div className="dropdown">
//       <button className="btn btn-primary" onClick={toggleDropdown}>
//         Select an Option
//       </button>
//       {isOpen && (
//         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//           {dropdownOptions.map((option) => (
//             <li key={option} onClick={() => handleOptionSelect(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//       {selectedOption && <p>You selected: {selectedOption}</p>}
//     </div>
//   );
// };

// export default Dropdown;
