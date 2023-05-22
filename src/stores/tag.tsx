import { createContext, useState, useEffect } from "react";
import { publicFetch } from "@utils/service";

const TagContext = createContext({} as any);
const { Provider } = TagContext;

const TagProvider = ({ children }: any) => {
  const [tagState, setTagState] = useState(null);

  useEffect(() => {
    const fetchPopularTags = async () => {
      const { data } = await publicFetch.get("/tags/populertags");
      setTagState(data);
    };

    fetchPopularTags();
  }, []);

  return <Provider value={{ tagState }}>{children}</Provider>;
};

export { TagContext, TagProvider };
