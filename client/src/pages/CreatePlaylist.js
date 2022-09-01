import { SectionWrapper, SearchBar } from "../components";
import { search } from "../spotify";

const CreatePlaylist = () => {
  return (
    <SectionWrapper>
      <SearchBar onSearch={search} />
    </SectionWrapper>
  );
};

export default CreatePlaylist;
