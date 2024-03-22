import React from 'react'
import './styles.css'

export const LiWorkingHours = ({ClassName, week, hours}) => {
    const listItem = ClassName ? (
        <li>
        <h3>{week}</h3>
        <div></div>
        <span className={ClassName}>{hours}</span>
      </li>
      ) : (
        <li>
          <h3>{week}</h3>
          <div></div>
          <p>{hours}</p>
        </li>
      );
    
      return listItem;
}
