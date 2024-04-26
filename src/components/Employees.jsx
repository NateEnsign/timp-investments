import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "./Employees.module.css";

const ourTeam = [
  {
    id: 1,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Michael Jordan",
    title: "Manager, Investor Relations",
    history: `Esse ex id excepteur adipisicing deserunt ut dolore do incididunt labore sunt consequat. Consequat laborum est duis pariatur id Lorem proident incididunt adipisicing. Esse proident nulla consectetur minim culpa aliqua deserunt irure dolore quis elit. Aute incididunt velit aliquip dolore eu Lorem aliqua cupidatat nostrud voluptate amet exercitation amet. Nisi est ea in aliquip reprehenderit consectetur proident. Consectetur eiusmod anim quis quis.`,
  },
  {
    id: 2,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Dennis Rodman",
    title: "Managing Director, Head of Debt and Insurance",
    history: `Eiusmod minim velit deserunt sunt pariatur nisi ipsum. Mollit ullamco laboris non elit consequat laborum. Id sunt proident anim Lorem.`,
  },
  {
    id: 3,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Scotty Pippen",
    title: "Vice President, Asset Strategy",
    history: `Elit nisi eiusmod deserunt elit quis labore esse et nulla eiusmod. Deserunt est labore dolor minim ut adipisicing excepteur. Sunt dolore laborum non nulla ut consequat dolore ea amet voluptate ullamco nostrud non dolor. Ad aliquip laborum amet magna qui. Ut cillum velit dolore amet nisi in laborum amet.`,
  },
  {
    id: 4,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Steve Kerr",
    title: "Founder and Chairman",
    history: `Sint cupidatat consectetur duis dolor in consequat aliquip irure ullamco duis consectetur minim incididunt sunt. Magna dolore est culpa officia commodo ut. Exercitation amet culpa elit et do. Excepteur duis in dolore ipsum amet id mollit ad. Duis est proident aliqua cillum cillum amet minim mollit exercitation ut nulla deserunt veniam anim.`,
  },
  {
    id: 5,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Karl Malone",
    title: "Asset Manager",
    history: `Velit minim mollit sunt ea do est. Veniam quis et aliquip in commodo dolor. Anim nostrud adipisicing ex esse ea culpa et laborum exercitation qui quis. Pariatur in esse elit dolore aliquip exercitation incididunt eu exercitation duis. Velit sint sint officia ut elit sint quis est nulla.`,
  },
  {
    id: 6,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "John Stockton",
    title: "Executive Vice President, Western Region",
    history: `Sint sunt in consequat nisi incididunt veniam sit nulla quis nisi non. Aliquip ea occaecat minim nostrud commodo voluptate quis proident ullamco nulla dolor laboris occaecat laboris. Sit deserunt pariatur mollit velit deserunt amet in.`,
  },
  {
    id: 7,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Carmello Anthony",
    title: "CFO",
    history: `Ullamco nisi cupidatat aute deserunt culpa laboris est magna nostrud sunt pariatur velit. Nisi dolore eu ea dolor quis tempor minim consectetur Lorem ipsum nostrud anim do eiusmod. Sint eiusmod ullamco dolor sunt ad laboris incididunt voluptate ullamco ea magna commodo. Et in pariatur exercitation sunt. Labore dolore est fugiat labore fugiat culpa. Enim ea fugiat cillum velit aliqua qui reprehenderit laborum dolore esse exercitation consectetur dolore magna. Ullamco quis dolore tempor aliqua reprehenderit nisi.`,
  },
  {
    id: 8,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Jason Kidd",
    title: "Founder, Chairman and CIO",
    history: `Culpa consequat amet enim eiusmod fugiat culpa quis qui ipsum adipisicing eiusmod do consequat Lorem. Magna proident anim qui adipisicing reprehenderit incididunt pariatur tempor excepteur. Irure reprehenderit et nostrud mollit id nisi sit qui sunt. Non ad elit ea fugiat et nulla pariatur ut. Proident reprehenderit exercitation tempor ex aute amet sint tempor do eiusmod deserunt voluptate sit. Lorem ut fugiat elit laboris non ad in Lorem deserunt fugiat aute laborum irure esse. Do dolore in esse non amet eu laboris do.`,
  },
  {
    id: 9,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Kevin Garnett",
    title: "Founder and Chairman",
    history: `Proident pariatur tempor dolor est qui. Ullamco sint officia adipisicing enim duis. Proident et duis dolore mollit sint minim culpa magna anim. Velit magna reprehenderit qui laboris veniam. Elit deserunt eiusmod dolore cillum cupidatat eu cillum velit. Velit aliquip veniam ipsum non adipisicing deserunt.`,
  },
  {
    id: 10,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Tim Duncan",
    title: "Project Manager",
    history: `Exercitation sint fugiat Lorem nostrud ipsum qui mollit incididunt sint. Do incididunt voluptate pariatur sit qui magna elit sit ad laboris velit amet ullamco. Laborum aute deserunt commodo eu aliqua pariatur excepteur voluptate eiusmod elit sint ex magna ut. Minim do deserunt duis nulla velit. Lorem ullamco officia commodo nisi sit laboris.`,
  },
  {
    id: 11,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Nate Ensign",
    title: "Janitor",
    history: `Mollit proident amet magna aute ullamco sint eiusmod id. Dolor tempor est ad sit. Laboris magna do occaecat qui veniam qui.`,
  },
  {
    id: 12,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Kareem Abdul-Jabbar",
    title: "Controller",
    history: `Lorem officia Lorem ea incididunt esse anim veniam officia eiusmod adipisicing pariatur adipisicing. Aliquip ipsum labore fugiat anim sint laborum cillum est occaecat ut in esse veniam ea. Dolor proident nostrud cupidatat elit reprehenderit ea. Fugiat ea dolore proident ad nisi ex nostrud anim eu incididunt magna. Mollit ex irure magna cillum cillum non mollit dolore anim nulla reprehenderit tempor esse. Commodo qui in cupidatat est adipisicing et. Consequat laborum consectetur non pariatur labore aute officia laboris nisi tempor cillum sit exercitation.`,
  },
  {
    id: 13,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Charles Barkley",
    title: "Vice President Aquisitions",
    history: `Irure excepteur minim pariatur reprehenderit fugiat et labore consequat consectetur occaecat. Nostrud nisi consequat est aliqua commodo eu fugiat eu. Reprehenderit pariatur cupidatat anim adipisicing sit deserunt. Consectetur consequat nostrud minim occaecat consectetur et sint velit est ex. Ex non est exercitation proident consequat ullamco irure incididunt veniam aute quis irure.`,
  },
  {
    id: 14,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Wilt Chamberlain",
    title: "Senior Fund Accountant",
    history: `Do pariatur excepteur quis ullamco incididunt culpa incididunt. Labore id consequat duis cupidatat. Laboris laboris laboris non eu eu quis amet aute laborum.`,
  },
  {
    id: 15,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Larry Bird",
    title: "CEO",
    history: `Ea elit tempor anim ex. Ad incididunt duis cillum ut do dolore. Mollit reprehenderit duis ullamco cillum excepteur magna aliquip. Tempor ipsum et dolor qui consectetur nisi exercitation quis eiusmod ea ea.`,
  },
  {
    id: 16,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Patrick Ewing",
    title: "Project Manager",
    history: `Deserunt mollit ut laborum veniam. Occaecat in voluptate nulla excepteur in labore reprehenderit cillum ad Lorem id et enim eiusmod. Velit velit aute qui irure commodo ullamco officia fugiat occaecat consectetur occaecat dolore.`,
  },
  {
    id: 17,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Magic Johnson",
    title: "Asset Manager",
    history: `Ut in id officia ex ad dolore. Qui dolore deserunt nostrud duis eu incididunt proident enim occaecat eu labore cillum. Magna laboris ex et esse Lorem qui veniam tempor ut aute proident ullamco mollit. Cillum aliquip anim ex amet velit sunt velit.`,
  },
  {
    id: 18,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Oscar Robertson",
    title: "Systems Manager",
    history: `Eiusmod culpa est excepteur aliqua et exercitation. Proident eiusmod reprehenderit fugiat mollit ex adipisicing amet labore. Do ea et non eu enim nostrud laboris ea anim officia. Ea qui consectetur do qui minim nulla eu excepteur esse exercitation proident do pariatur. Exercitation ex qui ad dolore dolor amet magna.`,
  },
  {
    id: 19,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: `Shaquille O'Neal`,
    title: "Vice President, Capital Needs",
    history: `Reprehenderit pariatur exercitation nostrud excepteur amet incididunt. Labore excepteur amet veniam eiusmod aute quis amet consectetur. Aliquip ullamco esse occaecat veniam ea proident amet enim minim excepteur anim pariatur amet. Officia commodo elit excepteur eu qui nulla proident labore ad. Proident qui excepteur do nulla consequat fugiat. Anim fugiat ad ad ut velit nisi sint do commodo labore do excepteur irure.`,
  },
  {
    id: 20,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Hakeem Olajuwon",
    title: "Project Manager",
    history: `Irure sit tempor ut culpa aute id proident officia enim. Lorem minim ad cillum amet officia in mollit nisi est ut magna Lorem laborum fugiat. Qui exercitation cillum exercitation consequat aliqua.`,
  },
  {
    id: 21,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Bill Russel",
    title: "Manager, Financial Planning and Analysis",
    history: `Aute quis fugiat ea ad laboris. Incididunt est ut elit laboris non dolore Lorem pariatur minim. Pariatur sint elit ad consequat laborum enim. Sunt elit ea eu proident amet est laborum ea eu Lorem quis deserunt aliqua. Elit velit est sint officia aliquip sit do irure ea nisi sit. Labore nulla proident aliqua ad et mollit nisi ea cupidatat in ex enim.`,
  },
  {
    id: 22,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "David Robinson",
    title: "Vice President Aquisitions",
    history: `Elit nulla elit adipisicing excepteur Lorem et. Incididunt velit magna occaecat quis irure consequat laborum amet et. Velit proident esse id ex aliqua cupidatat esse. Velit adipisicing magna magna exercitation nisi aliquip quis enim ad ut exercitation. Officia nisi fugiat tempor laborum non adipisicing. Deserunt irure irure consequat dolore. Enim tempor duis voluptate occaecat adipisicing ipsum eiusmod minim voluptate commodo voluptate.`,
  },
  {
    id: 23,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Bill Walton",
    title: "Vice President, Compliance",
    history: `Magna nisi amet cillum aute anim elit est incididunt. Aute Lorem qui nostrud do consectetur officia aliquip labore. Mollit irure ullamco labore veniam nulla exercitation irure incididunt nisi labore nostrud ipsum. Et id voluptate fugiat non anim dolore do sint. Id laboris ea excepteur commodo ullamco ad laboris fugiat pariatur velit pariatur id. Ex labore irure sit dolor do incididunt elit esse.`,
  },
  {
    id: 24,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/michael-jordan-looks-640x853.jpg",
    name: "Jerry West",
    title: "Asset Manager",
    history: `Aute in fugiat est irure dolore ipsum eu minim dolore esse. Est non veniam esse dolor nostrud elit. Consectetur consequat et dolore occaecat eiusmod ea enim minim. Pariatur ad pariatur tempor enim. Pariatur officia non sunt amet. Aliqua magna excepteur ea do pariatur consequat sit commodo dolor consequat commodo mollit sit. Amet est tempor consequat ea irure esse aute exercitation cillum velit esse fugiat tempor.`,
  },
];

const Employees = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTeam = showAll ? ourTeam : ourTeam.slice(0, 12);

  const employeeDisplay = visibleTeam.map((member) => (
    <EmployeeCard key={member.id} member={member} />
  ));

  const buttonText = showAll ? "Show less" : "Show more";

  const handleButtonClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.employeeContainer}>
      {employeeDisplay}
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Employees;
