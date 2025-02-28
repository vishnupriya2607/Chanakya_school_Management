import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ role }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const headers = { Authorization: token };

      try {
        if (role === 'admin') {
          const res = await axios.get('http://localhost:5000/api/users/admin/classes', { headers });
          setData(res.data);
        } else if (role === 'staff') {
          const res = await axios.get('http://localhost:5000/api/users/staff/class', { headers });
          setData(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [role]);

  return <div>{JSON.stringify(data)}</div>;
};

export default Dashboard;
