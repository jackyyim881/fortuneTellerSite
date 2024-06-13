import CardIcon from "./card-icon";
import CardList from "./card-list";
import Navbar from "./navbar";
import { TiCompass, TiHomeOutline, TiShoppingCart } from "react-icons/ti";

export default function Page() {
  const icons = [
    {
      icon: <TiHomeOutline />,
      title: "風水",
      description: "風水是一種中國古老的學問，主要是研究人與環境之間的關係。",
    },
    {
      icon: <TiCompass />,
      title: "命理",
      description: "命理是一種中國古老的學問，主要是研究人的命運。",
    },
    {
      icon: <TiShoppingCart />,
      title: "商務",
      description: "商務是一種中國古老的學問，主要是研究商業。",
    },
  ];

  return (
    <div className="">
      <Navbar />
      <CardList />
      <div className="grid grid-cols-1 m-4 gap-4 md:grid-cols-3">
        {icons.map((item, index) => (
          <CardIcon
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
