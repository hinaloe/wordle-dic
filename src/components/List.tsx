import { useEffect, useState } from "react";
import { ValidList } from "../dic/validlist";
import { WordList } from "../dic/wordlist";
import { Item } from "./Item";

type Props = {
  search: string;
  matchType: "prefix" | "suffix" | "pattern";
};

const words = [...ValidList, ...WordList].sort();

export const List: React.FC<Props> = function List(props) {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    if (
      props.search === "" ||
      props.search.length > 5 ||
      (props.matchType === "pattern" && props.search.length != 5)
    ) {
      return;
    }

    let input = props.search.toLowerCase();

    if (props.matchType === "pattern") {
      input = input.replaceAll(/[^a-z.?+*]/g, "").replaceAll(/[^a-z]/g, '.');
    }

    setTimeout(() => {
      const result = words.filter((word) => {
        switch (props.matchType) {
          case "prefix":
            return word.startsWith(input);
          case "suffix":
            return word.endsWith(input);
          case "pattern":
            return new RegExp(`^${input}$`, "i").test(word);
        }
      });

      setResult(result);
    }, 10);
  }, [props.search, props.matchType]);

  return (
    <>
      {result.map((item) => (
        <Item key={item} word={item} />
      ))}
    </>
  );
};
