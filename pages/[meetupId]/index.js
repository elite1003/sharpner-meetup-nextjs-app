import MeetupDetail from "@/components/meetups/MeetupDetail";
import { useRouter } from "next/router";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const MeetUpIdPage = () => {
  const router = useRouter();
  const id = router.query.meetupId;
  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === id);

  return <MeetupDetail {...meetup} />;
};

export default MeetUpIdPage;
