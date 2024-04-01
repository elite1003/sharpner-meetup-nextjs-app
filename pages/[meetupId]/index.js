import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetUpIdPage(props) {
  return <MeetupDetail {...props.meetup} />;
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  //data fetching step
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
    {
      id: "m3",
      title: "A Third Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Some address 5, 12345 Some City",
      description: "This is a Third meetup!",
    },
  ];
  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);
  return {
    props: {
      meetup,
    },
  };
}
