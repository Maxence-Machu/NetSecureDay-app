export default class TalkModel {
  /**
   * @param {string} id The identifier of the talk
   * @param {string} title The title of the talk
   * @param {string} state The state of the talk
   * @param {string} level The level of the talk
   * @param {string} abstract The abstract of the talk
   * @param {string} category The category of the talk
   * @param {string} formats The format of the talk
   * @param {Array<Speaker>} speakers The speakers of the talk
   * @param {string} comments The comments of the talk
   * @param {string} room The room of the talk
   * @param {string} hour The hour of the talk
   * @param {string} requirement The requirements of the talk
   */
  constructor(
    id,
    title,
    state,
    level,
    abstract,
    category,
    formats,
    speakers,
    room,
    hour,
    requirement
  ) {
    this.id = id;
    this.title = title;
    this.state = state;
    this.level = level;
    this.abstract = abstract;
    this.category = category;
    this.formats = formats;
    this.speakers = speakers;
    this.room = room;
    this.hour = hour;
    this.requirement = requirement;
  }
}

export class Speaker {
  /**
   * @param {object} speaker The complete speaker object comming from Conference Hall
   * @param {string} speaker.uid
   * @param {string} speaker.displayName
   * @param {string} speaker.bio
   * @param {Company} speaker.company
   * @param {string} speaker.photoURL
   * @param {string} speaker.twitter
   * @param {string} speaker.github
   */
  constructor(speaker) {
    this.id = speaker.uid;
    this.displayName = speaker.displayName;
    this.bio = speaker.bio;
    this.company = speaker.company;
    this.photoURL = speaker.photoURL;
    this.twitter = speaker.twitter;
    this.github = speaker.github;
  }
}



export class Company {
  /**
   * @param {object} company The complete company object coming from data
   * @param {string} company.id
   * @param {string} company.displayName
   * @param {string} company.photoURL
   */
  constructor(company) {
    this.id = company.id;
    this.displayName = company.displayName;
    this.photoURL = company.photoURL;
  }
}
