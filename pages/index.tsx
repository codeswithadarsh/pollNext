import { GetServerSideProps } from 'next';
import axios from 'axios';
import PollList from '../components/PollList';

interface HomePageProps {
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

const HomePage: React.FC<HomePageProps> = ({ polls }) => {
  return (
    <div className='contain'>
      <h1>Previous Polls</h1>
      <PollList polls={polls} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('https://www.plutos.one/api/ems/get-previous-poll?campaign_id=5&category=entertainment');
    const data = res.data.data;

    return {
      props: {
        polls: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        polls: [],
      },
    };
  }
};

export default HomePage;
