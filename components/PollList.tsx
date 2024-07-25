import React from 'react';
import Poll from './Poll';

interface PollListProps {
  polls: {
    id: string;
    poll_name: string;
    question: string;
    start_date: string;
    end_date: string;
    blog: string;
    poll_option: { id: string; option: string; option_image: string; total_users: string; }[];
  }[];
}

const PollList: React.FC<PollListProps> = ({ polls }) => {
  return (
    <div>
      {polls.map(poll => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </div>
  );
};

export default PollList;
