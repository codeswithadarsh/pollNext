import React from 'react';
import styled from 'styled-components';

const PollContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  background-color: #fff;
`;

const PollOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Option = styled.div`
  flex: 1 1 30%;
  margin: 10px;
  text-align: center;
`;

interface PollProps {
  poll: {
    id: string;
    poll_name: string;
    question: string;
    start_date: string;
    end_date: string;
    blog: string;
    poll_option: { id: string; option: string; option_image: string; total_users: string; }[];
  };
}

const Poll: React.FC<PollProps> = ({ poll }) => {
  return (
    <PollContainer>
      <h2>{poll.poll_name}</h2>
      <p>{poll.question}</p>
      <p><strong>Start Date:</strong> {new Date(poll.start_date).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(poll.end_date).toLocaleDateString()}</p>
      <div className='blogg' dangerouslySetInnerHTML={{ __html: poll.blog }}></div>
      <PollOptions>
        {poll.poll_option.map(option => (
          <Option key={option.id}>
            <img src={option.option_image} alt={option.option} width="100" />
            <p>{option.option}</p>
            <p>👤{option.total_users}</p>
          </Option>
        ))}
      </PollOptions>
    </PollContainer>
  );
};

export default Poll;
