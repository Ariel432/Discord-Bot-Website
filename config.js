import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Alb Bot",
  //BotName
  inviteLink:
    "https://dsc.gg/alb-bot",
  //BotInvite Link
  Features: [
    {
      name: "Fun",
      description:
        "Promoting diverse fun commands to our users.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "Uptime 99.5%",
      description:
        "We offer an absurd availability time, whenever you need the bot will be there to help you, 7 days a week.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Simple",
      description:
        "With simple commands you can have the bot 100% configured, without complications.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Multifunctional",
      description:
        "You will probably find what you need just by using Alb.",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 40, //-  - Your
  memberCount: 100000, //--   - Bot
  executedCommand: 700, //--  - Stats
  availableCommand: 80, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  //githubLink: "https://github.com/mohitmimani",
 // twitterLink: "https://twitter.com",
  //mediumLink: "https://medium.com/",
 // facebookLink: "https://facebook.com",
  //discordLink: "https://discord.com",
 // youtubeLink: "https://www.youtube.com/channel/UCfhRHeex9lU0ZAVJot6Z2ZQ",
};

export default config;
