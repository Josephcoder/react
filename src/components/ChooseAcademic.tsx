import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useTerms from '../hooks/useTerms';
import useCamisQueryStore from '../store';
import useTerm from '../hooks/useTerm';
const ChooseAcademic = () => {
  const { data: terms, error } = useTerms();

  const setSelectedTermId = useCamisQueryStore((s) => s.setTermId);
  const selectedTermId = useCamisQueryStore((s) => s.camisQuery.termId);
  const selectedTerm = useTerm(selectedTermId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} size="md">
        {selectedTerm?.name || 'Term'}
      </MenuButton>
      <MenuList>
        {terms?.map((term) => (
          <MenuItem onClick={() => setSelectedTermId(term.id)} key={term.id}>
            {term.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ChooseAcademic;
