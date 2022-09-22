import user from '../data/user.json';
import Profile from './profile/Profile.jsx';
export const App = () => {
  return (
    <Profile
      // username={user.username}
      // tag={user.tag}
      // location={location}
      // avatar={avatar}
      // followers={stats.followers}
      // views={stats.views}
      // likes={stats.likes}
      user={user}
    />
  );
};
