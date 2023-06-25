import React, { useState, useEffect } from 'react';

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      const response = await fetch('http://localhost:3000/api/getCompany');
      console.log("respponseeee",response)
      const data = await response.json();
      setUserCount(data.count);
    };
    fetchUserCount();
  }, []);

  return (
    <div>
      <p>There are {userCount} registered users.</p>
    </div>
  );
};

export default UserCount;