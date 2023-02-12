export default {
  name: process.env.NAME, // actual name of the recipient (Mandatory)

  nickname: process.env.NICKNAME, // nickname(optional)

  pic: process.env.PIC, // image url of recipients (Mandatory)

  showScrollMsg: "Sending only the best happy birthday wishes to my bestest friend in the whole wide world.  I hope you know what your friendship means to me, I love you boy, Happy birthday to our favorite person, we have been best friends for so long now, I can’t remember when you weren’t in my life!  Today you get all your heart desires and more.  Sending happy birthday wishes to my bestie.  Have a blessed birthday, and We will make sure that happens!", // set to false if you do not want the scrolling message

  birthDate: process.env.BIRTH_DATE || '2023-02-15', // Mention birthday date in YYYY-MM-DD format
};
