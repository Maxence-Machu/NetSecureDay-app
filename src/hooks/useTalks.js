import { useEffect, useState } from "react";
import Program from "../services/Program";
import TalkModel, { Speaker } from "../classes/TalkModel";
import EventModel from "../classes/EventModel";

const LOCAL_STORAGE_TALKS_KEY = "nsd-2019-talks";

function filterSelectedTalks(program) {
  const selectedTalks = [];

  // Logic for talks
  program.talks.forEach(talk => {

    if(talk.state === 'event') {return}

    const companies = program.companies;

    const speakers = program.speakers
      .filter(speaker => talk.speakers && talk.speakers.includes(speaker.id))
      .map(speaker => {
        let company = speaker.company && companies.filter(cpy => speaker.company.includes(cpy.id));

        speaker.company = company && company[0];

        return new Speaker(speaker);
      });

    const formats = program.formats
      .filter(format => format.id === talk.formats)
      .map(format => format.name)[0];

    const formattedTalk = new TalkModel(
      talk.id,
      talk.title,
      talk.state,
      talk.level,
      talk.abstract,
      talk.category,
      formats,
      speakers,
      talk.room,
      talk.hour,
      talk.requirement
    );
    selectedTalks.push(formattedTalk);
  });

  // Logic for special events
  program.talks.forEach(t => {
    if (t.type === "Event") {
      const event = new EventModel(
        t.id,
        t.title,
        t.state,
        t.abstract,
        t.room,
        t.hour
      );

      selectedTalks.push(event);
    }
  });

  return selectedTalks;
}

export const useTalks = () => {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const program = await Program.getProgram();
      //const data = await ConferenceHall.getData();
      const selectedTalks = filterSelectedTalks(program);
      localStorage.setItem(
        LOCAL_STORAGE_TALKS_KEY,
        JSON.stringify(selectedTalks)
      );
      setTalks(selectedTalks);
      setLoading(false);
    }

    // const selectedTalks = localStorage.getItem(LOCAL_STORAGE_TALKS_KEY);

    // if (selectedTalks === null || selectedTalks === "") {
    //   fetchData();
    // } else {
    //   setTalks(JSON.parse(selectedTalks));
    //   setLoading(false);
    // }
    fetchData();
  }, [setTalks, setLoading]);

  return [talks, loading];
};
