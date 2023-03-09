export default {
  name: process.env.NAME, // actual name of the recipient (Mandatory)

  nickname: process.env.NICKNAME, // nickname(optional)

  pic: process.env.PIC, // image url of recipients (Mandatory)

  showScrollMsg: true, // set to false if you do not want the scrolling message

  birthDate: process.env.BIRTH_DATE || '2023-03-9', // Mention birthday date in YYYY-MM-DD format.
};
