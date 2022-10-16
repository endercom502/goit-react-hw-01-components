
import user from "./data/user.json";
import statistics from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transaction.json";

import { UserProfile } from "./profile/Profile";
import { UserStats } from "./statistics/Statistics";
import { FierndList } from "./friend_list/FriendList";
import { TransactionHistory } from "./transaction/Transactions";
export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    <UserStats title="UPLOAD STATS" stats={statistics}/>
    </>
    
  );
};
