import React, { useEffect, useState } from 'react';
import './Session.scss';
import { useApi } from '../../apis/GetMethod';
import moment from 'moment';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sessions() {
  const socket = useSelector((state) => state?.socket?.socket);
  const { data, loading, error, fetchData } = useApi();
  const navigate = useNavigate();
  const [get, setParams] = useSearchParams();

  const [getData, setGetData] = useState([]);
  const [getData1, setGetData1] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [active, setActive] = useState('Today');

  useEffect(() => {
    fetchData('GET', '/zoom/meeting/get-zoom-meet', null);
  }, [active]);

  const datas = ['Today', 'Tomorrow', 'Yesterday'];

  const handleChange = (params) => {
    setActive(params);
    navigate(`/sessions?Name=${params}`);
  };

  const AllData = getData1?.length > 0 ? getData1 : getData;

  useEffect(() => {
    const result = [];
    const today = moment();
    const tomorrow = moment().add(1, 'days');

    AllData?.forEach((item) => {
      const meetingDate = moment(item?.MeetingDate);

      if (active === 'Today' && meetingDate.isSame(today, 'day')) {
        result.push({ ...item, isToday: true });
      } else if (active === 'Tomorrow' && meetingDate.isSame(tomorrow, 'day')) {
        result.push({ ...item, isTomorrow: true });
      } else if (active === 'Yesterday' && meetingDate.isBefore(today, 'day')) {
        result.push({ ...item, isYesterday: true });
      }
    });

    setResultData(result);
  }, [AllData, active]);

  useEffect(() => {
    if (socket && typeof socket.on === 'function') {
      const handleNewMeeting = (message) => {
        setGetData1(message || []);
      };

      socket.on('new-meeting', handleNewMeeting);

      return () => {
        socket.off('new-meeting', handleNewMeeting);
      };
    }
  }, [socket]);

  useEffect(() => {
    if (data?.data) {
      setGetData(data.data);
    }
  }, [data]);

  return (
    <div>
      <div className="days-list mb-5">
        {datas.map((item, index) => (
          <div key={index}>
            <button
              className={(get?.get('Name') ? get?.get('Name') : 'Today') === item ? 'active' : 'inactive'}
              onClick={() => handleChange(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      <div className="main-session-cards">
        {resultData?.map((item, index) => (
          <div className="card-sessions fs-3 mb-3" key={index}>
            <div className="fw-bold">
              {item?.name}
            </div>
            <div className="mt-3">
              {moment(item?.MeetingDate).isSame(moment(), 'day') ? (
                <button className="join-meeting">Join</button>
              ) : moment(item?.MeetingDate).isBefore(moment(), 'day') ? (
                <button className="join-meeting-end">Meeting Expired</button>
              ) : (
                <button className="join-meeting-comming">Meeting Upcoming</button>
              )}
            </div>
          </div>
        ))}

        <div className="text-center mt-5 mb-5 w-100 fs-2 fw-bold">
          {resultData?.length === 0 && <div>No Data Found <span style={{ color: "#e95a5a" }}>{active}</span>...</div>}
        </div>
      </div>
    </div>
  );
}

export default Sessions;
